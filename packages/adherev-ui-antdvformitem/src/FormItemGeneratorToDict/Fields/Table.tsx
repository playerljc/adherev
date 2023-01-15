import { Table } from 'ant-design-vue';

import Dict from '@baifendian/adherev-util-dict';

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
    FormItemComponents[`${dictName}FormItem`] = {
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        tableProps: TableFormItem.props.tableProps,
        rowKey: {
          type: String,
          default: 'id',
        },
      },
      computed: {
        dataSource() {
          const handler = Dict.value[dictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) return handler(this.cascadeParams);

          return handler;
        },
      },
      render(h) {
        return h(
          TableFormItem,
          {
            props: {
              tableProps: {
                dataSource: this.dataSource,
                ...this.tableProps,
              },
              rowKey: this.rowKey,
            },
            attrs: this.$attrs,
            scopedSlots: this.$scopedSlots,
            on: this.$listeners,
          },
          this.$slots.default,
        );
      },
    };

    FormItemComponents[`${dictName}SelectFormItem`] = {
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        selectProps: TableSelectFormItem.props.selectProps,
        tableProps: TableSelectFormItem.props.tableProps,
        rowKey: {
          type: String,
          default: 'id',
        },
        labelKey: {
          type: String,
          default: 'name',
        },
        value: TableSelectFormItem.props.value,
      },
      computed: {
        dataSource() {
          const handler = Dict.value[dictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) return handler(this.cascadeParams);

          return handler;
        },
      },
      render(h) {
        return h(
          TableSelectFormItem,
          {
            props: {
              selectProps: this.selectProps,
              tableProps: this.tableProps,
              rowKey: this.rowKey,
              labelKey: this.labelKey,
              value: this.value,
              dataSource: this.dataSource,
            },
            attrs: this.$attrs,
            scopedSlots: this.$scopedSlots,
            on: this.$listeners,
          },
          this.$slots.default,
        );
      },
    };

    FormItemComponents[`${dictName}MulitSelectFormItem`] = {
      name: `${dictName}MulitSelectFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        selectProps: TableMulitSelectFormItem.props.selectProps,
        tableProps: TableMulitSelectFormItem.props.tableProps,
        rowKey: {
          type: String,
          default: 'id',
        },
        labelKey: {
          type: String,
          default: 'name',
        },
        value: TableMulitSelectFormItem.props.value,
      },
      computed: {
        dataSource() {
          const handler = Dict.value[dictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) return handler(this.cascadeParams);

          return handler;
        },
      },
      render(h) {
        return h(
          TableMulitSelectFormItem,
          {
            props: {
              selectProps: this.selectProps,
              tableProps: this.tableProps,
              rowKey: this.rowKey,
              labelKey: this.labelKey,
              value: this.value,
              dataSource: this.dataSource,
            },
            attrs: this.$attrs,
            scopedSlots: this.$scopedSlots,
            on: this.$listeners,
          },
          this.$slots.default,
        );
      },
    };
  });

  // 动态的Table
  tableDynamicDictNames.forEach((dictName) => {
    FormItemComponents[`${dictName}FormItem`] = {
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        tableProps: TableFormItem.props.tableProps,
        rowKey: {
          type: String,
          default: 'id',
        },
      },
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
      render(h) {
        return h(
          TableFormItem,
          {
            props: {
              tableProps: {
                dataSource: this.dataSource,
                ...this.tableProps,
              },
              rowKey: this.rowKey,
            },
            attrs: this.$attrs,
            scopedSlots: this.$scopedSlots,
            on: this.$listeners,
          },
          this.$slots.default,
        );
      },
    };

    FormItemComponents[`${dictName}SelectFormItem`] = {
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        selectProps: TableSelectFormItem.props.selectProps,
        tableProps: TableSelectFormItem.props.tableProps,
        rowKey: {
          type: String,
          default: 'id',
        },
        labelKey: {
          type: String,
          default: 'name',
        },
        value: TableSelectFormItem.props.value,
      },
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
      render(h) {
        return h(
          TableSelectFormItem,
          {
            props: {
              selectProps: this.selectProps,
              tableProps: this.tableProps,
              rowKey: this.rowKey,
              labelKey: this.labelKey,
              value: this.value,
              dataSource: this.dataSource,
            },
            attrs: this.$attrs,
            scopedSlots: this.$scopedSlots,
            on: this.$listeners,
          },
          this.$slots.default,
        );
      },
    };

    FormItemComponents[`${dictName}MulitSelectFormItem`] = {
      name: `${dictName}MulitSelectFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        selectProps: TableMulitSelectFormItem.props.selectProps,
        tableProps: TableMulitSelectFormItem.props.tableProps,
        rowKey: {
          type: String,
          default: 'id',
        },
        labelKey: {
          type: String,
          default: 'name',
        },
        value: TableMulitSelectFormItem.props.value,
      },
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
      render(h) {
        return h(
          TableMulitSelectFormItem,
          {
            props: {
              selectProps: this.selectProps,
              tableProps: this.tableProps,
              rowKey: this.rowKey,
              labelKey: this.labelKey,
              value: this.value,
              dataSource: this.dataSource,
            },
            attrs: this.$attrs,
            scopedSlots: this.$scopedSlots,
            on: this.$listeners,
          },
          this.$slots.default,
        );
      },
    };
  });

  // 动态的分页Table
  tablePaginationDictNames.forEach((dictName) => {
    FormItemComponents[`${dictName}FormItem`] = {
      name: `${dictName}FormItem`,
      props: {
        tableProps: TableFormItem.props.tableProps,
        rowKey: {
          type: String,
          default: 'id',
        },
        totalKey: {
          type: String,
          default: 'total',
        },
        dataKey: {
          type: String,
          default: 'records',
        },
      },
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
      render(h) {
        return h(
          Table,
          {
            props: {
              dataSource: this.data,
              loading: this.loading,
              pagination: this.$getPagination(),
              rowKey: this.rowKey || 'id',
              ...this.tableProps,
            },
            attrs: this.$attrs,
            scopedSlots: this.$scopedSlots,
            on: this.$listeners,
          },
          this.$slots.default,
        );
      },
    };

    FormItemComponents[`${dictName}SelectFormItem`] = {
      name: `${dictName}SelectFormItem`,
      props: {
        selectProps: SelectFormItem.props.selectProps,
        tableProps: {
          type: Object,
          default: () => ({}),
        },
        value: SelectFormItem.props.value,
        rowKey: {
          type: String,
          default: 'id',
        },
        totalKey: {
          type: String,
          default: 'total',
        },
        dataKey: {
          type: String,
          default: 'records',
        },
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
          selectedRowKeys: this.value ? [this.value] : [],
          selectedRows: this.value
            ? this.data.find((t) => t[this.rowKey || 'id'] === this.value)
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
      },
      mounted() {
        this.$loadData();
      },
      render(h) {
        return h(
          SelectFormItem,
          {
            props: {
              selectProps: {
                dropdownRender: () => (
                  <Table
                    dataSource={this.data}
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
                    {...{
                      props: this.tableProps,
                    }}
                  />
                ),
                ...this.selectProps,
              },
              value: this.value,
              dataSource: this.data.map((t) => ({
                label: t[this.labelKey || 'name'],
                value: t[this.rowKey || 'id'],
              })),
            },
            attrs: this.$attrs,
            scopedSlots: this.$scopedSlots,
            on: this.$listeners,
          },
          this.$slots.default,
        );
      },
    };

    FormItemComponents[`${dictName}MulitSelectFormItem`] = {
      name: `${dictName}MulitSelectFormItem`,
      props: {
        selectProps: MulitSelectFormItem.props.selectProps,
        tableProps: {
          type: Object,
          default: () => ({}),
        },
        value: MulitSelectFormItem.props.value,
        rowKey: {
          type: String,
          default: 'id',
        },
        totalKey: {
          type: String,
          default: 'total',
        },
        dataKey: {
          type: String,
          default: 'records',
        },
      },
      emits: ['change'],
      data() {
        return {
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
          this.selectedRows = value.map((v) => this.data.find((t) => t[this.rowKey || 'id'] === v));
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
      },
      mounted() {
        this.$loadData();
      },
      render(h) {
        return h(
          MulitSelectFormItem,
          {
            props: {
              selectProps: {
                dropdownRender: () => (
                  <Table
                    dataSource={this.$getDataSource()}
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
                    {...{
                      props: this.tableProps,
                    }}
                  />
                ),
                ...this.selectProps,
              },
              value: this.value,
              dataSource: this.$getDataSource().map((t) => ({
                label: t[this.labelKey || 'name'],
                value: t[this.rowKey || 'id'],
              })),
            },
            attrs: this.$attrs,
            scopedSlots: this.$scopedSlots,
            on: {
              ...this.$listeners,
              change: (value) => {
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
            },
          },
          this.$slots.default,
        );
      },
    };
  });

  return FormItemComponents;
};