// TableMulitSelectFormItem
import { SelectProps } from 'ant-design-vue/es/select';
import { TableProps } from 'ant-design-vue/es/table';
import { defineComponent, h } from 'vue';
import { array, object, string } from 'vue-types';

import MulitSelectFormItem from '../MulitSelectFormItem';
import TableFormItem from '../TableFormItem';

export default defineComponent({
  name: 'TableMulitSelectFormItem',
  props: {
    selectProps: object<SelectProps>().def({}),
    tableProps: object<TableProps>().def({}),
    value: array().def([]),
    dataSource: array<any>().def([]),
    rowKey: string().def('id'),
    labelKey: string().def('name'),
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
    $renderDropdownRender() {
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
  render() {
    return h(
      MulitSelectFormItem,
      {
        ...this.$attrs,
        value: this.value,
        dataSource: this.dataSource.map((t) => ({
          label: t[this.labelKey || 'name'],
          value: t[this.rowKey || 'id'],
        })),
        selectProps: {
          dropdownRender: () => this.$renderDropdownRender(),
          filterOption: () => {
            return false;
          },
          ...this.selectProps,
        },
        onSearch: (inputValue) => {
          this.inputValue = inputValue;
        },
        onChange: (val) => {
          this.$emit('change', val);

          if (!val || (Array.isArray(val) && !val.length)) this.inputValue = '';
        },
      },
      this.$slots,
    );
  },
});
