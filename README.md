# TidalRemote (TidaLuna plugin)

Control the TIDAL desktop app from your phone. The plugin runs a small web server inside TIDAL and serves a mobile remote on your local network. No app to install on the phone, any browser works.

## Features

- Now playing: cover, title, artist, audio quality, seek bar, play/pause, next/previous, shuffle, repeat (off/all/one), volume
- Queue: see what is coming up, tap to jump
- Search: tracks, artists, albums, playlists
- Library: your playlists, favorite albums, favorite tracks
- Album, playlist and artist pages with Play and Shuffle
- Per track: Play now, Play next, Add to queue, Go to album (tap ⋮ or long-press)
- Live updates via Server-Sent Events, so changes made on the PC show up instantly
- Access token pairing via QR code; the phone remembers it
- "Add to Home Screen" works for an app-like experience

## Install

### Option A: quick local install

```sh
pnpm install
pnpm run build
npx http-server ./dist -p 3000 --cors
```

In TIDAL: **Luna Settings → Plugin Store → Install from URL** and enter

```
http://localhost:3000/dude.tidal-remote.mjs
```

### Option B: host on GitHub (gets updates)

Push this folder to a GitHub repo, set **Settings → Actions → General → Workflow permissions** to *Read and write*. The included workflow publishes a `latest` release. Then install from:

```
https://github.com/<you>/<repo>/releases/download/latest/store.json
```

### Development

`pnpm run watch` rebuilds on change and serves `dist` on port 3000. A *DEV* store appears in the Luna plugin store.

## First run

1. Luna asks you to allow the plugin access to your **NETWORK** (`http`) and **SYSTEM** (`os`, used only to list your LAN IPs). Allow both.
2. Windows may show a firewall prompt for TIDAL. Allow it on **private** networks.
3. Open **Luna Settings → Plugins → TidalRemote** and scan the QR code with your phone.

## Settings

| Setting | Default | Notes |
|---|---|---|
| Port | 24680 | Change if something else uses it |
| Allow other devices | On | Off = only 127.0.0.1 |
| Require access token | On | Leave on. Anyone on your network could control playback otherwise |
| New access token | | Unpairs all phones |

## API

All endpoints except `/` need the token in the `X-Remote-Token` header (or `?token=`).

- `GET /api/state` current state as JSON
- `GET /api/events` Server-Sent Events stream of state
- `POST /api/cmd` with `{"cmd": "...", "args": {...}}`

Commands: `play`, `pause`, `toggle`, `next`, `previous`, `seek {seconds}`, `volume {value}`, `shuffle {on}`, `repeat {mode: 0|1|2}`, `queue`, `jump {index}`, `addNext {id}`, `addLast {id}`, `playTracks {ids, index, context}`, `playAlbum {id, index}`, `playPlaylist {id, index}`, `search {query}`, `album {id}`, `playlist {id}`, `artist {id}`, `library`, `favorites`.

Example (Home Assistant `rest_command`, curl, etc.):

```sh
curl -X POST http://PC-IP:24680/api/cmd -H "X-Remote-Token: <token>" -d '{"cmd":"toggle"}'
```

## How it works

- `remote.native.ts` runs in the Electron main process and hosts the HTTP server.
- The renderer side long-polls the native module for commands, executes them through TIDAL's Redux store and Luna's `PlayState`, and pushes state snapshots back.
- Plain HTTP on your LAN. Do not port-forward it to the internet; use a VPN (e.g. WireGuard on your server) for remote access.
