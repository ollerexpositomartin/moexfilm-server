"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_1 = __importDefault(require("./routes/api/v1"));
const body_parser_1 = __importDefault(require("body-parser"));
const proxy_1 = require("./proxy");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(proxy_1.proxy);
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/api/v1', v1_1.default);
app.listen(port, () => {
    console.log(`server started at http://localhost:${port} 🚀`);
});
//# sourceMappingURL=index.js.map