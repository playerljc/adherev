"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var warnprompt_1 = __importDefault(require("./warnprompt"));
var adherev_util_1 = __importDefault(require("@baifendian/adherev-util"));
var withVue = adherev_util_1.default._util.withVue;
warnprompt_1.default.isUse = function () { return true; };
warnprompt_1.default.use = function (Vue) {
    withVue(Vue, 'WarnPrompt', warnprompt_1.default);
};
exports.default = warnprompt_1.default;
