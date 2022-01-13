"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var successprompt_1 = __importDefault(require("./successprompt"));
var adherev_util_1 = __importDefault(require("@baifendian/adherev-util"));
var withVue = adherev_util_1.default._util.withVue;
successprompt_1.default.isUse = function () { return true; };
successprompt_1.default.use = function (Vue) {
    withVue(Vue, 'SuccessPrompt', successprompt_1.default);
};
exports.default = successprompt_1.default;
