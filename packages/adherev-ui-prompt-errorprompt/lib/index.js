"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errorprompt_1 = __importDefault(require("./errorprompt"));
var adherev_util_1 = __importDefault(require("@baifendian/adherev-util"));
var withVue = adherev_util_1.default._util.withVue;
errorprompt_1.default.isUse = function () { return true; };
errorprompt_1.default.use = function (Vue) {
    withVue(Vue, 'ErrorPrompt', errorprompt_1.default);
};
exports.default = errorprompt_1.default;
