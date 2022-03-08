/**
 * withInstall
 * @param comp
 */
export const withInstall = (comp: any) => {
  comp.install = function (app: any) {
    app.component(comp.displayName || comp.name, comp);
  };

  return comp;
};

/**
 * withVue
 * @description - 将属性p混入到Vue实例中，在Vue实例的表达式中可以使用this.$adv[p]来进行访问
 * @param app
 * @param p
 * @param val
 */
export const withVue = (app: any, p: string, val: any) => {
  app.config.globalProperties.$adv = app.config.globalProperties.$adv || {};
  app.config.globalProperties.$adv[p] = val;
};

/**
 * HOC
 * @param VueComponent
 * @param overwrite
 */
export const HOC = (VueComponent: object, overwrite?: any): object => ({
  ...VueComponent,
  ...(overwrite || {}),
});
