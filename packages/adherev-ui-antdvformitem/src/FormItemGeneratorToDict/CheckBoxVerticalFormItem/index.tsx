import { Checkbox } from '../../AntdvFormItemNormalize';

const selectorPrefix = 'adherev-ui-antdformitem';

export default {
  name: 'CheckBoxVerticalFormItem',
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
          value: this.value,
          ...this.checkBoxGroupProps,
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: this.$listeners,
      },
      this.dataSource.map((t) =>
        h(
          Checkbox,
          {
            key: t.value,
            props: {
              value: t.value,
              disabled: t.disabled,
            },
            class: `${selectorPrefix}-check-box-vertical`,
          },
          t.label,
        ),
      ),
    );
  },
};
