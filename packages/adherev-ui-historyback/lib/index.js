"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var adhere_ui_historyback_1 = __importDefault(require("@baifendian/adhere-ui-historyback"));
var adherev_util_1 = __importDefault(require("@baifendian/adherev-util"));
var withVue = adherev_util_1.default._util.withVue;
adhere_ui_historyback_1.default.isUse = function () { return true; };
adhere_ui_historyback_1.default.use = function (Vue) {
    withVue(Vue, 'HistoryBack', adhere_ui_historyback_1.default);
};
exports.default = adhere_ui_historyback_1.default;
