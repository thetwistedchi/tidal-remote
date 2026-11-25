import React from "react";

import { LunaButton, LunaButtonSetting, LunaNumberSetting, LunaSelectItem, LunaSelectSetting, LunaSettings, LunaSwitchSetting } from "@luna/ui";
import qrcode from "qrcode-generator";

import { onStatus, refreshLastSeen, restart, status, syncTokens } from ".";
import { addDevice, revokeDevice, settings, type Device } from "./store";

const remoteUrl = (host: string, token?: string) => `http://${host}:${settings.port}/${settings.requireToken && token ? `#token=${token}` : ""}`;

const ago = (t?: number) => {
	if (!t) return "never";
	const s = Math.round((Date.now() - t) / 1000);
	if (s < 60) return "just now";
	if (s < 3600) return `${Math.floor(s / 60)} min ago`;
	if (s < 86400) return `${Math.floor(s / 3600)} h ago`;
	return new Date(t).toLocaleDateString();
};

const QR = ({ text }: { text: string }) => {
	const svg = React.useMemo(() => {
		const qr = qrcode(0, "M");
		qr.addData(text);
		qr.make();
		return qr.createSvgTag({ cellSize: 4, margin: 3, scalable: true });
	}, [text]);
	return <div style={{ width: 180, height: 180, background: "#fff", borderRadius: 8, padding: 4, flex: "none" }} dangerouslySetInnerHTML={{ __html: svg }} />;
};

let restartTimer: ReturnType<typeof setTimeout> | undefined;
const restartSoon = (ms = 600) => {
	clearTimeout(restartTimer);
	restartTimer = setTimeout(restart, ms);
};

const box: React.CSSProperties = { border: "1px solid rgba(255,255,255,.12)", borderRadius: 10, padding: 14 };
const input: React.CSSProperties = {
	flex: 1,
	minWidth: 0,
	background: "rgba(255,255,255,.06)",
	border: "1px solid rgba(255,255,255,.15)",
	borderRadius: 8,
	color: "inherit",
	padding: "8px 10px",
	font: "inherit",
	outline: "none",
};

