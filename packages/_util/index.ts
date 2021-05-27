export const withInstall = <T>(comp: T) => {
  const c = comp as any;

  c.install = function (Vue) {
    Vue.component(c.displayName || c.name, comp);
  };

  return comp as T & Plugin;
};

export const Fragment = {
  render(h) {
    // @ts-ignore
    return this.$slots.default;
  },
};
