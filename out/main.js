"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./Services/Server"));
Server_1.default.OnGetRequest("/", (Request, Response) => {
    Response.send("Hello, World!");
});
Server_1.default.Start();
