import { Cascader } from '../../AntdvFormItemNormalize';

export default {
  name: 'CascaderFormItem',
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
  render(h) {
    return h(
      Cascader,
      {
        props: {
          ...this.cascaderProps,
          value: this.value,
          options: this.dataSource,
        },
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots,
      },
      this.$slots.default,
    );
  },
};
