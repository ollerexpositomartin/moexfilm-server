"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const supabase = (0, supabase_js_1.createClient)('https://veplbweymcfyesluztaz.supabase.co', process.env.SUPABASE_TOKEN);
const signUp = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase.auth.signUp({
        email,
        password,
    });
    return error == null ? true : false;
});
exports.signUp = signUp;
const signIn = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase.auth.signInWithPassword({
        email,
        password
    });
    console.log(data);
    return error == null ? true : false;
});
exports.signIn = signIn;
//# sourceMappingURL=AuthService.js.map