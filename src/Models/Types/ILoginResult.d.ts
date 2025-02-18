export interface ILoginResult {
	token: string;
	aid: number;
	lang: string;
	languages: Record<string, string>;
	ndaFree: boolean;
	queued: boolean;
	taxonomy: number;
	activeProfileId: string;
	utc_time: number;
	totalInGame: number;
	twitchEventMember: boolean;
	backend: {
		Trading: string,
		Messaging: string,
		Main: string,
	}
}