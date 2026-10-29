import { MediaItem, PlayState, redux, TidalApi } from "@luna/lib";

// #region Normalized shapes sent to the phone
type Cover = string | undefined;
export type RTrack = { kind: "track"; id: string; title: string; artist: string; album?: string; albumId?: string; cover: Cover; duration?: number; explicit?: boolean };
export type RAlbum = { kind: "album"; id: string; title: string; artist: string; cover: Cover; year?: string; tracks?: number };
export type RPlaylist = { kind: "playlist"; id: string; title: string; subtitle?: string; cover: Cover; tracks?: number };
export type RArtist = { kind: "artist"; id: string; title: string; cover: Cover };

const img = (uuid: string | null | undefined, size = 320): Cover => (uuid ? `https://resources.tidal.com/images/${uuid.replace(/-/g, "/")}/${size}x${size}.jpg` : undefined);

const withVersion = (title?: string, version?: string | null) => (version && !title?.includes(version) ? `${title} (${version})` : (title ?? "Unknown"));
const artistNames = (artists?: { name?: string }[] | null, fallback?: { name?: string } | null) =>
	artists?.length ? artists.map((a) => a.name).filter(Boolean).join(", ") : (fallback?.name ?? "Unknown artist");

export const toTrack = (t: any): RTrack => ({
	kind: "track",
	id: String(t.id),
	title: withVersion(t.title, t.version),
	artist: artistNames(t.artists, t.artist),
	album: t.album?.title,
	albumId: t.album?.id !== undefined ? String(t.album.id) : undefined,
	cover: img(t.album?.cover, 160),
	duration: t.duration,
	explicit: t.explicit,
});
const toAlbum = (a: any): RAlbum => ({
	kind: "album",
	id: String(a.id),
	title: withVersion(a.title, a.version),
	artist: artistNames(a.artists, a.artist),
	cover: img(a.cover),
	year: a.releaseDate?.slice(0, 4),
	tracks: a.numberOfTracks,
});
const toPlaylist = (p: any): RPlaylist => ({
	kind: "playlist",
	id: String(p.uuid),
	title: p.title ?? "Playlist",
	subtitle: p.creator?.name || (p.type === "EDITORIAL" ? "TIDAL" : undefined),
	cover: img(p.squareImage, 320) ?? img(p.image, 320),
	tracks: p.numberOfTracks,
});
const toArtist = (a: any): RArtist => ({ kind: "artist", id: String(a.id), title: a.name ?? "Artist", cover: img(a.picture) });
// #endregion

// #region API helpers
const api = async <T = any>(path: string): Promise<T> => {
	const sep = path.includes("?") ? "&" : "?";
	const res = await fetch(`https://desktop.tidal.com/v1/${path}${sep}${TidalApi.queryArgs()}`, { headers: await TidalApi.getAuthHeaders() });
	if (!res.ok) throw new Error(`TIDAL API ${res.status} on ${path.split("?")[0]}`);
	return res.json();
};
const userId = () => redux.store.getState().session.userId;
const onlyTracks = (items: any[] = []) => items.filter((i) => (i.type ?? "track").toLowerCase() === "track").map((i) => i.item ?? i);
// #endregion

// #region State snapshot
const resolveTrack = async (id: redux.ItemId | undefined): Promise<RTrack | null> => {
	if (id === undefined) return null;
	const cached = (redux.store.getState().content.mediaItems as Record<string, any>)[String(id)]?.item;
	if (cached) return toTrack(cached);
	const mediaItem = await MediaItem.fromId(id).catch(() => undefined);
	return mediaItem ? toTrack(mediaItem.tidalItem) : null;
};

let trackCache: { id?: string; track: RTrack | null } = { track: null };
export const snapshot = async () => {
	const pc = PlayState.playbackControls;
	const pq = PlayState.playQueue;
	const id = pc.playbackContext?.actualProductId ?? pq.elements[pq.currentIndex]?.mediaItemId;
	if (String(id) !== trackCache.id) trackCache = { id: String(id), track: await resolveTrack(id) };
	if (trackCache.track) trackCache.track.duration ??= pc.playbackContext?.actualDuration;
	return {
		online: true,
		playing: PlayState.playing,
		track: trackCache.track,
		position: PlayState.currentTime || PlayState.playTime || 0,
		ts: Date.now(),
		volume: pc.volume,
		muted: pc.muted,
		shuffle: PlayState.shuffle,
		repeat: PlayState.repeatMode,
		queueIndex: pq.currentIndex,
		queueLength: pq.elements.length,
		source: pq.sourceName || undefined,
		quality: pc.playbackContext
			? [pc.playbackContext.bitDepth && `${pc.playbackContext.bitDepth}-bit`, pc.playbackContext.sampleRate && `${pc.playbackContext.sampleRate / 1000} kHz`, pc.playbackContext.codec]
					.filter(Boolean)
					.join(" · ") || undefined
			: undefined,
	};
};
// #endregion

// #region Commands
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

const playList = (ids: (string | number)[], index: number, context: redux.PlayQueueContext) => {
	if (ids.length === 0) throw new Error("Nothing to play");
	redux.actions["playQueue/ADD_NOW"]({
		context,
		mediaItemIds: ids as redux.ItemId[],
		fromIndex: clamp(index, 0, ids.length - 1),
		overwritePlayQueue: true,
	});
	redux.actions["playbackControls/PLAY"]();
};

