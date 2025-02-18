import type { IBodyParts } from "./IBodyParts";
import type { IHealthStatus } from "./IHealthStatus";

export interface IProfileHealth {
	Hydration: IHealthStatus;
	Energy: IHealthStatus;
	BodyParts: IBodyParts;
}
