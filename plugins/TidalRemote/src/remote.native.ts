// Runs in the Electron main process. Hosts the HTTP server and bridges requests to the renderer.
// The renderer long-polls `nextCommands` for work and answers via `respond`, so no main->renderer push is needed.

import { timingSafeEqual } from "crypto";
import http from "http";
import os from "os";

import uiHtml from "file://ui.html";

export type RemoteCommand = { id: number; cmd: string; args: any };
export type ServerOptions = { port: number; bindAll: boolean; token: string; requireToken: boolean };

const COMMAND_TIMEOUT_MS = 20_000;
const POLL_TIMEOUT_MS = 25_000;
const MAX_BODY = 64 * 1024;

let server: http.Server | null = null;
let options: ServerOptions | null = null;
let generation = 0;
let nextId = 1;
let lastState = "null";

const queue: RemoteCommand[] = [];
const pending = new Map<number, { resolve: (v: { ok: boolean; data: unknown }) => void; timer: ReturnType<typeof setTimeout> }>();
const sseClients = new Set<http.ServerResponse>();
let poller: { gen: number; resolve: (cmds: RemoteCommand[] | null) => void; timer: ReturnType<typeof setTimeout> } | null = null;

// #region Renderer bridge
const flushPoller = () => {
	if (!poller || queue.length === 0) return;
	const { resolve, timer } = poller;
	poller = null;
	clearTimeout(timer);
	resolve(queue.splice(0));
};

/** Long-poll: resolves with queued commands, [] on timeout, or null when the given generation is stale. */
export const nextCommands = (gen: number): Promise<RemoteCommand[] | null> => {
	if (gen !== generation) return Promise.resolve(null);
	if (queue.length > 0) return Promise.resolve(queue.splice(0));
	if (poller) {
		clearTimeout(poller.timer);
		poller.resolve([]);
	}
	return new Promise((resolve) => {
		const timer = setTimeout(() => {
			if (poller?.resolve === resolve) poller = null;
			resolve([]);
		}, POLL_TIMEOUT_MS);
		poller = { gen, resolve, timer };
	});
};

export const respond = (id: number, ok: boolean, data: unknown) => {
	const p = pending.get(id);
	if (!p) return;
	pending.delete(id);
	clearTimeout(p.timer);
	p.resolve({ ok, data });
};

const dispatch = (cmd: string, args: unknown) =>
	new Promise<{ ok: boolean; data: unknown }>((resolve) => {
		const id = nextId++;
		const timer = setTimeout(() => {
			pending.delete(id);
			resolve({ ok: false, data: "Timed out waiting for TIDAL" });
		}, COMMAND_TIMEOUT_MS);
		pending.set(id, { resolve, timer });
		queue.push({ id, cmd, args });
		flushPoller();
	});

export const pushState = (state: unknown) => {
	lastState = JSON.stringify(state);
	const frame = `data: ${lastState}\n\n`;
	for (const res of sseClients) res.write(frame);
};
// #endregion

// #region HTTP
const safeEqual = (a: string, b: string) => {
	const ab = Buffer.from(a);
	const bb = Buffer.from(b);
	return ab.length === bb.length && timingSafeEqual(ab, bb);
};

const authorized = (req: http.IncomingMessage, url: URL) => {
	if (!options?.requireToken) return true;
	const supplied = (req.headers["x-remote-token"] as string | undefined) ?? url.searchParams.get("token") ?? "";
	return safeEqual(supplied, options.token);
};

const sendJson = (res: http.ServerResponse, status: number, body: unknown) => {
	res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
	res.end(JSON.stringify(body));
};

const readBody = (req: http.IncomingMessage) =>
	new Promise<string>((resolve, reject) => {
		let size = 0;
		const chunks: Buffer[] = [];
		req.on("data", (c: Buffer) => {
			size += c.length;
			if (size > MAX_BODY) {
				reject(new Error("Body too large"));
				req.destroy();
			} else chunks.push(c);
		});
		req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
		req.on("error", reject);
	});

