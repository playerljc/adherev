"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fragment = exports.withVue = exports.withInstall = void 0;
/**
 * withInstall
 * @param comp
 */
exports.withInstall = function (comp) {
    comp.install = function (Vue) {
        Vue.component(comp.displayName || comp.name, comp);
    };
    return comp;
};
/**
 * withVue
 * @param Vue
 * @param p
 * @param val
 */
exports.withVue = function (Vue, p, val) {
    Vue.prototype.$adv = Vue.prototype.$adv || {};
    Vue.prototype.$adv[p] = val;
};
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
