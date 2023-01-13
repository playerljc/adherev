// TableMulitSelectFormItem
import MulitSelectFormItem from '../MulitSelectFormItem';
import TableFormItem from '../TableFormItem';

export default {
  name: 'TableMulitSelectFormItem',
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
      type: Array,
      default: [],
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
      selectedRowKeys: this.value ? this.value : [],
      selectedRows: this.value
        ? this.value.map((t) => this.dataSource.find((_item) => _item[this.rowKey || 'id'] === t))
        : [],
    };
  },
  watch: {
    value(value) {
      this.selectedRowKeys = value;
      this.selectedRows = this.value.map((t) =>
        this.dataSource.find((_item) => _item[this.rowKey || 'id'] === t),
      );
    },
  },
  render(h) {
    const Component = TableFormItem;

    return h(
      MulitSelectFormItem,
      {
        props: {
          selectProps: {
            dropdownRender: () => (
              // @ts-ignore
              <Component
                tableProps={{
                  rowSelection: {
                    type: 'checkbox',
                    selectedRowKeys: this.selectedRowKeys,
                    selectedRows: this.selectedRows,
                    onChange: (selectedRowKeys, selectedRows) => {
                      this.selectedRowKeys = selectedRowKeys;
                      this.selectedRows = selectedRows;
                      this.$emit('change', selectedRowKeys.length ? selectedRowKeys : []);
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
