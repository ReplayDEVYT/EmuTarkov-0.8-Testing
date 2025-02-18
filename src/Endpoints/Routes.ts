import Server from "../Services/Server";
import Tables from "../Services/Tables";
import PlayerService from "../Services/PlayerService";
import type { ILoginResult } from "../Models/Types/ILoginResult";

const InitiateRoutes = () => {
	Server.RegisterEndpoint("/client/items", async () => {
		return Tables.Items;
	});

	Server.RegisterEndpoint("/client/globals", async () => {
		return Tables.Globals;
	});

	Server.RegisterEndpoint("/client/languages", async () => {
		return [
			{
				Name: "English",
				ShortName: "en",
			},
			{
				Name: "Russian",
				ShortName: "ru",
			},
		];
	});

	Server.RegisterEndpoint("/client/game/login", async () => {
		const Player = PlayerService.LoadedPlayers.get("67b3f8c16fa31c91ed298879");

		if (!Player) {
			console.error("Player not found");
			return null;
		}

		const LoginResult: ILoginResult = {
			token: `TOKEN_${Player.AccountID}`,
			aid: Player.AccountID,
			lang: "en",
			languages: { en: "English" },
			ndaFree: true,
			queued: false,
			taxonomy: 266,
			activeProfileId: Player.Profiles[0].ID,
			utc_time: 0,
			totalInGame: 0,
			twitchEventMember: false,
			backend: {
				Trading: "http://localhost:3000",
				Messaging: "http://localhost:3000",
				Main: "http://localhost:3000",
			},
		};

		return LoginResult;
	});

	Server.RegisterEndpoint("/client/game/profile/list", async () => {
		return PlayerService.LoadedPlayers.get("67b3f8c16fa31c91ed298879")?.Profiles.map((Profile) => {
			return Profile.GetProfileData();
		});
	});

	Server.RegisterEndpoint("/client/game/profile/select", async () => {
		const backendUrl = "http://localhost:3000";
		return {
			status: "ok",
			notifier: {
				server: backendUrl,
				channel_id: "f194bcedc0890f22db37a00dbd7414d2afba981eef61008159a74a29d5fee1cf",
			},
		};
	});

	Server.RegisterEndpoint("/client/game/version/validate", async () => {
		return null;
	});

	Server.RegisterEndpoint("/client/locale/", async () => {
		return Tables.Locales["English"];
	});

	Server.RegisterEndpoint("/client/menu/locale/", async () => {
		return {
			menu: Tables.Locales.English.menu,
		};
	});

	Server.RegisterEndpoint("/client/locations", async () => {
		return Tables.Locations;
	});

	Server.RegisterEndpoint("/client/trading/api/getTradersList", async () => {
		return Tables.Traders;
	});

	Server.RegisterEndpoint("/client/weather", async () => {
		const weatherData = {
			weather: {
				timestamp: Math.floor(Date.now() / 1000),
				cloud: -0.475,
				wind_speed: 2,
				wind_direction: 3,
				wind_gustiness: 0.081,
				rain: 1,
				rain_intensity: 0,
				fog: 0.002,
				temp: 14,
				pressure: 763,
				date: "2019-02-24",
				time: "2019-02-24 19:15:02",
			},
			date: "2019-02-24",
			time: "12:00:00",
			acceleration: 7,
		};

		return weatherData;
	});

	Server.RegisterEndpoint("/client/handbook/builds/my", async () => {
		return [];
	});

	Server.RegisterEndpoint("/client/profile/status", async () => {
		const Player = PlayerService.LoadedPlayers.get("67b3f8c16fa31c91ed298879");

		return Player?.Profiles.map((Profile) => {
			return {
				profileid: Profile.ID,
				status: "Free",
				sid: "",
				ip: "",
				port: 0,
			};
		});
	});

	Server.RegisterEndpoint("/client/game/keepalive", async () => {
		return null;
	});

	Server.RegisterEndpoint("/client/quest/list", async () => {
		return Tables.Quests;
	});

	Server.RegisterEndpoint("/client/friend/list", async () => {
		return {
			Friends: [],
			Ignore: [],
			InIgnoreList: [],
		};
	});

	Server.RegisterEndpoint("/client/friend/request/list/inbox", async () => {
		return [];
	});

	Server.RegisterEndpoint("/client/friend/request/list/outbox", async () => {
		return [];
	});

	Server.RegisterEndpoint("/client/mail/dialog/list", async () => {
		return [];
	});

	Server.RegisterEndpoint("/client/chatServer/list", async () => {
		return [
			{
				_id: "5ae20a0dcb1c13123084756f",
				RegistrationId: 20,
				DateTime: " + Math.floor(new Date() / 1000) + ",
				IsDeveloper: true,
				Regions: ["EUR"],
				VersionId: "bgkidft87ddd",
				Ip: "",
				Port: 0,
				Chats: [{ _id: "0", Members: 0 }],
			},
		];
	});

	Server.RegisterEndpoint("/client/server/list", async () => {
		return [{ ip: "localhost", port: 3000 }];
	});
};

export default InitiateRoutes;
