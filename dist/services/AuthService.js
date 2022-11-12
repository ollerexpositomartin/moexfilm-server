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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const supabase = (0, supabase_js_1.createClient)('https://veplbweymcfyesluztaz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlcGxid2V5bWNmeWVzbHV6dGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTYyNjUsImV4cCI6MTk4Mzc3MjI2NX0.FaU6PbOx7CoYGbxWC5qLKVABjX240tYh1HNuCfNUzNA');
const createUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase.auth.signUp({
        email,
        password,
    });
    return error == null ? true : false;
});
exports.createUser = createUser;
//# sourceMappingURL=AuthService.js.map