export interface JSONTemplate<Data extends unknown> {
	err: number;
	errmsg: string | null;
	data: Data;
}