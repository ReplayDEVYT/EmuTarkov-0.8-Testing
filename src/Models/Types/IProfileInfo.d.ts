import { MemberCategory } from "../Enums/MemberCategory";
import { PlayerSide } from "../Enums/PlayerSide";
import { Voice } from "../Enums/Voice";
import { WildSpawnType } from "../Enums/WildSpawnType";

export interface IProfileInfo {
	Nickname: string;
	LowerNickname: string;
	Side: keyof typeof PlayerSide;
	Voice: keyof typeof Voice;
	Level: number;
	Experience: number;
	RegistrationDate: number;
	GameVersion: string;
	AccountType: number;
	MemberCategory: MemberCategory;
	lockedMoveCommands: boolean;
	LastTimePlayedAsSavage: number;
	Settings: {
		Role?: keyof typeof WildSpawnType;
		BotDifficulty?: string;
		Experience?: number;
	};
	NeedWipe: boolean;
	GlobalWipe: boolean;
	NicknameChangeDate: number;
}