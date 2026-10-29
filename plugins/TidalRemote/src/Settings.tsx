import React from "react";

import { LunaButtonSetting, LunaNumberSetting, LunaSettings, LunaSwitchSetting } from "@luna/ui";
import qrcode from "qrcode-generator";

import { onStatus, restart, status } from ".";
import { regenerateToken, settings } from "./store";

const remoteUrl = (host: string) => `http://${host}:${settings.port}/${settings.requireToken ? `#token=${settings.token}` : ""}`;

const QR = ({ text }: { text: string }) => {
	const svg = React.useMemo(() => {
		const qr = qrcode(0, "M");
		qr.addData(text);
		qr.make();
		return qr.createSvgTag({ cellSize: 4, margin: 3, scalable: true });
	}, [text]);
	return <div style={{ width: 180, height: 180, background: "#fff", borderRadius: 8, padding: 4 }} dangerouslySetInnerHTML={{ __html: svg }} />;
};

let restartTimer: ReturnType<typeof setTimeout> | undefined;
const restartSoon = (ms = 600) => {
	clearTimeout(restartTimer);
	restartTimer = setTimeout(restart, ms);
};

export const Settings = () => {
	const [, force] = React.useReducer((x: number) => x + 1, 0);
	React.useEffect(() => onStatus(force) as () => void, []);

	const [port, setPort] = React.useState(settings.port);
	const [bindAll, setBindAll] = React.useState(settings.bindAll);
	const [requireToken, setRequireToken] = React.useState(settings.requireToken);
	const [copied, setCopied] = React.useState<string>();

	const urls = status.addresses.map(remoteUrl);

	return (
		<LunaSettings>
			<div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap", padding: "8px 0 16px" }}>
				{status.running && urls[0] && <QR text={urls[0]} />}
				<div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
					<div style={{ fontWeight: 600, color: status.running ? "#4ade80" : "#f87171" }}>
						{status.running ? "Remote is running" : `Remote is stopped${status.error ? `: ${status.error}` : ""}`}
					</div>
					{status.running && (
						<>
							<div style={{ opacity: 0.75 }}>Scan the code or open one of these on your phone (same network):</div>
							{urls.length === 0 && <div style={{ opacity: 0.75 }}>No LAN address found. Check your network connection.</div>}
							{urls.map((u) => (
								<code
									key={u}
									title="Click to copy"
									style={{ cursor: "pointer", wordBreak: "break-all", userSelect: "all" }}
									onClick={() => navigator.clipboard.writeText(u).then(() => setCopied(u))}
								>
									{u} {copied === u ? "✓ copied" : ""}
								</code>
							))}
						</>
					)}
				</div>
			</div>
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
				desc="Strongly recommended. The token is part of the link and QR code; the phone remembers it."
				checked={requireToken}
				onChange={(_: unknown, checked: boolean) => {
					setRequireToken((settings.requireToken = checked));
					restartSoon(0);
				}}
			/>
			<LunaButtonSetting
				title="New access token"
				desc="Revokes every paired phone. Re-scan the QR code afterwards."
				onClick={() => {
					regenerateToken();
					restartSoon(0);
				}}
			>
				Regenerate
			</LunaButtonSetting>
			<LunaButtonSetting title="Restart server" desc="Use after network changes." onClick={() => restartSoon(0)}>
				Restart
			</LunaButtonSetting>
		</LunaSettings>
	);
};
