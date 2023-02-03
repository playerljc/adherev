// TableFormItem
import { TableProps } from 'ant-design-vue/es/table';
import { defineComponent, h } from 'vue';
import { object, string } from 'vue-types';

import { Table } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'TableFormItem',
  props: {
    tableProps: object<TableProps>().def({}),
    rowKey: string().def('id'),
  },
  emits: ['change'],
  render() {
    return h(
      Table,
      {
        pagination: false,
        rowKey: this.rowKey || 'id',
        ...this.tableProps,
        ...this.$attrs,
        onChange: (value) => this.$emit('change', value),
      },
      this.$slots,
    );
  },
});
