"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var globalindicator_1 = __importDefault(require("./globalindicator"));
var adherev_util_1 = __importDefault(require("@baifendian/adherev-util"));
var withVue = adherev_util_1.default._util.withVue;
globalindicator_1.default.isUse = function () { return true; };
globalindicator_1.default.use = function (Vue) {
    withVue(Vue, 'GlobalIndicator', globalindicator_1.default);
};
exports.default = globalindicator_1.default;
