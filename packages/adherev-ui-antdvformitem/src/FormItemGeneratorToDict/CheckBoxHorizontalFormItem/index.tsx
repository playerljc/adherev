// CheckBoxHorizontalFormItem
import { Checkbox } from '../../AntdvFormItemNormalize';

export default {
  name: 'CheckBoxHorizontalFormItem',
  props: {
    checkBoxGroupProps: {
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
      Checkbox.Group,
      {
        props: {
          options: this.dataSource,
          ...this.checkBoxGroupProps,
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
