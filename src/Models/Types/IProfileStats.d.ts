export interface IProfileStats {
	SessionCounters: {
		Items: Array<{ Key: string[]; Value: number }>;
	};
	OverallCounters: {
		Items: Array<{ Key: string[]; Value: number }>;
	};
	SessionExperienceMult: number;
	TotalSessionExperience: number;
	LastSessionDate: number;
	DroppedItems: [];
	Victims: [];
	Aggressor: Record<string, unknown>;
	CarriedQuestItems: [];
	TotalInGameTime: number;
}
