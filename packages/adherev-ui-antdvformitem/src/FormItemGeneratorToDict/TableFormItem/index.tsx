// TableFormItem
import { Table } from 'ant-design-vue';

export default {
  name: 'TableFormItem',
  props: {
    tableProps: {
      type: Object,
      default: () => [],
    },
    rowKey: {
      type: String,
      default: 'id',
    },
  },
  render(h) {
    return h(
      Table,
      {
        props: {
          pagination: false,
          rowKey: this.rowKey || 'id',
          ...this.tableProps,
        },
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots,
      },
      this.$slots.default,
    );
  },
};
