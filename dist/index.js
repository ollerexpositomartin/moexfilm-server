"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const body_parser_1 = __importDefault(require("body-parser"));
const proxy_1 = require("./proxy");
const app = (0, express_1.default)();
const port = 8080;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(proxy_1.proxy);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.raw());
app.use(body_parser_1.default.text());
app.use('/auth', auth_1.default);
app.listen(process.env.PORT || 8080, () => {
    console.log(`server started at http://localhost:${port} 🚀`);
});
//# sourceMappingURL=index.js.map