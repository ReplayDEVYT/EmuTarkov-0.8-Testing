import Server from "./Services/Server";

Server.OnGetRequest("/", (Request, Response) => {
	Response.send("Hello, World!");
});

Server.Start();