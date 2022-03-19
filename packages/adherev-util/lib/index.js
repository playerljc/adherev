"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adhere_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adhere-util"));
var _util = (0, tslib_1.__importStar)(require("./_util"));
var Component = adhere_util_1.default;
Component.isUse = function () { return true; };
Component.use = function (Vue) {
    _util.withVue(Vue, 'Util', Component);
};
exports.default = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, Component), { _util: (0, tslib_1.__assign)({}, _util) });
//# sourceMappingURL=index.js.map