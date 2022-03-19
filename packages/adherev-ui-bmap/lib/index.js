"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adhere_ui_bmap_1 = (0, tslib_1.__importDefault)(require("@baifendian/adhere-ui-bmap"));
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var bmap_1 = (0, tslib_1.__importDefault)(require("./bmap"));
var _a = adherev_util_1.default._util, withInstall = _a.withInstall, withVue = _a.withVue;
// @ts-ignore
var BMap = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, adhere_ui_bmap_1.default), { BMap: bmap_1.default });
BMap.isUse = function () { return true; };
BMap.use = function (Vue) {
    Vue.use(bmap_1.default);
    withVue(Vue, 'BMap', BMap);
};
withInstall(bmap_1.default);
exports.default = BMap;
//# sourceMappingURL=index.js.map