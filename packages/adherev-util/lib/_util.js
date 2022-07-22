"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fragment = exports.withVue = exports.withInstall = void 0;
/**
 * withInstall
 * @param comp
 */
var withInstall = function (comp) {
    comp.install = function (Vue) {
        Vue.component(comp.displayName || comp.name, comp);
    };
    return comp;
};
exports.withInstall = withInstall;
/**
 * withVue
 * @description - 将属性p混入到Vue实例中，在Vue实例的表达式中可以使用this.$adv[p]来进行访问
 * @param Vue
 * @param p
 * @param val
 */
var withVue = function (Vue, p, val) {
    Vue.prototype.$adv = Vue.prototype.$adv || {};
    Vue.prototype.$adv[p] = val;
};
exports.withVue = withVue;
/**
 * Fragment
 */
exports.Fragment = {
    render: function (h) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.$slots.default;
    },
};
