export const withInstall = (comp) => {
    const c = comp;
    c.install = function (Vue) {
        Vue.component(c.displayName || c.name, comp);
    };
    return comp;
};
export const Fragment = {
    render(h) {
        return this.$slots.default;
    },
};
//# sourceMappingURL=index.js.map