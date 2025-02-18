import { IItemTemplate } from "./IItemTemplate";

export interface IItem {
	_id: string;
	_name: string;
	_parent: string;
	_type: string;
	_props: IItemTemplate;
	_proto?: string;
}