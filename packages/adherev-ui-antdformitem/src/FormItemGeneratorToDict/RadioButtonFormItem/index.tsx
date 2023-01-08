// RadioButtonFormItem
import { Radio } from 'ant-design-vue';

export default {
  name: 'RadioButtonFormItem',
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
          ...this.radioGroupProps,
          value: this.value,
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: this.$listeners,
      },
      this.dataSource.map((t) =>
        h(
          Radio.Button,
          {
            key: t.value,
            props: {
              value: t.value,
              disabled: t.disabled,
            },
          },
          t.label,
        ),
      ),
    );
  },
};
