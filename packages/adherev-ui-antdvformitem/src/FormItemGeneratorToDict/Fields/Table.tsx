import { defineComponent, h } from 'vue';
import { number, oneOfType, string } from 'vue-types';

import Dict from '@baifendian/adherev-util-dict';

import { Table } from '../../AntdvFormItemNormalize';
import MulitSelectFormItem from '../MulitSelectFormItem';
import SelectFormItem from '../SelectFormItem';
import TableFormItem from '../TableFormItem';
import TableMulitSelectFormItem from '../TableMulitSelectFormItem';
import TableSelectFormItem from '../TableSelectFormItem';

const FormItemComponents: any = {};

export default () => {
  // 名称以Table结尾的字典
  const tableDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Table'),
  );

  // 名称以DynamicTable结尾的字典
  const tableDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicTable'),
  );

  // 名称以TablePagination结尾的字典(肯定是动态数据)
  const tablePaginationDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('TablePagination'),
  );

  // 静态的Table
  tableDictNames.forEach((dictName) => {
    FormItemComponents[`${dictName}FormItem`] = defineComponent({
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        tableProps: TableFormItem.props.tableProps,
        rowKey: string().def('id'),
      },
      emits: ['change'],
      computed: {
        dataSource() {
          const handler = Dict.value[dictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) return handler(this.cascadeParams);

          return handler;
        },
      },
      render() {
        return h(
          TableFormItem,
          {
            tableProps: {
              dataSource: this.dataSource,
              ...this.tableProps,
            },
            rowKey: this.rowKey,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    FormItemComponents[`${dictName}SelectFormItem`] = defineComponent({
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        selectProps: TableSelectFormItem.props.selectProps,
        tableProps: TableSelectFormItem.props.tableProps,
        rowKey: string().def('id'),
        labelKey: string().def('name'),
        value: TableSelectFormItem.props.value,
      },
      emits: ['change'],
      computed: {
        dataSource() {
          const handler = Dict.value[dictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) return handler(this.cascadeParams);

          return handler;
        },
      },
      render() {
        return h(
          TableSelectFormItem,
          {
            selectProps: this.selectProps,
            tableProps: this.tableProps,
            rowKey: this.rowKey,
            labelKey: this.labelKey,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    FormItemComponents[`${dictName}MulitSelectFormItem`] = defineComponent({
      name: `${dictName}MulitSelectFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        selectProps: TableMulitSelectFormItem.props.selectProps,
        tableProps: TableMulitSelectFormItem.props.tableProps,
        rowKey: string().def('id'),
        labelKey: string().def('name'),
        value: TableMulitSelectFormItem.props.value,
      },
      emits: ['change'],
      computed: {
        dataSource() {
          const handler = Dict.value[dictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) return handler(this.cascadeParams);

          return handler;
        },
      },
      render() {
        return h(
          TableMulitSelectFormItem,
          {
            selectProps: this.selectProps,
            tableProps: this.tableProps,
            rowKey: this.rowKey,
            labelKey: this.labelKey,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });
  });

  // 动态的Table
  tableDynamicDictNames.forEach((dictName) => {
    FormItemComponents[`${dictName}FormItem`] = defineComponent({
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        tableProps: TableFormItem.props.tableProps,
        rowKey: string().def('id'),
      },
      emits: ['change'],
      data() {
        return {
          dataSource: [],
        };
      },
      methods: {
        $loadData(params) {
          // 存放字典的返回值(可能是promise也可能是Function)
          const handler = Dict.value[dictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) {
            handler(params).then(function (res) {
              this.dataSource = res;
            });
          }
        },
      },
      watch: {
        cascadeParams(val) {
          this.$loadData(val);
        },
      },
      mounted() {
        // 存放字典的返回值(可能是promise也可能是Function)
        const handler = Dict.value[dictName].value;

        // 如果是Promise直接返回
        if (handler.then) {
          handler.then(function (res) {
            this.dataSource = res;
          });
        }
      },
      render() {
        return h(
          TableFormItem,
          {
            tableProps: {
              dataSource: this.dataSource,
              ...this.tableProps,
            },
            rowKey: this.rowKey,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    FormItemComponents[`${dictName}SelectFormItem`] = defineComponent({
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        selectProps: TableSelectFormItem.props.selectProps,
        tableProps: TableSelectFormItem.props.tableProps,
        rowKey: string().def('id'),
        labelKey: string().def('name'),
        value: TableSelectFormItem.props.value,
      },
      emits: ['change'],
      data() {
        return {
          dataSource: [],
        };
      },
      methods: {
        $loadData(params) {
          // 存放字典的返回值(可能是promise也可能是Function)
          const handler = Dict.value[dictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) {
            handler(params).then(function (res) {
              this.dataSource = res;
            });
          }
        },
      },
      watch: {
        cascadeParams(val) {
          this.$loadData(val);
        },
      },
      mounted() {
        // 存放字典的返回值(可能是promise也可能是Function)
        const handler = Dict.value[dictName].value;

        // 如果是Promise直接返回
        if (handler.then) {
          handler.then(function (res) {
            this.dataSource = res;
          });
        }
      },
      render() {
        return h(
          TableSelectFormItem,
          {
            selectProps: this.selectProps,
            tableProps: this.tableProps,
            rowKey: this.rowKey,
            labelKey: this.labelKey,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    FormItemComponents[`${dictName}MulitSelectFormItem`] = defineComponent({
      name: `${dictName}MulitSelectFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        selectProps: TableMulitSelectFormItem.props.selectProps,
        tableProps: TableMulitSelectFormItem.props.tableProps,
        rowKey: string().def('id'),
        labelKey: string().def('name'),
        value: TableMulitSelectFormItem.props.value,
      },
      emits: ['change'],
      data() {
        return {
          dataSource: [],
        };
      },
      methods: {
        $loadData(params) {
          // 存放字典的返回值(可能是promise也可能是Function)
          const handler = Dict.value[dictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) {
            handler(params).then(function (res) {
              this.dataSource = res;
            });
          }
        },
      },
      watch: {
        cascadeParams(val) {
          this.$loadData(val);
        },
      },
      mounted() {
        // 存放字典的返回值(可能是promise也可能是Function)
        const handler = Dict.value[dictName].value;

        // 如果是Promise直接返回
        if (handler.then) {
          handler.then(function (res) {
            this.dataSource = res;
          });
        }
      },
      render() {
        return h(
          TableMulitSelectFormItem,
          {
            selectProps: this.selectProps,
            tableProps: this.tableProps,
            rowKey: this.rowKey,
            labelKey: this.labelKey,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });
  });

  // 动态的分页Table
  tablePaginationDictNames.forEach((dictName) => {
    FormItemComponents[`${dictName}FormItem`] = defineComponent({
      name: `${dictName}FormItem`,
      props: {
        tableProps: TableFormItem.props.tableProps,
        rowKey: string().def('id'),
        totalKey: string().def('total'),
        dataKey: string().def('records'),
      },
      emits: ['change'],
      data() {
        return {
          loading: false,
          data: [],
          pagin: {
            current: 1,
            pageSize: 10,
            total: 0,
          },
        };
      },
      watch: {
        'pagin.current': function () {
          this.$loadData();
        },
        'pagin.pageSize': function () {
          this.$loadData();
        },
      },
      methods: {
        $loadData() {
          this.loading = true;

          const handler = Dict.value[dictName].value;

          handler({ ...this.pagin })
            .then((res) => {
              this.pagin = {
                ...this.pagin,
                total: res[this.totalKey || 'total'],
              };

              this.data = res[this.dataKey || 'records'];

              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        },
        $getPagination() {
          return {
            onChange: (current, pageSize) => {
              this.pagin = {
                ...this.pagin,
                current,
                pageSize,
              };
            },
            onShowSizeChange: (current, pageSize) => {
              this.pagin = {
                ...this.pagin,
                current,
                pageSize,
              };
            },
            total: this.pagin.total,
            current: this.pagin.current,
            pageSize: this.pagin.pageSize,
            showQuickJumper: true,
          };
        },
      },
      mounted() {
        this.$loadData();
      },
      render() {
        return h(
          Table,
          {
            dataSource: this.data,
            loading: this.loading,
            pagination: this.$getPagination(),
            rowKey: this.rowKey || 'id',
            ...this.tableProps,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    FormItemComponents[`${dictName}SelectFormItem`] = defineComponent({
      name: `${dictName}SelectFormItem`,
      props: {
        selectProps: SelectFormItem.props.selectProps,
        tableProps: {
          type: Object,
          default: () => ({}),
        },
        value: SelectFormItem.props.value,
        rowKey: string().def('id'),
        totalKey: string().def('total'),
        dataKey: string().def('records'),
      },
      emits: ['change'],
      data() {
        return {
          inputValue: '',
          loading: false,
          data: [],
          pagin: {
            current: 1,
            pageSize: 10,
            total: 0,
          },
          selectedRowKeys: this.value ? [this.value] : [],
          selectedRows: this.value
            ? // @ts-ignore
              this.data.find((t) => t[this.rowKey || 'id'] === this.value)
            : [],
        };
      },
      watch: {
        'pagin.current': function () {
          this.$loadData();
        },
        'pagin.pageSize': function () {
          this.$loadData();
        },
        value(value) {
          this.selectedRowKeys = [value];
          this.selectedRows = [this.data.find((t) => t[this.rowKey || 'id'] === this.value)];
        },
      },
      methods: {
        $loadData() {
          this.loading = true;

          const handler = Dict.value[dictName].value;

          handler({ ...this.pagin })
            .then((res) => {
              this.pagin = {
                ...this.pagin,
                total: res[this.totalKey || 'total'],
              };

              this.data = res[this.dataKey || 'records'];

              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        },
        $getPagination() {
          return {
            onChange: (current, pageSize) => {
              this.pagin = {
                ...this.pagin,
                current,
                pageSize,
              };
            },
            onShowSizeChange: (current, pageSize) => {
              this.pagin = {
                ...this.pagin,
                current,
                pageSize,
              };
            },
            total: this.pagin.total,
            current: this.pagin.current,
            pageSize: this.pagin.pageSize,
            showQuickJumper: true,
          };
        },
        $renderDropdownRender() {
          const data = this.inputValue
            ? this.data.filter((t) => t[this.labelKey || 'name']?.indexOf?.(this.inputValue) !== -1)
            : this.data;

          return (
            <Table
              dataSource={data}
              loading={this.loading}
              pagination={this.$getPagination()}
              rowKey={this.rowKey || 'id'}
              rowSelection={{
                type: 'radio',
                selectedRowKeys: this.selectedRowKeys,
                selectedRows: this.selectedRows,
                onChange: (selectedRowKeys, selectedRows) => {
                  this.selectedRowKeys = selectedRowKeys;
                  this.selectedRows = selectedRows;
                  this.$emit('change', selectedRowKeys.length ? selectedRowKeys[0] : '');
                },
              }}
              {...this.tableProps}
            />
          );
        },
      },
      mounted() {
        this.$loadData();
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
            dataSource: this.data.map((t) => ({
              label: t[this.labelKey || 'name'],
              value: t[this.rowKey || 'id'],
            })),
            ...this.$attrs,
            onSearch: (inputValue) => {
              this.inputValue = inputValue;
            },
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    FormItemComponents[`${dictName}MulitSelectFormItem`] = defineComponent({
      name: `${dictName}MulitSelectFormItem`,
      props: {
        selectProps: MulitSelectFormItem.props.selectProps,
        tableProps: {
          type: Object,
          default: () => ({}),
        },
        value: MulitSelectFormItem.props.value,
        rowKey: string().def('id'),
        totalKey: string().def('total'),
        dataKey: string().def('records'),
      },
      emits: ['change'],
      data() {
        return {
          inputValue: '',
          loading: false,
          $data: new Map(),
          pagin: {
            current: 1,
            pageSize: 10,
            total: 0,
          },
          selectedRowKeys: this.value ? this.value : [],
          selectedRows: this.value
            ? this.value.map((t) =>
                this.$getDataSource().find((_item) => _item[this.rowKey || 'id'] === t),
              )
            : [],
        };
      },
      watch: {
        'pagin.current': function () {
          this.$loadData();
        },
        'pagin.pageSize': function () {
          this.$loadData();
        },
        value(value) {
          this.selectedRowKeys = value;
          this.selectedRows = value
            ? value.map((t) =>
                this.$getDataSource().find((_item) => _item[this.rowKey || 'id'] === t),
              )
            : [];
        },
      },
      methods: {
        $loadData() {
          this.loading = true;

          const handler = Dict.value[dictName].value;

          handler({ ...this.pagin })
            .then((res) => {
              this.pagin = {
                ...this.pagin,
                total: res[this.totalKey || 'total'],
              };

              this.$data.$data.set(this.pagin.current, res[this.dataKey || 'records']);

              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        },
        $getPagination() {
          return {
            onChange: (current, pageSize) => {
              this.pagin = {
                ...this.pagin,
                current,
                pageSize,
              };
            },
            onShowSizeChange: (current, pageSize) => {
              this.pagin = {
                ...this.pagin,
                current,
                pageSize,
              };
            },
            total: this.pagin.total,
            current: this.pagin.current,
            pageSize: this.pagin.pageSize,
            showQuickJumper: true,
          };
        },
        $getDataSource() {
          return this.$data.$data.get(this.pagin.current) || [];
        },
        $filter(selected, records) {
          const rowKey = this.rowKey || 'id';

          let _selectedRowKeys;
          let _selectedRows;

          if (selected) {
            // add
            _selectedRowKeys = [...this.selectedRowKeys, ...records.map((r) => r[rowKey])];
            _selectedRows = [...this.selectedRows, ...records];
          } else {
            // remove
            _selectedRowKeys = this.selectedRowKeys.filter(
              (key) => !records.find((r) => r[rowKey] === key),
            );
            _selectedRows = this.selectedRows.filter(
              (row) => !records.find((r) => r[rowKey] === row[rowKey]),
            );
          }

          this.selectedRowKeys = _selectedRowKeys;
          this.selectedRows = _selectedRows;

          this.$emit('change', _selectedRowKeys);
        },
        $renderDropdownRender() {
          const dataSource = this.$getDataSource();

          const data = this.inputValue
            ? dataSource.filter(
                (t) => t[this.labelKey || 'name']?.indexOf?.(this.inputValue) !== -1,
              )
            : dataSource;

          return (
            <Table
              dataSource={data}
              pagination={this.$getPagination()}
              loading={this.loading}
              rowKey={this.rowKey || 'id'}
              rowSelection={{
                type: 'checkbox',
                selectedRowKeys: this.selectedRowKeys,
                selectedRows: this.selectedRows,
                onSelect: (record, selected) => {
                  this.$filter(selected, [record]);
                },
                onSelectAll: (selected, selectedRows, changeRows) => {
                  this.$filter(selected, changeRows);
                },
              }}
              {...this.tableProps}
            />
          );
        },
      },
      mounted() {
        this.$loadData();
      },
      render() {
        return h(
          MulitSelectFormItem,
          {
            selectProps: {
              dropdownRender: () => this.$renderDropdownRender(),
              filterOption: () => {
                return false;
              },
              ...this.selectProps,
            },
            value: this.value,
            dataSource: this.$getDataSource().map((t) => ({
              label: t[this.labelKey || 'name'],
              value: t[this.rowKey || 'id'],
            })),
            onSearch: (inputValue) => {
              this.inputValue = inputValue;
            },
            onChange: (value) => {
              this.$emit('change', value);

              this.selectedRowKeys = value;
              this.selectedRows = value.map((t) =>
                Array.from(this.$data.$data.values()).find(
                  (_item) =>
                    // @ts-ignore
                    _item[this.rowKey || 'id'] === t,
                ),
              );
            },
            ...this.$attrs,
          },
          this.$slots,
        );
      },
    });
  });

  return FormItemComponents;
};
