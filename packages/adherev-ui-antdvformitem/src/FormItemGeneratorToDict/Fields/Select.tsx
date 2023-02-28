import { ListProps } from 'ant-design-vue/es/list';
import debounce from 'lodash.debounce';
import { defineComponent } from 'vue';
import { array, number, object, oneOfType, string } from 'vue-types';

import Dict from '@baifendian/adherev-util-dict';
import WatchMemoized from '@baifendian/adherev-util-watchmemoized';

import { Spin } from '../../AntdvFormItemNormalize';
import CheckAllMulitSelectFormItem from '../CheckAllMulitSelectFormItem';
import MulitSelectFormItem from '../MulitSelectFormItem';
import SelectFormItem from '../SelectFormItem';

const { memoized } = WatchMemoized;

const FormItemComponents: any = {};

export default () => {
  // 名称以Select结尾的字典
  const selectDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Select'),
  );

  // 名称以DynamicSelect结尾的字典
  const selectDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicSelect'),
  );

  // 名称以AutoComplete结尾的字典
  const selectAutoCompleteDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('AutoCompleteSelect'),
  );

  // 静态的Select
  selectDictNames.forEach((selectDictName) => {
    // SelectFormItem
    FormItemComponents[`${selectDictName}FormItem`] = defineComponent({
      name: `${selectDictName}FormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        selectProps: object<ListProps>().def({}),
        value: oneOfType([string(), number()]).def(''),
      },
      emits: ['change'],
      computed: {
        dataSource() {
          const handler = Dict.value[selectDictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) return handler(this.cascadeParams);

          return handler;
        },
      },
      render() {
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <SelectFormItem
            {...{
              ...props,
              ...this.$attrs,
              dataSource: this.dataSource,
              onChange: (value) => this.$emit('change', value),
            }}
          >
            {this.$slots}
          </SelectFormItem>
        );
      },
    });

    // MulitSelectFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = defineComponent({
      name: `${selectDictName}MulitFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        selectProps: object<ListProps>().def({}),
        value: array().def([]),
      },
      emits: ['change'],
      computed: {
        dataSource() {
          const handler = Dict.value[selectDictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) return handler(this.cascadeParams);

          return handler;
        },
      },
      render() {
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <MulitSelectFormItem
            {...{
              dataSource: this.dataSource,
              ...props,
              ...this.$attrs,
              onChange: (value) => this.$emit('change', value),
            }}
          >
            {this.$slots}
          </MulitSelectFormItem>
        );
      },
    });

    // CheckAllMulitSelectFormItem
    FormItemComponents[`${selectDictName}CheckAllMulitFormItem`] = defineComponent({
      name: `${selectDictName}CheckAllMulitFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        selectProps: object<ListProps>().def({}),
        value: array().def([]),
      },
      emits: ['change'],
      computed: {
        dataSource() {
          const handler = Dict.value[selectDictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) return handler(this.cascadeParams);

          return handler;
        },
      },
      render() {
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <CheckAllMulitSelectFormItem
            {...{
              ...props,
              ...this.$attrs,
              dataSource: this.dataSource,
              onCheckAllChange: (checkAll) => {
                this.$emit('change', checkAll ? this.dataSource.map((t) => t.value) : []);
              },
              onChange: (value) => this.$emit('change', value),
            }}
          >
            {this.$slots}
          </CheckAllMulitSelectFormItem>
        );
      },
    });
  });

  // 动态的Select
  selectDynamicDictNames.forEach((selectDictName) => {
    // SelectFormItem
    FormItemComponents[`${selectDictName}FormItem`] = defineComponent({
      name: `${selectDictName}FormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        selectProps: object<ListProps>().def({}),
        value: oneOfType([string(), number()]).def(''),
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
          const handler = Dict.value[selectDictName].value;

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
        const handler = Dict.value[selectDictName].value;

        // 如果是Promise直接返回
        if (handler.then) {
          handler.then(function (res) {
            this.dataSource = res;
          });
        }
      },
      render() {
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <SelectFormItem
            {...{
              dataSource: this.dataSource,
              ...props,
              ...this.$attrs,
              onChange: (value) => this.$emit('change', value),
            }}
          >
            {this.$slots}
          </SelectFormItem>
        );
      },
    });

    // MulitSelectFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = defineComponent({
      name: `${selectDictName}MulitFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        selectProps: object<ListProps>().def({}),
        value: oneOfType([string(), number()]).def(''),
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
          const handler = Dict.value[selectDictName].value;

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
        const handler = Dict.value[selectDictName].value;

        // 如果是Promise直接返回
        if (handler.then) {
          handler.then(function (res) {
            this.dataSource = res;
          });
        }
      },
      render() {
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <MulitSelectFormItem
            {...{
              dataSource: this.dataSource,
              ...props,
              ...this.$attrs,
              onChange: (value) => this.$emit('change', value),
            }}
          >
            {this.$slots}
          </MulitSelectFormItem>
        );
      },
    });

    // CheckAllMulitSelectFormItem
    FormItemComponents[`${selectDictName}CheckAllMulitFormItem`] = defineComponent({
      name: `${selectDictName}CheckAllMulitFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        selectProps: object<ListProps>().def({}),
        value: oneOfType([string(), number()]).def(''),
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
          const handler = Dict.value[selectDictName].value;

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
        const handler = Dict.value[selectDictName].value;

        // 如果是Promise直接返回
        if (handler.then) {
          handler.then(function (res) {
            this.dataSource = res;
          });
        }
      },
      render() {
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <CheckAllMulitSelectFormItem
            {...{
              dataSource: this.dataSource,
              onCheckAllChange: (checkAll) => {
                this.$emit('change', checkAll ? this.dataSource.map((t) => t.value) : []);
              },
              ...props,
              ...this.$attrs,
              onChange: (value) => this.$emit('change', value),
            }}
          >
            {this.$slots}
          </CheckAllMulitSelectFormItem>
        );
      },
    });
  });

  // 自动补全的Select
  selectAutoCompleteDictNames.forEach((selectDictName) => {
    // AutoCompleteFormItem
    FormItemComponents[`${selectDictName}FormItem`] = defineComponent({
      name: `${selectDictName}FormItem`,
      props: {
        selectProps: object<ListProps>().def({}),
        value: oneOfType([string(), number()]).def(''),
        debounceTimeout: number().def(300),
      },
      emits: ['change'],
      data() {
        return {
          fetching: false,
          dataSource: [],
          $debounceFetcher: this.$createDebounceFetcher(),
          $fetchRef: 0,
        };
      },
      methods: {
        $createDebounceFetcher() {
          return debounce(
            memoized.createMemoFun((value) => {
              this.$data.$fetchRef += 1;
              const fetchId = this.$data.$fetchRef;

              if (!value) {
                this.dataSource = this.dataSource.filter((t) => t.value === this.value);
                this.fetching = false;

                return;
              }

              const handler = Dict.value[selectDictName].value;

              handler(value).then((newOptions) => {
                if (fetchId !== this.$data.$fetchRef) {
                  // for fetch callback order
                  return;
                }

                const data = [
                  ...newOptions,
                  ...this.dataSource.filter((t) => t.value === this.value),
                ];

                this.dataSource = [...Array.from(new Set(data.map((t) => t.value)))].map((val) =>
                  data.find((item) => item.value === val),
                );

                this.fetching = false;
              });
            }),
            this.debounceTimeout || 300,
          );
        },
      },
      watch: {
        debounceTimeout() {
          this.$data.$debounceFetcher = this.$createDebounceFetcher();
          this.$forceUpdate();
        },
      },
      render() {
        return (
          // @ts-ignore
          <SelectFormItem
            {...{
              selectProps: {
                notFoundContent: this.fetching ? <Spin size="small" /> : null,
                filterOption: false,
                showArrow: false,
                defaultActiveFirstOption: false,
                ...this.selectProps,
              },
              value: this.value,
              dataSource: this.dataSource,
              onSearch: this.$data.$debounceFetcher,
              onChange: (val) => {
                if (!val) {
                  this.dataSource = [];
                  this.fetching = false;
                }

                this.$emit('change', val);
              },
              ...this.$attrs,
            }}
          >
            {this.$slots}
          </SelectFormItem>
        );
      },
    });

    // AutoCompleteMulitFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = defineComponent({
      name: `${selectDictName}MulitFormItem`,
      props: {
        selectProps: object<ListProps>().def({}),
        value: array().def([]),
        debounceTimeout: number().def(300),
      },
      emits: ['change'],
      data() {
        return {
          fetching: false,
          dataSource: [],
          $debounceFetcher: this.$createDebounceFetcher(),
          $fetchRef: 0,
        };
      },
      methods: {
        $createDebounceFetcher() {
          return debounce(
            memoized.createMemoFun((value) => {
              this.$data.$fetchRef += 1;
              const fetchId = this.$data.$fetchRef;

              if (!value || (Array.isArray(value) && !value.length)) {
                this.dataSource = this.dataSource.filter((t) => {
                  if (Array.isArray(this.value)) return !!this.value.find((v) => v === t.value);
                  else return t.value === this.value;
                });
                this.fetching = false;

                return;
              }

              const handler = Dict.value[selectDictName].value;

              handler(value).then((newOptions) => {
                if (fetchId !== this.$data.$fetchRef) {
                  // for fetch callback order
                  return;
                }

                const data = [
                  ...newOptions,
                  ...this.dataSource.filter((t) => {
                    if (Array.isArray(this.value)) return !!this.value.find((v) => v === t.value);
                    else return t.value === this.value;
                  }),
                ];

                this.dataSource = [...Array.from(new Set(data.map((t) => t.value)))].map((val) =>
                  data.find((item) => item.value === val),
                );
                this.fetching = false;
              });
            }),
            this.debounceTimeout || 300,
          );
        },
      },
      watch: {
        debounceTimeout() {
          this.$data.$debounceFetcher = this.$createDebounceFetcher();
          this.$forceUpdate();
        },
      },
      render() {
        return (
          // @ts-ignore
          <MulitSelectFormItem
            {...{
              selectProps: {
                notFoundContent: this.fetching ? (
                  // @ts-ignore
                  <Spin size="small" />
                ) : null,
                filterOption: false,
                showArrow: false,
                defaultActiveFirstOption: false,
                ...this.selectProps,
              },
              value: this.value,
              dataSource: this.dataSource,
              ...this.$attrs,
              onSearch: this.$data.$debounceFetcher,
              onChange: (val) => {
                if (!val || (Array.isArray(val) && !val.length)) {
                  this.dataSource = [];
                  this.fetching = false;
                }

                this.$emit('change', val);
              },
            }}
          >
            {this.$slots}
          </MulitSelectFormItem>
        );
      },
    });

    // CheckAllAutoCompleteMulitSelectFormItem
    FormItemComponents[`${selectDictName}CheckAllMulitFormItem`] = defineComponent({
      name: `${selectDictName}CheckAllMulitFormItem`,
      props: {
        selectProps: object<ListProps>().def({}),
        value: array().def([]),
        debounceTimeout: number().def(300),
      },
      emits: ['change'],
      data() {
        return {
          fetching: false,
          dataSource: [],
          $debounceFetcher: this.$createDebounceFetcher(),
          $fetchRef: 0,
        };
      },
      methods: {
        $createDebounceFetcher() {
          return debounce(
            memoized.createMemoFun((value) => {
              this.$data.$fetchRef += 1;
              const fetchId = this.$data.$fetchRef;

              if (!value || (Array.isArray(value) && !value.length)) {
                this.dataSource = this.dataSource.filter((t) => {
                  if (Array.isArray(this.value)) return !!this.value.find((v) => v === t.value);
                  else return t.value === this.value;
                });
                this.fetching = false;

                return;
              }

              const handler = Dict.value[selectDictName].value;

              handler(value).then((newOptions) => {
                if (fetchId !== this.$data.$fetchRef) {
                  // for fetch callback order
                  return;
                }

                const data = [
                  ...newOptions,
                  ...this.dataSource.filter((t) => {
                    if (Array.isArray(this.value)) return !!this.value.find((v) => v === t.value);
                    else return t.value === this.value;
                  }),
                ];

                this.dataSource = [...Array.from(new Set(data.map((t) => t.value)))].map((val) =>
                  data.find((item) => item.value === val),
                );
                this.fetching = false;
              });
            }),
            this.debounceTimeout || 300,
          );
        },
      },
      watch: {
        debounceTimeout() {
          this.$data.$debounceFetcher = this.$createDebounceFetcher();
          this.$forceUpdate();
        },
      },
      render() {
        return (
          // @ts-ignore
          <CheckAllMulitSelectFormItem
            {...{
              selectProps: {
                notFoundContent: this.fetching ? <Spin size="small" /> : null,
                filterOption: false,
                showArrow: false,
                defaultActiveFirstOption: false,
                ...this.selectProps,
              },
              value: this.value,
              dataSource: this.dataSource,
              ...this.$attrs,
              onSearch: this.$data.$debounceFetcher,
              onChange: (val) => {
                if (!val || (Array.isArray(val) && !val.length)) {
                  this.dataSource = [];
                  this.fetching = false;
                }

                this.$emit('change', val);
              },
              onCheckAllChange: (checkAll) => {
                this.$emit('change', checkAll ? this.dataSource.map((t) => t.value) : []);
              },
            }}
          >
            {this.$slots}
          </CheckAllMulitSelectFormItem>
        );
      },
    });
  });

  return FormItemComponents;
};
