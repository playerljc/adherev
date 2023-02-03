// RadioHorizontalFormItem
import { Radio } from '../../AntdvFormItemNormalize';

export default {
  name: 'RadioHorizontalFormItem',
  props: {
    radioGroupProps: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: [Number, String],
      default: '',
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
  render(h) {
    return h(
      Radio.Group,
      {
        props: {
          options: this.dataSource,
          ...this.radioGroupProps,
          value: this.value,
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: this.$listeners,
      },
      this.$slots.default,
    );
  },
};
