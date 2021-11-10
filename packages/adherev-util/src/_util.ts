/**
 * withInstall
 * @param comp
 */
export const withInstall = (comp) => {
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
export const withVue = (Vue, p: string, val: any) => {
  Vue.prototype.$adv = Vue.prototype.$adv || {};
  Vue.prototype.$adv[p] = val;
};

/**
 * Fragment
 */
export const Fragment = {
  render(h) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.$slots.default;
  },
};
