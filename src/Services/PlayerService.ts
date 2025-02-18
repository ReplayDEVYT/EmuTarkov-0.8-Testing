import Player from "../Classes/Player";

export default class PlayerService {
	public static LoadedPlayers = new Map<string, Player>();

	public static CreateNewPlayer(ID: string, AccountID: number): Player {
		const NewPlayer = new Player(AccountID);

		this.LoadedPlayers.set(ID, NewPlayer);

		return NewPlayer;
	}
}