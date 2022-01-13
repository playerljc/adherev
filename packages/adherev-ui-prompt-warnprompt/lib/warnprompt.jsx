"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ant_design_vue_1 = require("ant-design-vue");
/**
 * 警告的提示
 * @param content - {string| VNode |(h) => VNode}
 */
exports.default = (function (content) {
    return ant_design_vue_1.message.warn(content);
});
