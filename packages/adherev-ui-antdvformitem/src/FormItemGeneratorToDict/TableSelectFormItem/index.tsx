// TableSelectFormItem
import { SelectProps } from 'ant-design-vue/es/select';
import { TableProps } from 'ant-design-vue/es/table';
import { defineComponent, h } from 'vue';
import { array, object, string } from 'vue-types';

import SelectFormItem from '../SelectFormItem';
import TableFormItem from '../TableFormItem';

export default defineComponent({
  name: 'TableSelectFormItem',
  props: {
    selectProps: object<TableProps>().def({}),
    tableProps: object<SelectProps>().def({}),
    value: string().def(''),
    dataSource: array<any>().def([]),
    rowKey: string().def('id'),
    labelKey: string().def('name'),
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
  render() {
    return h(
      SelectFormItem,
      {
        selectProps: {
          dropdownRender: () => this.$renderDropdownRender(),
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
        ...this.$attrs,
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
