// treeSelectLeafFormItem
import TreeSelectFormItem from '../TreeSelectFormItem';

export default {
  name: 'TreeSelectLeafFormItem',
  props: {
    ...TreeSelectFormItem.props,
  },
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
      TreeSelectFormItem,
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
