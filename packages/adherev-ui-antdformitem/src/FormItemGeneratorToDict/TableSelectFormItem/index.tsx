// TableSelectFormItem
import SelectFormItem from '../SelectFormItem';
import TableFormItem from '../TableFormItem';

export default {
  name: 'TableSelectFormItem',
  props: {
    selectProps: {
      type: Object,
      default: () => ({}),
    },
    tableProps: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: String,
      default: '',
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
    rowKey: {
      type: String,
      default: 'id',
    },
    labelKey: {
      type: String,
      default: 'name',
    },
  },
  emits: ['change'],
  data() {
    return {
      selectedRowKeys: this.value ? [this.value] : [],
      selectedRows: this.value
        ? this.dataSource.find((t) => t[this.rowKey || 'id'] === this.value)
        : [],
    };
  },
  watch: {
    value(value) {
      this.selectedRowKeys = [value];
      this.selectedRows = [this.dataSource.find((t) => t[this.rowKey || 'id'] === this.value)];
    },
  },
  render(h) {
    const Component = TableFormItem;

    return h(
      SelectFormItem,
      {
        props: {
          selectProps: {
            dropdownRender: () => (
              // @ts-ignore
              <Component
                tableProps={{
                  rowSelection: {
                    type: 'radio',
                    selectedRowKeys: this.selectedRowKeys,
                    selectedRows: this.selectedRows,
                    onChange: (selectedRowKeys, selectedRows) => {
                      this.selectedRowKeys = selectedRowKeys;
                      this.selectedRows = selectedRows;
                      this.$emit('change', selectedRowKeys.length ? selectedRowKeys[0] : '');
                    },
                  },
                  dataSource: this.dataSource,
                  ...this.tableProps,
                }}
                rowKey={this.rowKey}
              />
            ),
            ...this.selectProps,
          },
          value: this.value,
          dataSource: this.dataSource.map((t) => ({
            label: t[this.labelKey || 'name'],
            value: t[this.rowKey || 'id'],
          })),
        },
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots,
      },
      this.$slots.default,
    );
  },
};
