import Express, {Request, response, Response} from "express";

export default class Server {
	private static App = Express();
	private static Port = 3000;
	
	public static Start() {
		this.App.use(Express.json());
		
		this.App.listen(this.Port, () => {
			console.log(`Server is running on port ${this.Port}`);
		});
	}

	public static OnGetRequest(Endpoint: string, Callback: (Request: Request, Response: Response) => void) {
		this.App.get(Endpoint, (Request, Response) => {
			Response.setHeader("Content-Type", "application/json");

			Callback(Request, Response);
		});
	}
}