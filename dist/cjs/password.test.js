"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const password_js_1 = __importDefault(require("./password.js"));
const password = new password_js_1.default(15);
// hash 
test("working as intended", () => {
password.hash("sample password").then((__hash) => {
    console.log(__hash);
    expect(__hash).toBeDefined();
});
password.compare("sample password", "bf5c795f2ec3c33c558da0f83b81afd4e58525b6a8a6f9a3a7360e958f8e2c74").then((result) => {
    console.log(result);
    expect(result).toBeDefined();
});


});