export default abstract class EndpointHandler {
	public abstract readonly Endpoint: string;

	public abstract Callback(Request: any, Response: any): void;
}