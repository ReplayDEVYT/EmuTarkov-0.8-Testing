import Items from "../../data/items.json";
import Globals from "../../data/globals.json";
import Locations from "../../data/locations.json";
import Quests from "../../data/questList.json";
import Traders from "../../data/traderList.json";
import English from "../../data/locale_en.json";
import type { IItem } from "../Models/Types/IItem";

export default class Tables {
	public static Items = Items as Record<string, IItem>;
	public static Globals = Globals;
	public static Locations = Locations;
	public static Locales = {
		English: English,
	};
	public static Quests = Quests;
	public static Traders = Traders;
}
