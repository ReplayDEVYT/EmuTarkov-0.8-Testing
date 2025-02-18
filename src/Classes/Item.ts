import type { IItemTemplate } from "../Models/Types/IItemTemplate";
import type { ISerializedItem } from "../Models/Types/ISerializedItem";
import { MongoId } from "./MongoId";

export default class Item {
	public ID = MongoId.GenerateString();
	public TemplateID: string;
	public ParentID?: string;
	public SlotID?: string;

	public UpdatedProps: Partial<IItemTemplate>;
	public Location: {
		x: number;
		y: number;
		r: "Horizontal" | "Vertical";
		isSearched: boolean;
	} = {
		x: 0,
		y: 0,
		r: "Horizontal",
		isSearched: true,
	};

	constructor(TemplateID: string, ParentID?: string, SlotID?: string, UpdateProps: Partial<IItemTemplate> = {}) {
		this.TemplateID = TemplateID;
		this.ParentID = ParentID;
		this.SlotID = SlotID;

		this.UpdatedProps = UpdateProps;
	}

	public Serialize(): ISerializedItem {
		return {
			_id: this.ID,
			_tpl: this.TemplateID,
			parentId: this.ParentID,
			slotId: this.SlotID,
			location: this.SlotID !== "hideout" ? undefined : this.Location,
			upd: this.UpdatedProps,
		};
	}
}
