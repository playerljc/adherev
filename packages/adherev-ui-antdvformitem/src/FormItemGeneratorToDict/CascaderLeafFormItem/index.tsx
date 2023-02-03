import { Cascader } from '../../AntdvFormItemNormalize';

export default {
  name: 'CascaderLeafFormItem',
  props: {
    cascaderProps: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Array,
      default: () => [],
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    targetDataSource() {
      function loop(nodes) {
        (nodes || []).forEach((node) => {
          node.disabled = !(
            'children' in node &&
            Array.isArray(node.children) &&
            !!node.children.length
          );

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
      Cascader,
      {
        props: {
          ...this.cascaderProps,
          value: this.value,
          options: this.targetDataSource,
        },
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots,
      },
      this.$slots.default,
    );
  },
};
