"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ajax_1 = __importDefault(require("./ajax"));
var adherev_util_1 = __importDefault(require("@baifendian/adherev-util"));
var withVue = adherev_util_1.default._util.withVue;
ajax_1.default.isUse = function () { return true; };
ajax_1.default.use = function (Vue) {
    withVue(Vue, 'Ajax', ajax_1.default);
};
exports.default = ajax_1.default;
