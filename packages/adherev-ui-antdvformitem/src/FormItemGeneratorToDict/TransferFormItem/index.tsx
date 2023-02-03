// transferFormItem
import { Transfer } from '../../AntdvFormItemNormalize';

export default {
  name: 'TransferFormItem',
  props: {
    transferProps: {
      type: Object,
      default: () => ({}),
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  render(h) {
    return h(
      Transfer,
      {
        props: {
          dataSource: this.dataSource.map((t) => ({
            key: `${t.value}`,
            title: t.label,
            description: t.label,
            disabled: 'disabled' in t ? t.disabled : false,
          })),
          render: (item) => item.title,
          targetKeys: this.value,
          ...this.transferProps,
        },
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots,
      },
      this.$slots.default,
    );
  },
};
