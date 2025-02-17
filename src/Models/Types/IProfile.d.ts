import { IProfileCustomization } from "./IProfileCustomization";
import { IProfileInfo } from "./IProfileInfo";

export interface IProfile {
	_id: string;
	aid: number,
	savage?: string,
	Info: IProfileInfo;
	Customization: IProfileCustomization;
	Encyclopedia: [];
	ConditionCounters: {
		Counters: []
	},
	BackendCounters: {},
	InsuredItems: [],
	Notes: {
		Notes: {}
	},
	Quests: [],
	TraderStandings: [],
	WishList: [],
}