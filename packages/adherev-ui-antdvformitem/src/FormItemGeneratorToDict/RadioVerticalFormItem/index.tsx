// RadioVerticalFormItem
import { Radio } from 'ant-design-vue';

const selectorPrefix = 'adherev-ui-antdformitem';

export default {
  name: 'RadioVerticalFormItem',
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
          value: this.value,
          ...this.radioGroupProps,
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: this.$listeners,
      },
      this.dataSource.map((t) =>
        h(
          Radio,
          {
            key: t.value,
            props: {
              value: t.value,
              disabled: t.disabled,
            },
            class: `${selectorPrefix}-radio-vertical`,
          },
          t.label,
        ),
      ),
    );
  },
};
