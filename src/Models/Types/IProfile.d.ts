import type { IProfileCustomization } from "./IProfileCustomization";
import type { IProfileHealth } from "./IProfileHealth";
import type { IProfileInfo } from "./IProfileInfo";
import type { IProfileInventory } from "./IProfileInventory";
import type { IProfileSkills } from "./IProfileSkills";
import type { IProfileStats } from "./IProfileStats";

export interface IProfile {
	_id: string;
	aid: number;
	savage: string | null;
	Info: IProfileInfo;
	Health: IProfileHealth;
	Customization: IProfileCustomization;
	Inventory: IProfileInventory;
	Skills: IProfileSkills;
	Stats: IProfileStats;
	Encyclopedia: Array<string>;
	ConditionCounters: {
		Counters: Array<{ Key: string[]; Value: number }>;
	};
	BackendCounters: Record<string, unknown>;
	InsuredItems: Array<string>;
	Notes: {
		Notes: Array<string>;
	};
	Quests: [];
	TraderStandings: {};
	WishList: [];
}
