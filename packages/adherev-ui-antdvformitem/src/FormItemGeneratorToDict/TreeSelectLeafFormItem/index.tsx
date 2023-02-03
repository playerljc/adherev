// treeSelectLeafFormItem
import { defineComponent, h } from 'vue';

import TreeSelectFormItem from '../TreeSelectFormItem';

export default defineComponent({
  name: 'TreeSelectLeafFormItem',
  props: {
    ...TreeSelectFormItem.props,
  },
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
      TreeSelectFormItem,
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
