"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resource_1 = __importDefault(require("./resource"));
var adherev_util_1 = __importDefault(require("@baifendian/adherev-util"));
var withVue = adherev_util_1.default._util.withVue;
resource_1.default.isUse = function () { return true; };
resource_1.default.use = function (Vue) {
    withVue(Vue, 'Resource', resource_1.default);
};
exports.default = resource_1.default;
