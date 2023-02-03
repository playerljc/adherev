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
      inputValue: '',
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
  methods: {
    $renderDropdownRender(h) {
      const data = this.inputValue
        ? this.dataSource.filter((t) => t.label.startsWith(this.inputValue))
        : this.dataSource;

      return (
        // @ts-ignore
        <TableFormItem
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
            dataSource: data,
            ...this.tableProps,
          }}
          rowKey={this.rowKey}
        />
      );
    },
  },
  render(h) {
    return h(
      SelectFormItem,
      {
        props: {
          selectProps: {
            dropdownRender: () => this.$renderDropdownRender(h),
            filterOption: (inputValue) => {
              this.inputValue = inputValue;

              return false;
            },
            ...this.selectProps,
          },
          value: this.value,
          dataSource: this.dataSource.map((t) => ({
            label: t[this.labelKey || 'name'],
            value: t[this.rowKey || 'id'],
          })),
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: {
          ...this.$listeners,
          change: (val) => {
            this.$emit('change', val);

            if (!val || (Array.isArray(val) && !val.length)) this.inputValue = '';
          },
        },
      },
      this.$slots.default,
    );
  },
};
