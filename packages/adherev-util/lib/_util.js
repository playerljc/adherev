"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOC = exports.withVue = exports.withInstall = void 0;
var tslib_1 = require("tslib");
/**
 * withInstall
 * @param comp
 */
var withInstall = function (comp) {
    comp.install = function (app) {
        app.component(comp.displayName || comp.name, comp);
    };
    return comp;
};
exports.withInstall = withInstall;
/**
 * withVue
 * @description - 将属性p混入到Vue实例中，在Vue实例的表达式中可以使用this.$adv[p]来进行访问
 * @param app
 * @param p
 * @param val
 */
var withVue = function (app, p, val) {
    app.config.globalProperties.$adv = app.config.globalProperties.$adv || {};
    app.config.globalProperties.$adv[p] = val;
};
exports.withVue = withVue;
/**
 * HOC
 * @param VueComponent
 * @param overwrite
 */
var HOC = function (VueComponent, overwrite) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, VueComponent), (overwrite || {}))); };
exports.HOC = HOC;
//# sourceMappingURL=_util.js.map