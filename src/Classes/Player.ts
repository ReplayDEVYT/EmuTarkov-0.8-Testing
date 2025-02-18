import type { IProfile } from "../Models/Types/IProfile";
import ProfileService from "../Services/ProfileService";
import type Profile from "./Profile";

export default class Player {
	public readonly Profiles = new Array<Profile>();

	public AccountID: number;

	constructor(AccountID: number) {
		this.AccountID = AccountID;

		const PMC = this.CreateProfile("PMC");
		const Scav = this.CreateProfile("Scav");

		Scav.Info.Side = "Savage";
		Scav.Info.Settings = {
			Role: "assault",
			BotDifficulty: "easy",
			Experience: -1,
		};

		PMC.SavageID = Scav.ID;
	}

	public CreateProfile(ID: string) {
		const Profile = ProfileService.CreateNewProfile(ID, this.AccountID);

		this.AccountID++;

		this.Profiles.push(Profile);

		return Profile;
	}

	public CreateProfileFromData(Data: IProfile) {
		const Profile = ProfileService.CreateProfileFromData(Data);

		this.Profiles.push(Profile);

		return Profile;
	}
}
