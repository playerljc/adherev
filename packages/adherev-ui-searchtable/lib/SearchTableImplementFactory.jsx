import Util from '@baifendian/adherev-util';
const { _util: { getComponentPropsOption }, } = Util;
/**
 * SearchTableImplementFactory
 * @description 生成SearchTableImplement的Factory
 * @param Component 包装的组件
 */
const SearchTableImplementFactory = (Component) => {
    const props = getComponentPropsOption(Component);
    return {
        props,
        render(h) {
            return h(Component, {
                props: {
                    wrapStyle: 'height: 100%;',
                    isShowExpandSearch: true,
                    defaultExpandSearchCollapse: false,
                    fixedHeaderAutoTable: true,
                    fixedTableSpaceBetween: true,
                    ...this.$props,
                },
                attrs: this.$attrs,
                on: this.$listeners,
                scopedSlots: this.$scopedSlots,
            }, this.$slots.default);
        },
    };
};
export default SearchTableImplementFactory;
//# sourceMappingURL=SearchTableImplementFactory.jsx.map