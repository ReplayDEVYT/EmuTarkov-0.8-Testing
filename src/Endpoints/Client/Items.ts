import { response } from "express";
import EndpointHandler from "../../Classes/EndpointHandler";

export default class ItemsEndpoint extends EndpointHandler {
	public readonly Endpoint = "/client/items";

	public Callback(Request: any, Response: any): void {
		response.setHeader("Content-Type", "application/json");
	}
}