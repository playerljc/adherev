"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var ant_design_vue_1 = (0, tslib_1.__importDefault)(require("@form-create/ant-design-vue"));
var ant_design_vue_2 = require("ant-design-vue");
var messagedialog_1 = (0, tslib_1.__importDefault)(require("./messagedialog"));
var withVue = adherev_util_1.default._util.withVue;
messagedialog_1.default.isUse = function () { return true; };
messagedialog_1.default.use = function (Vue) {
    Vue.use(ant_design_vue_2.ConfigProvider);
    Vue.use(ant_design_vue_2.Button);
    Vue.use(ant_design_vue_1.default);
    withVue(Vue, 'MessageDialog', messagedialog_1.default);
};
exports.default = messagedialog_1.default;
//# sourceMappingURL=index.js.map