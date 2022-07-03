"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var auto_1 = (0, tslib_1.__importDefault)(require("./auto"));
var fixed_1 = (0, tslib_1.__importDefault)(require("./fixed"));
var flexlayout_1 = (0, tslib_1.__importStar)(require("./flexlayout"));
var _a = adherev_util_1.default._util, withInstall = _a.withInstall, withVue = _a.withVue;
var Component = withInstall(flexlayout_1.default);
Component.isUse = function () { return true; };
Component.use = function (Vue) {
    Vue.use(Component);
    Vue.use(Component.Fixed);
    Vue.use(Component.Auto);
    withVue(Vue, 'FlexLayout', Component);
};
Component.Fixed = withInstall(fixed_1.default);
Component.Auto = withInstall(auto_1.default);
Component.selectorPrefix = flexlayout_1.selectorPrefix;
exports.default = Component;
//# sourceMappingURL=index.js.map