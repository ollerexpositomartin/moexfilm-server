"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_1 = __importDefault(require("./routes/api/v1"));
const v1_2 = __importDefault(require("./routes/auth/v1"));
const OAuth2_1 = __importDefault(require("./routes/oauth2/OAuth2"));
const body_parser_1 = __importDefault(require("body-parser"));
const proxy_1 = require("./proxy");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(proxy_1.proxy);
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/oauth2', OAuth2_1.default);
app.use('/auth/v1', v1_2.default);
app.use('/api/v1', v1_1.default);
app.listen(port, () => {
    console.log(`server started at http://localhost:${port} 🚀`);
});
//# sourceMappingURL=index.js.map