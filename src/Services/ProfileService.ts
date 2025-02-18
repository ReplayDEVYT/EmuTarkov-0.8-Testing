import Profile from "../Classes/Profile";
import type { IProfile } from "../Models/Types/IProfile";

export default class ProfileService {
	public static LoadedProfiles = new Map<string, Profile>();

	public static CreateNewProfile(ID: string, AccountID: number): Profile {
		const NewProfile = Profile.CreateNewProfile(ID, AccountID);

		this.LoadedProfiles.set(NewProfile.ID, NewProfile);

		return NewProfile;
	}

	public static CreateProfileFromData(Data: IProfile): Profile {
		const NewProfile = Profile.FromData(Data);

		this.LoadedProfiles.set(NewProfile.ID, NewProfile);

		return NewProfile;
	}
}
