import { ReactiveStore } from "@luna/core";

const randomToken = () => {
	const bytes = new Uint8Array(12);
	crypto.getRandomValues(bytes);
	return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
};

export const settings = await ReactiveStore.getPluginStorage("TidalRemote", {
	port: 24680,
	bindAll: true,
	requireToken: true,
	token: "",
});

if (!settings.token) settings.token = randomToken();

export const regenerateToken = () => (settings.token = randomToken());
