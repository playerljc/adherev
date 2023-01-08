// CheckBoxCustomFormItem
import { Checkbox } from 'ant-design-vue';

export default {
  name: 'CheckBoxCustomFormItem',
  slots: ['option'],
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
          ...this.checkBoxGroupProps,
          value: this.value,
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: this.$listeners,
      },
      this.dataSource.map((t) =>
        this.$scopedSlots.option({
          data: t,
          item: h(
            Checkbox,
            {
              key: t.value,
              props: {
                value: t.value,
                disabled: t.disabled,
              },
            },
            t.label,
          ),
        }),
      ),
    );
  },
};
