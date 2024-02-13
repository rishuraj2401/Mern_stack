"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inter_1 = require("./inter");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("hi from server1");
});
(0, inter_1.func)("abs", 55);
app.listen(8081, () => console.log("running1"));
