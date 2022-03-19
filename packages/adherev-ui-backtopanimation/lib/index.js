"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var backtopanimation_1 = (0, tslib_1.__importDefault)(require("./backtopanimation"));
var _a = adherev_util_1.default._util, withInstall = _a.withInstall, withVue = _a.withVue;
var Component = withInstall(backtopanimation_1.default);
Component.isUse = function () { return true; };
Component.use = function (Vue) {
    Vue.use(Component);
    withVue(Vue, 'BackTopAnimation', Component);
};
exports.default = Component;
//# sourceMappingURL=index.js.map