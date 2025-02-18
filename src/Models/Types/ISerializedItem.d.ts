import type { IItemTemplate } from "./IItemTemplate";

export interface ISerializedItem {
	_id: string;
	_tpl: string;
	parentId?: string;
	slotId?: string;
	location?: {
		x: number;
		y: number;
		r: "Horizontal" | "Vertical";
	};
	upd?: Partial<IItemTemplate>;
}
