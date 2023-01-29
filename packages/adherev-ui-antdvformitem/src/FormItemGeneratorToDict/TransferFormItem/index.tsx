// transferFormItem
import { Transfer } from 'ant-design-vue';

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
  computed: {
    targetValue() {
      if (!Array.isArray(this.value)) return [];

      return this.value.filter((_value) => this.dataSource?.find((t) => t.key === _value));
    },
  },
  watch: {
    value(value) {
      if (!Array.isArray(value)) {
        this.$emit('change', []);
        return;
      }

      const filterValue = value.filter((_value) => this.dataSource?.find((t) => t.key === _value));

      if (filterValue.length !== value.length) {
        this.$emit('change', filterValue);
      }
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
          targetKeys: this.targetValue,
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
