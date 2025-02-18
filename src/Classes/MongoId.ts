export class MongoId {
	private static Increment: number = Math.floor(Math.random() * 0xffffff);
	private static Pid: number = Math.floor(Math.random() * 0xffff);
	private static Machine: number = Math.floor(Math.random() * 0xffffff);

	public Timestamp: number;
	public Machine: number;
	public Pid: number;
	public Increment: number;

	constructor(Id?: string) {
		if (Id && Id.length === 24) {
			// Parse from string
			this.Timestamp = parseInt(Id.substring(0, 8), 16);
			this.Machine = parseInt(Id.substring(8, 14), 16);
			this.Pid = parseInt(Id.substring(14, 18), 16);
			this.Increment = parseInt(Id.substring(18, 24), 16);
		} else if (Id === undefined) {
			// Default generation
			this.Timestamp = Math.floor(Date.now() / 1000);
			this.Machine = MongoId.Machine;
			this.Pid = MongoId.Pid;
			this.Increment = MongoId.Increment++;
			if (MongoId.Increment > 0xffffff) {
				MongoId.Increment = 0;
			}
		} else {
			throw new Error("Invalid MongoId string.");
		}
	}

	public static GenerateString(): string {
		return new MongoId().ToString();
	}

	/**
	 * Converts the MongoId to a 24-character hexadecimal string.
	 * @returns {string} The MongoId as a 24-character string.
	 */
	public ToString(): string {
		const TimestampHex = this.Timestamp.toString(16).padStart(8, "0");
		const MachineHex = this.Machine.toString(16).padStart(6, "0");
		const PidHex = this.Pid.toString(16).padStart(4, "0");
		const IncrementHex = this.Increment.toString(16).padStart(6, "0");
		return TimestampHex + MachineHex + PidHex + IncrementHex;
	}

	/**
	 * Compares this MongoId to another MongoId / string.
	 */
	public Equals(Id: MongoId | string): boolean {
		if (typeof Id === "string") {
			Id = new MongoId(Id);
		}
		return (
			this.Timestamp === Id.Timestamp &&
			this.Machine === Id.Machine &&
			this.Pid === Id.Pid &&
			this.Increment === Id.Increment
		);
	}

	/**
	 * Gets the date represented by this MongoId.
	 * @returns {Date} The date of the MongoId.
	 */
	public GetDate(): Date {
		return new Date(this.Timestamp * 1000);
	}

	/**
	 * Converts the MongoId to an array of bytes.
	 * @returns {number[]} The MongoId as a byte array.
	 */
	public ToArray(): number[] {
		const StrId = this.ToString();
		const Array: number[] = [];
		for (let I = 0; I < 12; I++) {
			Array.push(parseInt(StrId.substring(I * 2, I * 2 + 2), 16));
		}
		return Array;
	}
}
