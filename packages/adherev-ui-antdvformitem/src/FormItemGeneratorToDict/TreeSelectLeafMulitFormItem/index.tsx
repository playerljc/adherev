// MulitSelectLeafFormItem
import { defineComponent, h } from 'vue';

import Util from '@baifendian/adherev-util';

import TreeMulitSelectFormItem from '../TreeMulitSelectFormItem';

const {
  _util: { getComponentPropsOption },
} = Util;

export default defineComponent({
  name: 'TreeSelectLeafMulitFormItem',
  props: getComponentPropsOption(TreeMulitSelectFormItem),
  emits: ['change'],
  computed: {
    targetDataSource() {
      function loop(nodes) {
        (nodes || []).forEach((node) => {
          node.disabled = !('leaf' in node && node.leaf);

          loop(node.children);
        });
      }

      const source = JSON.parse(JSON.stringify(this.dataSource));

      loop(source);

      return source;
    },
  },
  render() {
    return h(
      TreeMulitSelectFormItem,
      {
        ...this.$props,
        ...this.$attrs,
        dataSource: this.targetDataSource,
        onChange: (value) => this.$emit('change', value),
      },
      this.$slots,
    );
  },
});