export const Settings = () => {
	const [, force] = React.useReducer((x: number) => x + 1, 0);
	React.useEffect(() => onStatus(force) as () => void, []);

	const [port, setPort] = React.useState(settings.port);
	const [bindAll, setBindAll] = React.useState(settings.bindAll);
	const [requireToken, setRequireToken] = React.useState(settings.requireToken);
	const [preferred, setPreferred] = React.useState(settings.preferredAddress);
	const [devices, setDevices] = React.useState<Device[]>(settings.devices);
	const [qrFor, setQrFor] = React.useState<string | undefined>(settings.devices.at(-1)?.id);
	const [newName, setNewName] = React.useState("");
	const [confirmRevoke, setConfirmRevoke] = React.useState<string>();
	const [copied, setCopied] = React.useState<string>();

	// Keep "last used" fresh while the settings page is open
	React.useEffect(() => {
		const tick = () => refreshLastSeen().then(() => setDevices(settings.devices)).catch(() => {});
		tick();
		const t = setInterval(tick, 5000);
		return () => clearInterval(t);
	}, []);

	const addrs = status.addresses;
	const chosen = addrs.find((a) => a.address === preferred) ?? addrs[0];
	const qrDevice = devices.find((d) => d.id === qrFor);
	const url = chosen && (!requireToken || qrDevice) ? remoteUrl(chosen.address, qrDevice?.token) : undefined;

	const onAdd = () => {
		const d = addDevice(newName);
		setDevices(settings.devices);
		setQrFor(d.id);
		setNewName("");
		syncTokens();
	};
	const onRevoke = (id: string) => {
		if (confirmRevoke !== id) return setConfirmRevoke(id);
		revokeDevice(id);
		setDevices(settings.devices);
		setConfirmRevoke(undefined);
		if (qrFor === id) setQrFor(undefined);
		syncTokens();
	};

	return (
		<LunaSettings>
			{/* Status + QR */}
			<div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap", padding: "8px 0 16px" }}>
				{status.running && url && <QR text={url} />}
				<div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
					<div style={{ fontWeight: 600, color: status.running ? "#4ade80" : "#f87171" }}>
						{status.running ? "Remote is running" : `Remote is stopped${status.error ? `: ${status.error}` : ""}`}
					</div>
					{status.running && !chosen && <div style={{ opacity: 0.75 }}>No LAN address found. Check your network connection.</div>}
					{status.running && chosen && requireToken && !qrDevice && (
						<div style={{ opacity: 0.75 }}>{devices.length ? "Pick a device below to show its QR code." : "Add a device below to get a QR code."}</div>
					)}
					{status.running && url && (
						<>
							<div style={{ opacity: 0.75 }}>
								{qrDevice ? (
									<>
										Pairing code for <b>{qrDevice.name}</b>. Scan it or open the link on that device:
									</>
								) : (
									"Scan the code or open this link on your phone:"
								)}
							</div>
							<code
								title="Click to copy"
								style={{ cursor: "pointer", wordBreak: "break-all", userSelect: "all" }}
								onClick={() => navigator.clipboard.writeText(url).then(() => setCopied(url))}
							>
								{url} {copied === url ? "✓ copied" : ""}
							</code>
						</>
					)}
				</div>
			</div>

			{/* Devices */}
			{requireToken && (
				<div style={{ ...box, display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
					<div style={{ fontWeight: 600 }}>Paired devices</div>
					{devices.length === 0 && <div style={{ opacity: 0.7 }}>No devices yet.</div>}
					{devices.map((d) => (
						<div key={d.id} style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
							<div style={{ flex: 1, minWidth: 160 }}>
								<div style={{ fontWeight: 500 }}>
									{d.name}
									{qrFor === d.id && <span style={{ color: "#33ffee", fontSize: 12, marginLeft: 8 }}>QR shown</span>}
								</div>
								<div style={{ opacity: 0.6, fontSize: 12 }}>
									Added {new Date(d.created).toLocaleDateString()} · last used {ago(d.lastSeen)}
								</div>
							</div>
							<LunaButton variant="outlined" size="small" onClick={() => setQrFor(d.id)}>
								Show QR
							</LunaButton>
							<LunaButton variant={confirmRevoke === d.id ? "contained" : "outlined"} color="error" size="small" onClick={() => onRevoke(d.id)}>
								{confirmRevoke === d.id ? "Confirm revoke" : "Revoke"}
							</LunaButton>
						</div>
					))}
					<div style={{ display: "flex", gap: 10, marginTop: 4 }}>
						<input
							style={input}
							placeholder="Device name, e.g. Pixel 8"
							value={newName}
							maxLength={40}
							onChange={(e) => setNewName(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && onAdd()}
						/>
						<LunaButton onClick={onAdd}>Add device</LunaButton>
					</div>
				</div>
			)}

			{addrs.length > 1 && (
				<LunaSelectSetting
					title="Address for QR code"
					desc="Pick the IP your phone can reach (usually your router's 192.168.x.x range)."
					value={chosen?.address ?? ""}
					onChange={(e: any) => setPreferred((settings.preferredAddress = e.target.value))}
				>
					{addrs.map((a) => (
						<LunaSelectItem key={a.address} value={a.address}>
							{a.address} ({a.name})
						</LunaSelectItem>
					))}
				</LunaSelectSetting>
			)}
			<LunaNumberSetting
				title="Port"
				desc="TCP port the remote listens on. Allow it in your firewall for private networks."
				min={1024}
				max={65535}
				value={port}
				onNumber={(n: number) => {
					setPort((settings.port = n));
					restartSoon(900);
				}}
			/>
			<LunaSwitchSetting
				title="Allow other devices"
				desc="Listen on your local network. Turn off to only allow this PC (127.0.0.1)."
				checked={bindAll}
				onChange={(_: unknown, checked: boolean) => {
					setBindAll((settings.bindAll = checked));
					restartSoon(0);
				}}
			/>
			<LunaSwitchSetting
				title="Require access token"
				desc="Strongly recommended. Each paired device gets its own token that you can revoke."
				checked={requireToken}
				onChange={(_: unknown, checked: boolean) => {
					setRequireToken((settings.requireToken = checked));
					restartSoon(0);
				}}
			/>
			<LunaButtonSetting title="Restart server" desc="Use after network changes." onClick={() => restartSoon(0)}>
				Restart
			</LunaButtonSetting>
		</LunaSettings>
	);
};
