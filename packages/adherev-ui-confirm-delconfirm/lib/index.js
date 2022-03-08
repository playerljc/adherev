"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var delconfirm_1 = (0, tslib_1.__importStar)(require("./delconfirm"));
var _a = adherev_util_1.default._util, withInstall = _a.withInstall, withVue = _a.withVue;
var Component = withInstall(delconfirm_1.default);
Component.open = delconfirm_1.open;
Component.isUse = function () { return true; };
Component.use = function (Vue) {
    Vue.use(Component);
    withVue(Vue, 'DelConfirm', Component);
};
exports.default = Component;
//# sourceMappingURL=index.js.map