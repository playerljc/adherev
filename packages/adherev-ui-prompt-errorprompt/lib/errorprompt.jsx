"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ant_design_vue_1 = require("ant-design-vue");
var adherev_util_intl_1 = __importDefault(require("@baifendian/adherev-util-intl"));
/**
 * 错误的提示
 * @param content - {string| VNode |(h) => VNode}
 */
exports.default = (function (content) {
    return ant_design_vue_1.message.error(content ? content : adherev_util_intl_1.default.tv('系统异常'));
});
