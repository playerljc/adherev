import { defineComponent, h } from 'vue';

import Util from '@baifendian/adherev-util';

const {
  _util: { getComponentPropsOption },
} = Util;

/**
 * SearchTableImplementFactory
 * @description 生成SearchTableImplement的Factory
 * @param Component 包装的组件
 */
const SearchTableImplementFactory = (Component) => {
  const props = getComponentPropsOption(Component);

  return defineComponent({
    props,
    render() {
      return h(
        Component,
        {
          wrapStyle: 'height: 100%;',
          isShowExpandSearch: true,
          defaultExpandSearchCollapse: false,
          fixedHeaderAutoTable: true,
          fixedTableSpaceBetween: true,
          ...this.$props,
          ...this.$attrs,
        },
        this.$slots,
      );
    },
  });
};

export default SearchTableImplementFactory;
