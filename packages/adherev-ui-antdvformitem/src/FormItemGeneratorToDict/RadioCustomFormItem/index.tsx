// RadioCustomFormItem
import { Radio } from '../../AntdvFormItemNormalize';

export default {
  name: 'RadioCustomFormItem',
  slots: ['option'],
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
        this.$scopedSlots?.option?.({
          data: t,
          item: h(
            Radio,
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
