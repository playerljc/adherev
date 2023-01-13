// MulitSelectLeafFormItem
import Util from '@baifendian/adherev-util';

import TreeMulitSelectFormItem from '../TreeMulitSelectFormItem';

const {
  _util: { getComponentPropsOption },
} = Util;

export default {
  name: 'TreeSelectLeafMulitFormItem',
  props: getComponentPropsOption(TreeMulitSelectFormItem),
  computed: {
    targetDataSource() {
      function loop(nodes) {
        (nodes || []).forEach((node) => {
          if ('leaf' in node && node.leaf) node.disabled = false;
          else node.disabled = true;

          loop(node.children);
        });
      }

      const source = JSON.parse(JSON.stringify(this.dataSource));

      loop(source);

      return source;
    },
  },
  render(h) {
    return h(
      TreeMulitSelectFormItem,
      {
        props: {
          ...this.$props,
          dataSource: this.targetDataSource,
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: this.$listeners,
      },
      this.$slots.default,
    );
  },
};
