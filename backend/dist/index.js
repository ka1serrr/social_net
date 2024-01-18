"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const authRoute_1 = require("./routes/authRoute");
const config_1 = require("./config");
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT;
app.use(body_parser_1.default.json());
app.use(`${config_1.api.mainLink}/auth`, authRoute_1.router);
app.listen(port, () => {
    console.log(`server run on start ${port}`);
});
//# sourceMappingURL=index.js.map