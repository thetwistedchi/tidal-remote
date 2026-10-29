import { Tracer, type LunaUnload } from "@luna/core";
import { MediaItem, redux } from "@luna/lib";

import { commands, snapshot } from "./commands";
import { getAddresses, nextCommands, pushState, respond, start, stop } from "./remote.native";
import { settings } from "./store";

export const { trace, errSignal } = Tracer("[TidalRemote]");
export const unloads = new Set<LunaUnload>();
export { Settings } from "./Settings";

// #region Status (read by Settings)
export const status = { running: false, error: undefined as string | undefined, addresses: [] as string[] };
const statusListeners = new Set<() => void>();
export const onStatus = (fn: () => void) => (statusListeners.add(fn), () => statusListeners.delete(fn));
const setStatus = (patch: Partial<typeof status>) => {
	Object.assign(status, patch);
	errSignal!._ = status.error;
	statusListeners.forEach((fn) => fn());
};
// #endregion

// #region State publishing
let publishTimer: ReturnType<typeof setTimeout> | undefined;
const publish = () => {
	clearTimeout(publishTimer);
	publishTimer = setTimeout(async () => {
		try {
			await pushState(await snapshot());
		} catch (err) {
			trace.warn.withContext("publish")(err);
		}
	}, 120);
};

redux.intercept(
	[
		"playbackControls/SET_PLAYBACK_STATE",
		"playbackControls/SEEK",
		"playbackControls/SET_VOLUME",
		"playbackControls/TOGGLE_MUTE",
		"playbackControls/MEDIA_PRODUCT_TRANSITION",
		"playQueue/MOVE_TO",
		"playQueue/MOVE_NEXT",
		"playQueue/MOVE_PREVIOUS",
		"playQueue/ADD_NOW",
		"playQueue/ADD_NEXT",
		"playQueue/ADD_LAST",
		"playQueue/RESET",
		"playQueue/SET_REPEAT_MODE",
		"playQueue/TOGGLE_REPEAT_MODE",
		"playQueue/ENABLE_SHUFFLE_MODE",
		"playQueue/DISABLE_SHUFFLE_MODE",
		"playQueue/ENABLE_SHUFFLE_MODE_AND_SHUFFLE_ITEMS",
		"playQueue/DISABLE_SHUFFLE_MODE_AND_UNSHUFFLE_ITEMS",
		"playQueue/TOGGLE_SHUFFLE",
	] as any,
	unloads,
	publish,
);
MediaItem.onMediaTransition(unloads, publish);

// Periodic resync so phone clocks never drift far
const resync = setInterval(publish, 5000);
unloads.add(() => clearInterval(resync));
unloads.add(() => clearTimeout(publishTimer));
// #endregion

// #region Command loop
let currentGen = -1;
const runCommand = async ({ id, cmd, args }: { id: number; cmd: string; args: any }) => {
	const handler = commands[cmd];
	if (!handler) return respond(id, false, `Unknown command "${cmd}"`);
	try {
		const data = await handler(args ?? {});
		await respond(id, true, data ?? null);
		publish();
	} catch (err) {
		trace.warn.withContext(`command ${cmd}`)(err);
		await respond(id, false, err instanceof Error ? err.message : String(err));
	}
};

const loop = async (gen: number) => {
	while (gen === currentGen) {
		let cmds: Awaited<ReturnType<typeof nextCommands>>;
		try {
			cmds = await nextCommands(gen);
		} catch (err) {
			trace.warn.withContext("poll")(err);
			await new Promise((r) => setTimeout(r, 1000));
			continue;
		}
		if (cmds === null) return;
		for (const c of cmds) void runCommand(c);
	}
};
// #endregion

// #region Lifecycle
export const restart = async () => {
	currentGen = -1;
	try {
		const gen = await start({ port: settings.port, bindAll: settings.bindAll, token: settings.token, requireToken: settings.requireToken });
		currentGen = gen;
		setStatus({ running: true, error: undefined, addresses: settings.bindAll ? await getAddresses() : ["127.0.0.1"] });
		void loop(gen);
		publish();
		trace.log(`Remote listening on port ${settings.port}`);
	} catch (err: any) {
		const msg = err?.code === "EADDRINUSE" ? `Port ${settings.port} is already in use` : (err?.message ?? String(err));
		setStatus({ running: false, error: msg });
		trace.err.withContext("start")(err);
	}
};

unloads.add(() => {
	currentGen = -1;
	void stop();
});

void restart();
// #endregion