const handle = async (req: http.IncomingMessage, res: http.ServerResponse) => {
	const url = new URL(req.url ?? "/", "http://localhost");

	if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/index.html")) {
		res.writeHead(200, {
			"Content-Type": "text/html; charset=utf-8",
			"Cache-Control": "no-store",
			"Referrer-Policy": "no-referrer",
		});
		return res.end(uiHtml);
	}
	if (req.method === "GET" && url.pathname === "/manifest.json") {
		return sendJson(res, 200, {
			name: "TIDAL Remote",
			short_name: "Remote",
			start_url: "/",
			display: "standalone",
			background_color: "#0b0b0d",
			theme_color: "#0b0b0d",
		});
	}

	if (!url.pathname.startsWith("/api/")) return sendJson(res, 404, { error: "Not found" });
	if (!authorized(req, url)) return sendJson(res, 401, { error: "Invalid or missing token" });

	if (req.method === "GET" && url.pathname === "/api/state") {
		res.writeHead(200, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
		return res.end(lastState);
	}

	if (req.method === "GET" && url.pathname === "/api/events") {
		res.writeHead(200, {
			"Content-Type": "text/event-stream",
			"Cache-Control": "no-store",
			Connection: "keep-alive",
			"X-Accel-Buffering": "no",
		});
		res.write(`retry: 2000\ndata: ${lastState}\n\n`);
		sseClients.add(res);
		const ping = setInterval(() => res.write(": ping\n\n"), 15_000);
		req.on("close", () => {
			clearInterval(ping);
			sseClients.delete(res);
		});
		return;
	}

	if (req.method === "POST" && url.pathname === "/api/cmd") {
		let payload: { cmd?: unknown; args?: unknown };
		try {
			payload = JSON.parse((await readBody(req)) || "{}");
		} catch {
			return sendJson(res, 400, { error: "Invalid JSON" });
		}
		if (typeof payload.cmd !== "string") return sendJson(res, 400, { error: "Missing cmd" });
		const { ok, data } = await dispatch(payload.cmd, payload.args ?? {});
		return sendJson(res, ok ? 200 : 500, ok ? { data } : { error: String(data) });
	}

	return sendJson(res, 404, { error: "Not found" });
};
// #endregion

// #region Lifecycle
export const stop = async () => {
	generation++;
	if (poller) {
		clearTimeout(poller.timer);
		poller.resolve(null);
		poller = null;
	}
	queue.length = 0;
	for (const [id] of pending) respond(id, false, "Remote stopped");
	for (const res of sseClients) res.end();
	sseClients.clear();
	if (server) {
		const s = server;
		server = null;
		s.closeAllConnections?.();
		await new Promise<void>((resolve) => s.close(() => resolve()));
	}
};

/** Starts (or restarts) the server. Returns the generation the renderer must poll with. */
export const start = async (opts: ServerOptions): Promise<number> => {
	await stop();
	options = opts;
	const s = http.createServer((req, res) => {
		handle(req, res).catch((err) => {
			console.error("[TidalRemote.native]", err);
			if (!res.headersSent) sendJson(res, 500, { error: "Internal error" });
			else res.end();
		});
	});
	await new Promise<void>((resolve, reject) => {
		s.once("error", reject);
		s.listen(opts.port, opts.bindAll ? "0.0.0.0" : "127.0.0.1", () => {
			s.off("error", reject);
			resolve();
		});
	});
	server = s;
	return generation;
};

export const getAddresses = (): string[] => {
	const out: string[] = [];
	for (const [name, ifaces] of Object.entries(os.networkInterfaces())) {
		for (const i of ifaces ?? []) {
			if (i.family !== "IPv4" || i.internal) continue;
			// Skip common virtual adapters
			if (/vEthernet|VirtualBox|VMware|docker|br-|veth|WSL|Hyper-V/i.test(name)) continue;
			out.push(i.address);
		}
	}
	return out;
};
// #endregion
