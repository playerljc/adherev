"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_ui_flexlayout_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-flexlayout"));
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var splitlayout_1 = (0, tslib_1.__importDefault)(require("./splitlayout"));
var _a = adherev_util_1.default._util, withInstall = _a.withInstall, withVue = _a.withVue;
var Component = withInstall(splitlayout_1.default);
Component.isUse = function () { return true; };
Component.use = function (Vue) {
    adherev_ui_flexlayout_1.default.use(Vue);
    Vue.use(Component);
    withVue(Vue, 'SplitLayout', Component);
};
exports.default = Component;
//# sourceMappingURL=index.js.map