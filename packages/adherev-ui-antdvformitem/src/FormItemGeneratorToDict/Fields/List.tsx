import { ListProps } from 'ant-design-vue/es/list';
import { defineComponent, h } from 'vue';
import { number, object, oneOfType, string } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import Dict from '@baifendian/adherev-util-dict';

import { Checkbox, List, Radio } from '../../AntdvFormItemNormalize';
import ListFormItem from '../ListFormItem';
import ListMulitSelectFormItem from '../ListMulitSelectFormItem';
import ListSelectFormItem from '../ListSelectFormItem';
import MulitSelectFormItem from '../MulitSelectFormItem';
import SelectFormItem from '../SelectFormItem';

const selectorPrefix = 'adherev-ui-antdformitem';
const FormItemComponents: any = {};

export default () => {
  // 名称以List结尾的字典
  const listDictNames = Object.keys(Dict.handlers).filter((dictName) => dictName.endsWith('List'));

  // 名称以DynamicList结尾的字典
  const listDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicList'),
  );

  // 名称以ListPagination结尾的字典(肯定是动态数据)
  const listPaginationDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('ListPagination'),
  );

  // 静态的List
  listDictNames.forEach((dictName) => {
    FormItemComponents[`${dictName}FormItem`] = defineComponent({
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        listProps: ListFormItem.props.listProps,
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
          ListFormItem,
          {
            listProps: {
              dataSource: this.dataSource,
              ...this.listProps,
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
        cascadeParams: oneOfType([string(), number()]),
        selectProps: ListSelectFormItem.props.selectProps,
        listProps: ListSelectFormItem.props.listProps,
        rowKey: string().def('id'),
        labelKey: string().def('name'),
        value: ListSelectFormItem.props.value,
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
          ListSelectFormItem,
          {
            selectProps: this.selectProps,
            listProps: this.listProps,
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
        cascadeParams: oneOfType([string(), number()]),
        selectProps: ListMulitSelectFormItem.props.selectProps,
        listProps: ListMulitSelectFormItem.props.listProps,
        rowKey: string().def('id'),
        labelKey: string().def('name'),
        value: ListMulitSelectFormItem.props.value,
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
          ListMulitSelectFormItem,
          {
            selectProps: this.selectProps,
            listProps: this.listProps,
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

  // 动态的List
  listDynamicDictNames.forEach((dictName) => {
    FormItemComponents[`${dictName}FormItem`] = defineComponent({
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        listProps: ListFormItem.props.listProps,
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
          ListFormItem,
          {
            listProps: {
              dataSource: this.dataSource,
              ...this.listProps,
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
        cascadeParams: oneOfType([string(), number()]),
        selectProps: ListSelectFormItem.props.selectProps,
        listProps: ListSelectFormItem.props.listProps,
        rowKey: string().def('id'),
        labelKey: string().def('name'),
        value: ListSelectFormItem.props.value,
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
          ListSelectFormItem,
          {
            selectProps: this.selectProps,
            listProps: this.listProps,
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
        cascadeParams: oneOfType([string(), number()]),
        selectProps: ListMulitSelectFormItem.props.selectProps,
        listProps: ListMulitSelectFormItem.props.listProps,
        rowKey: string().def('id'),
        labelKey: string().def('name'),
        value: ListMulitSelectFormItem.props.value,
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
          ListMulitSelectFormItem,
          {
            selectProps: this.selectProps,
            listProps: this.listProps,
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

  // 动态的分页List
  listPaginationDictNames.forEach((dictName) => {
    FormItemComponents[`${dictName}FormItem`] = defineComponent({
      name: `${dictName}FormItem`,
      props: {
        listProps: ListFormItem.props.listProps,
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
          List,
          {
            dataSource: this.data,
            loading: this.loading,
            pagination: this.$getPagination(),
            rowKey: this.rowKey || 'id',
            ...this.listProps,
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
        listProps: object<ListProps>().def({}),
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
            <List
              dataSource={data}
              loading={this.loading}
              pagination={this.$getPagination()}
              rowKey={this.rowKey || 'id'}
              {...this.listProps}
              // @ts-ignore
              renderItem={(item, index) => (
                // @ts-ignore
                <ConditionalRender
                  conditional={!!this.listProps?.renderItem || this.$slots.renderItem}
                >
                  {{
                    default: (
                      <div class={`${selectorPrefix}-rowselectwrap`}>
                        <div class={`${selectorPrefix}-rowselectwrap-fixed`}>
                          {this.RadioWrap(item)}
                        </div>
                        <div class={`${selectorPrefix}-rowselectwrap-auto`}>
                          {this?.listProps?.renderItem?.(item) ||
                            this.$slots?.renderItem?.(item, index)}
                        </div>
                      </div>
                    ),
                    noMatch: (
                      <div class={`${selectorPrefix}-rowselectwrap`}>
                        <div class={`${selectorPrefix}-rowselectwrap-fixed`}>
                          {this.RadioWrap(item)}
                        </div>
                        <div class={`${selectorPrefix}-rowselectwrap-auto`}>{item}</div>
                      </div>
                    ),
                  }}
                </ConditionalRender>
              )}
            />
          );
        },
        RadioWrap({ item }) {
          const rowKey = this.rowKey || 'id';

          return (
            <Radio
              onChange={(e) => {
                e.stopPropagation();

                const checked = e.target.checked;

                if (checked) {
                  this.selectedRowKeys = [item[rowKey]];
                  this.selectedRows = [{ ...item }];
                  this.$emit('change', item[rowKey]);
                }
              }}
              checked={this.selectedRowKeys.includes(item[rowKey])}
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
        listProps: object<ListProps>().def({}),
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
            <List
              dataSource={data}
              pagination={this.$getPagination()}
              loading={this.loading}
              rowKey={this.rowKey || 'id'}
              {...this.listProps}
              renderItem={(item, index) => (
                // @ts-ignore
                <ConditionalRender
                  conditional={!!this.listProps?.renderItem || this.$slots.renderItem}
                >
                  {{
                    default: (
                      <div class={`${selectorPrefix}-rowselectwrap`}>
                        <div class={`${selectorPrefix}-rowselectwrap-fixed`}>
                          {this.CheckWrap(item)}
                        </div>
                        <div class={`${selectorPrefix}-rowselectwrap-auto`}>
                          {this?.listProps?.renderItem?.(item) ||
                            this.$slots?.renderItem?.(item, index)}
                        </div>
                      </div>
                    ),
                    noMatch: (
                      <div class={`${selectorPrefix}-rowselectwrap`}>
                        <div class={`${selectorPrefix}-rowselectwrap-fixed`}>
                          {this.CheckWrap(item)}
                        </div>
                        <div class={`${selectorPrefix}-rowselectwrap-auto`}>{item}</div>
                      </div>
                    ),
                  }}
                </ConditionalRender>
              )}
            />
          );
        },
        CheckWrap({ item }) {
          const rowKey = this.rowKey || 'id';

          return (
            <Checkbox
              onChange={(e) => {
                e.stopPropagation();

                const checked = e.target.checked;

                if (checked) {
                  this.selectedRowKeys = [...this.selectedRowKeys, item[rowKey]];
                  this.selectedRows = [...this.selectedRows, { ...item }];
                  this.$emit('change', [...this.selectedRowKeys]);
                } else {
                  this.selectedRowKeys = this.selectedRowKeys.filter((key) => key !== item[rowKey]);
                  this.selectedRows = this.selectedRows.filter(
                    (row) => row[rowKey] !== item[rowKey],
                  );
                  this.$emit('change', [...this.selectedRowKeys]);
                }
              }}
              checked={this.selectedRowKeys.includes(item[rowKey])}
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
