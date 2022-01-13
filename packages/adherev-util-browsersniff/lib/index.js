"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var adhere_util_browsersniff_1 = __importDefault(require("@baifendian/adhere-util-browsersniff"));
var adherev_util_1 = __importDefault(require("@baifendian/adherev-util"));
var withVue = adherev_util_1.default._util.withVue;
adhere_util_browsersniff_1.default.isUse = function () { return true; };
adhere_util_browsersniff_1.default.use = function (Vue) {
    withVue(Vue, 'Browsersniff', adhere_util_browsersniff_1.default);
};
exports.default = adhere_util_browsersniff_1.default;
