import type { Request as ExpressRequest, Response as ExpressResponse } from "express";
import Express from "express";
import zlib from "zlib";
import type { JSONTemplate } from "../Models/Types/JSONTemplate";

export default class Server {
	private static App = Express();
	private static Port = 3000;

	private static Endpoints = new Array<{
		URL: string;
		Callback: (Request: ExpressRequest) => Promise<unknown>;
	}>();

	public static Start() {
		this.App.use((Request: ExpressRequest, Response: ExpressResponse, next: () => unknown) => {
			console.log(
				`Received request from ${Request.ip} to ${Request.url} with query: ${JSON.stringify(Request.query)}`,
			);
			next();
		});

		this.App.use(Express.json());
		this.App.use(Express.urlencoded({ extended: true }));

		this.App.get("*", this.HandleRequest);
		this.App.post("*", this.HandleRequest);

		this.App.listen(this.Port, () => {
			console.log(`Server is running on port ${this.Port}`);
		});
	}

	private static async HandleRequest(Request: ExpressRequest, Response: ExpressResponse) {
		const Output = await Server.GenerateResponse(Request, Response);

		if (!Output) {
			return;
		}

		// console.log(`Request to ${Request.url} with query: ${JSON.stringify(Request.query)}`);

		zlib.deflate(Output, (Err, CompressedData) => {
			if (Err) {
				Response.status(500).send("Compression error");
				console.error("Compression error:", Err);
				return;
			}

			Response.writeHead(200, {
				"Content-Type": "application/json",
				"Content-Encoding": "deflate",
				"Set-Cookie": "PHPSESSID=yolo",
			});

			Response.end(CompressedData);
		});
	}

	private static async GenerateResponse(Request: ExpressRequest, Response: ExpressResponse): Promise<string | void> {
		const CallbackFunction = this.Endpoints.find((Endpoint) => Request.url.startsWith(Endpoint.URL))?.Callback;

		const Result: JSONTemplate<unknown | null> = {
			err: 0,
			errmsg: null,
			data: null,
		};

		if (!CallbackFunction) {
			console.error(`Endpoint ${Request.url} not found`);
			Response.status(404).send("BOOGLE FUCKED UP! Endpoint not found");
			return;
		}

		if (CallbackFunction) {
			await CallbackFunction(Request).then((Data) => {
				Result.data = Data;
			});
		}

		return JSON.stringify(Result);
	}

	public static RegisterEndpoint(URL: string, Callback: (Request: ExpressRequest) => Promise<unknown>) {
		this.Endpoints.push({
			URL,
			Callback,
		});
	}
}
