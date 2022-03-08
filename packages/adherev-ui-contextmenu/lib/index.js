"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var ContextMenu_1 = (0, tslib_1.__importDefault)(require("./ContextMenu"));
var withVue = adherev_util_1.default._util.withVue;
ContextMenu_1.default.isUse = function () { return true; };
ContextMenu_1.default.use = function (Vue) {
    withVue(Vue, 'ContextMenu', ContextMenu_1.default);
};
exports.default = ContextMenu_1.default;
//# sourceMappingURL=index.js.map