import { ReactiveStore } from "@luna/core";

export type Device = { id: string; name: string; token: string; created: number; lastSeen?: number };

const randomHex = (bytes: number) => {
	const b = new Uint8Array(bytes);
	crypto.getRandomValues(b);
	return Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
};

export const settings = await ReactiveStore.getPluginStorage("TidalRemote", {
	port: 24680,
	bindAll: true,
	requireToken: true,
	/** Legacy single token from older versions, migrated into `devices` */
	token: "",
	devices: [] as Device[],
	/** IP shown in the QR code; empty = automatic */
	preferredAddress: "",
});

settings.devices ??= [];
// Keep phones paired with the old single token working
if (settings.token) {
	settings.devices = [...settings.devices, { id: randomHex(6), name: "My phone", token: settings.token, created: Date.now() }];
	settings.token = "";
}

export const deviceTokens = () => settings.devices.map((d) => d.token);

export const addDevice = (name: string): Device => {
	const device = { id: randomHex(6), name: name.trim() || `Device ${settings.devices.length + 1}`, token: randomHex(12), created: Date.now() };
	settings.devices = [...settings.devices, device];
	return device;
};

export const revokeDevice = (id: string) => (settings.devices = settings.devices.filter((d) => d.id !== id));

/** Merge last-seen times reported by the server into the stored devices */
export const mergeLastSeen = (seen: Record<string, number>) => {
	let changed = false;
	const devices = settings.devices.map((d) => {
		const t = seen[d.token];
		if (t && t !== d.lastSeen) {
			changed = true;
			return { ...d, lastSeen: t };
		}
		return d;
	});
	if (changed) settings.devices = devices;
};
