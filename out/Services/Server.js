"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    static Start() {
        this.App.use(express_1.default.json());
        this.App.listen(this.Port, () => {
            console.log(`Server is running on port ${this.Port}`);
        });
    }
    static OnGetRequest(Endpoint, Callback) {
        this.App.get(Endpoint, Callback);
    }
}
Server.App = (0, express_1.default)();
Server.Port = 3000;
exports.default = Server;
