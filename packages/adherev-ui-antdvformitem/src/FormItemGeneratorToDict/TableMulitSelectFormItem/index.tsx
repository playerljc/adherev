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
      inputValue: '',
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
  methods: {
    $renderDropdownRender(h) {
      const data = this.inputValue
        ? this.dataSource.filter(
            (t) => t[this.labelKey || 'name']?.indexOf?.(this.inputValue) !== -1,
          )
        : this.dataSource;

      return (
        // @ts-ignore
        <TableFormItem
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
      MulitSelectFormItem,
      {
        props: {
          selectProps: {
            dropdownRender: () => this.$renderDropdownRender(h),
            filterOption: () => {
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
          search: (inputValue) => {
            this.inputValue = inputValue;
          },
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
