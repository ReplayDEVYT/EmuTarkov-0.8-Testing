import { createKey, ErrorWithCode, putValue, RegistryItemPutCollection } from "regedit";

export default class LauncherService {
	public static readonly RegistryPath = "HKCU\\SOFTWARE\\Battlestate Games\\EscapeFromTarkov";
	public static readonly RegistryKey = "bC5vLmcuaS5u_h1472614626";
	
	public static ConvertStringToBase64(String: string): string {
		return Buffer.from(String).toString("base64");
	}

	public static ConvertStringToBytes(String: string) {
		let Bytes = new Array<number>();

		for (let i = 0; i < String.length; i++) {
			const Code = String.charCodeAt(i);

			Bytes = Bytes.concat([Code]);
		}

		return Bytes.concat(0);
	}


	public static CreateToken() {
		const Data = {
			email: "boogle",
			password: "password",
			toggle: true,
			timestamp: (Math.floor(Date.now() / 1000) + 45) ^ 698464131
		}

		const TemporaryB64 = this.ConvertStringToBase64(JSON.stringify(Data));

		const Bytes = this.ConvertStringToBytes(TemporaryB64);
		
		const RegistryPath = this.RegistryPath;
		const RegistryKey = this.RegistryKey;

		const RegistryValue = {
			[RegistryPath]: {
				[RegistryKey]: {
					value: Bytes,
					type: "REG_BINARY"
				}
			}
		} as unknown as RegistryItemPutCollection; // This is a hacky way to get around the type error with REG_BINARY

		putValue(RegistryValue, function(err) {		
			if (err && err.code == 2) {
				console.log("Registry key missing, creating one");
				createKey([LauncherService.RegistryPath], function(){});
				putValue(RegistryValue, function() {});
			}
	
			console.log("Created login token at timestamp " + Data.timestamp);
		});
	}
	
	public static Start() {
		setInterval(() => {
			this.CreateToken();
		}, 1000 * 60);

		this.CreateToken();
	}
}