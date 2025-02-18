import type { ISerializedItem } from "./ISerializedItem";

export interface IProfileInventory {
	items: Array<ISerializedItem>;
	equipment: string;
	stash: string;
	questRaidItems: string;
	questStashItems: string;
	fastPanel: {};
}
