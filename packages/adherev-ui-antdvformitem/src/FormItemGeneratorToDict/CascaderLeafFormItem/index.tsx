import { Cascader } from 'ant-design-vue';

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
          if ('children' in node && Array.isArray(node.children) && !!node.children.length) {
            node.disabled = false;
          } else {
            node.disabled = true;
          }

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
