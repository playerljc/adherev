export const withInstall = (comp) => {
  const c = comp;

  c.install = function (Vue) {
    Vue.component(c.displayName || c.name, comp);
  };

  return comp;
};