export const commands: Record<string, (args: any) => unknown> = {
	state: () => snapshot(),

	// Transport
	play: () => PlayState.play(),
	pause: () => PlayState.pause(),
	toggle: () => (PlayState.playing ? PlayState.pause() : PlayState.play()),
	next: () => PlayState.next(),
	previous: () => {
		// Behave like a normal player: restart the track unless we are near its start
		if ((PlayState.currentTime || PlayState.playTime) > 4) PlayState.seek(0);
		else PlayState.previous();
	},
	seek: ({ seconds }: { seconds: number }) => PlayState.seek(Math.max(0, Number(seconds) || 0)),
	volume: ({ value }: { value: number }) => redux.actions["playbackControls/SET_VOLUME"]({ volume: clamp(Math.round(Number(value)), 0, 100) }),
	shuffle: ({ on }: { on: boolean }) => (on ? PlayState.setShuffle(true, true) : PlayState.setShuffle(false, true)),
	repeat: ({ mode }: { mode: number }) => PlayState.setRepeatMode(clamp(Number(mode), 0, 2) as redux.RepeatMode),

	// Queue
	queue: async () => {
		const pq = PlayState.playQueue;
		const from = Math.max(0, pq.currentIndex - 3);
		const slice = pq.elements.slice(from, pq.currentIndex + 60);
		const tracks = await Promise.all(slice.map((e: redux.PlayQueueElement) => resolveTrack(e.mediaItemId)));
		return {
			current: pq.currentIndex,
			items: tracks.map((t: RTrack | null, i: number) => (t ? { ...t, index: from + i } : null)).filter(Boolean),
		};
	},
	jump: ({ index }: { index: number }) => {
		PlayState.moveTo(Number(index));
		redux.actions["playbackControls/PLAY"]();
	},
	addNext: ({ id }: { id: string }) => PlayState.playNext(id as redux.ItemId),
	addLast: ({ id }: { id: string }) => redux.actions["playQueue/ADD_LAST"]({ mediaItemIds: [id as redux.ItemId], context: { type: "UNKNOWN" } }),

	// Playback of collections
	playTracks: ({ ids, index = 0, context }: { ids: string[]; index?: number; context?: redux.PlayQueueContext }) =>
		playList(ids, index, context ?? { type: "UNKNOWN" }),
	playAlbum: async ({ id, index = 0 }: { id: string; index?: number }) => {
		const { items } = await api(`albums/${id}/items?limit=100&offset=0`);
		playList(onlyTracks(items).map((t) => t.id), index, { type: "album", id: id as redux.ItemId });
	},
	playPlaylist: async ({ id, index = 0 }: { id: string; index?: number }) => {
		const res = await TidalApi.playlistItems(id as redux.ItemId);
		playList(onlyTracks(res?.items).map((t) => t.id), index, { type: "playlist", id: id as redux.ItemId });
	},

	// Browsing
	search: async ({ query }: { query: string }) => {
		const q = String(query ?? "").trim();
		if (!q) return { tracks: [], albums: [], playlists: [], artists: [] };
		const r = await api(`search?query=${encodeURIComponent(q)}&limit=12&offset=0&types=ARTISTS,ALBUMS,TRACKS,PLAYLISTS&includeContributors=true`);
		return {
			tracks: (r.tracks?.items ?? []).map(toTrack),
			albums: (r.albums?.items ?? []).map(toAlbum),
			playlists: (r.playlists?.items ?? []).map(toPlaylist),
			artists: (r.artists?.items ?? []).map(toArtist),
		};
	},
	album: async ({ id }: { id: string }) => {
		const [meta, page] = await Promise.all([TidalApi.album(id as redux.ItemId), api(`albums/${id}/items?limit=100&offset=0`)]);
		if (!meta) throw new Error("Album not found");
		return { ...toAlbum(meta), items: onlyTracks(page.items).map(toTrack) };
	},
	playlist: async ({ id }: { id: string }) => {
		const [meta, page] = await Promise.all([TidalApi.playlist(id as redux.ItemId), TidalApi.playlistItems(id as redux.ItemId)]);
		if (!meta) throw new Error("Playlist not found");
		return { ...toPlaylist(meta), items: onlyTracks(page?.items).map(toTrack) };
	},
	artist: async ({ id }: { id: string }) => {
		const [meta, top, albums] = await Promise.all([
			TidalApi.artist(id as redux.ItemId),
			api(`artists/${id}/toptracks?limit=10&offset=0`),
			api(`artists/${id}/albums?limit=50&offset=0`),
		]);
		if (!meta) throw new Error("Artist not found");
		return { ...toArtist(meta), top: (top.items ?? []).map(toTrack), albums: (albums.items ?? []).map(toAlbum) };
	},
	library: async () => {
		const uid = userId();
		const [playlists, albums] = await Promise.all([
			api(`users/${uid}/playlistsAndFavoritePlaylists?limit=50&offset=0&order=DATE_UPDATED&orderDirection=DESC`).catch(() =>
				api(`users/${uid}/playlists?limit=50&offset=0`).then((r) => ({ items: (r.items ?? []).map((playlist: any) => ({ playlist })) })),
			),
			api(`users/${uid}/favorites/albums?limit=50&offset=0&order=DATE&orderDirection=DESC`).catch(() => ({ items: [] })),
		]);
		return {
			playlists: (playlists.items ?? []).map((i: any) => toPlaylist(i.playlist ?? i)),
			albums: (albums.items ?? []).map((i: any) => toAlbum(i.item ?? i)),
		};
	},
	favorites: async () => {
		const r = await api(`users/${userId()}/favorites/tracks?limit=300&offset=0&order=DATE&orderDirection=DESC`);
		return { items: (r.items ?? []).map((i: any) => toTrack(i.item ?? i)) };
	},
};
// #endregion
