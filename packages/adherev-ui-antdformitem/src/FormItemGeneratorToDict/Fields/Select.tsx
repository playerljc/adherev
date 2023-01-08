import { Spin } from 'ant-design-vue';
import debounce from 'lodash.debounce';

import Dict from '@baifendian/adherev-util-dict';
import WatchMemoized from '@baifendian/adherev-util-watchmemoized';

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
    FormItemComponents[`${selectDictName}FormItem`] = {
      name: `${selectDictName}FormItem`,
      props: {
        cascadeParams: {
          type: [Number, String],
        },
        selectProps: {
          type: Object,
          default: () => ({}),
        },
        value: {
          type: [Number, String],
          default: '',
        },
      },
      computed: {
        dataSource() {
          const handler = Dict.value[selectDictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) return handler(this.cascadeParams);

          return handler;
        },
      },
      render(h) {
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <SelectFormItem
            {...{
              props: {
                ...props,
                dataSource: this.dataSource,
              },
              attrs: this.$attrs,
              scopedSlots: this.$scopedSlots,
              on: this.$listeners,
            }}
          >
            {this.$slots.default}
          </SelectFormItem>
        );
      },
    };

    // MulitSelectFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = {
      name: `${selectDictName}MulitFormItem`,
      props: {
        cascadeParams: {
          type: [Number, String],
        },
        selectProps: {
          type: Object,
          default: () => ({}),
        },
        value: {
          type: Array,
          default: () => [],
        },
      },
      computed: {
        dataSource() {
          const handler = Dict.value[selectDictName].value;

          // 如果是函数(一般是级联)
          if (handler instanceof Function) return handler(this.cascadeParams);

          return handler;
        },
      },
      render(h) {
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <MulitSelectFormItem
            {...{
              props: {
                ...props,
                dataSource: this.dataSource,
              },
              attrs: this.$attrs,
              scopedSlots: this.$scopedSlots,
              on: this.$listeners,
            }}
          >
            {this.$slots.default}
          </MulitSelectFormItem>
        );
      },
    };

    // CheckAllMulitSelectFormItem
    FormItemComponents[`${selectDictName}CheckAllMulitFormItem`] = {
      name: `${selectDictName}CheckAllMulitFormItem`,
      props: {
        cascadeParams: {
          type: [Number, String],
        },
        selectProps: {
          type: Object,
          default: () => ({}),
        },
        value: {
          type: Array,
          default: () => [],
        },
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
      render(h) {
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <CheckAllMulitSelectFormItem
            {...{
              props: {
                ...props,
                dataSource: this.dataSource,
              },
              attrs: this.$attrs,
              scopedSlots: this.$scopedSlots,
              on: {
                ...this.$listeners,
                checkAllChange: (checkAll) => {
                  this.$emit('change', checkAll ? this.dataSource.map((t) => t.value) : []);
                },
              },
            }}
          >
            {this.$slots.default}
          </CheckAllMulitSelectFormItem>
        );
      },
    };
  });

  // 动态的Select
  selectDynamicDictNames.forEach((selectDictName) => {
    // SelectFormItem
    FormItemComponents[`${selectDictName}FormItem`] = {
      name: `${selectDictName}FormItem`,
      props: {
        cascadeParams: {
          type: [Number, String],
        },
        selectProps: {
          type: Object,
          default: () => ({}),
        },
        value: {
          type: [Number, String],
          default: '',
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
      render(h) {
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <SelectFormItem
            {...{
              props: {
                ...props,
                dataSource: this.dataSource,
              },
              attrs: this.$attrs,
              scopedSlots: this.$scopedSlots,
              on: this.$listeners,
            }}
          >
            {this.$slots.default}
          </SelectFormItem>
        );
      },
    };

    // MulitSelectFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = {
      name: `${selectDictName}MulitFormItem`,
      props: {
        cascadeParams: {
          type: [Number, String],
        },
        selectProps: {
          type: Object,
          default: () => ({}),
        },
        value: {
          type: [Number, String],
          default: '',
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
      render(h) {
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <MulitSelectFormItem
            {...{
              props: {
                ...props,
                dataSource: this.dataSource,
              },
              attrs: this.$attrs,
              scopedSlots: this.$scopedSlots,
              on: this.$listeners,
            }}
          >
            {this.$slots.default}
          </MulitSelectFormItem>
        );
      },
    };

    // CheckAllMulitSelectFormItem
    FormItemComponents[`${selectDictName}CheckAllMulitFormItem`] = {
      name: `${selectDictName}CheckAllMulitFormItem`,
      props: {
        cascadeParams: {
          type: [Number, String],
        },
        selectProps: {
          type: Object,
          default: () => ({}),
        },
        value: {
          type: [Number, String],
          default: '',
        },
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
      render(h) {
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <CheckAllMulitSelectFormItem
            {...{
              props: {
                ...props,
                dataSource: this.dataSource,
              },
              attrs: this.$attrs,
              scopedSlots: this.$scopedSlots,
              on: {
                ...this.$listeners,
                checkAllChange: (checkAll) => {
                  this.$emit('change', checkAll ? this.dataSource.map((t) => t.value) : []);
                },
              },
            }}
          >
            {this.$slots.default}
          </CheckAllMulitSelectFormItem>
        );
      },
    };
  });

  // 自动补全的Select
  selectAutoCompleteDictNames.forEach((selectDictName) => {
    // AutoCompleteFormItem
    FormItemComponents[`${selectDictName}FormItem`] = {
      name: `${selectDictName}FormItem`,
      props: {
        selectProps: {
          type: Object,
          default: () => ({}),
        },
        value: {
          type: [Number, String],
          default: '',
        },
        debounceTimeout: {
          type: Number,
          default: 300,
        },
      },
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
      render(h) {
        return (
          // @ts-ignore
          <SelectFormItem
            {...{
              props: {
                selectProps: {
                  notFoundContent: this.fetching ? <Spin size="small" /> : null,
                  filterOption: false,
                  showArrow: false,
                  defaultActiveFirstOption: false,
                  ...this.selectProps,
                },
                value: this.value,
                dataSource: this.dataSource,
              },
              attrs: this.$attrs,
              scopedSlots: this.$scopedSlots,
              on: {
                ...this.$listeners,
                search: this.$data.$debounceFetcher,
                change: (val) => {
                  if (!val) {
                    this.dataSource = [];
                    this.fetching = false;
                  }

                  this.$emit('change', val);
                },
              },
            }}
          >
            {this.$slots.default}
          </SelectFormItem>
        );
      },
    };

    // AutoCompleteMulitFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = {
      name: `${selectDictName}MulitFormItem`,
      props: {
        selectProps: {
          type: Object,
          default: () => ({}),
        },
        value: {
          type: Array,
          default: () => [],
        },
        debounceTimeout: {
          type: Number,
          default: 300,
        },
      },
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
      render(h) {
        return (
          // @ts-ignore
          <MulitSelectFormItem
            {...{
              props: {
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
              },
              attrs: this.$attrs,
              scopedSlots: this.$scopedSlots,
              on: {
                ...this.$listeners,
                search: this.$data.$debounceFetcher,
                change: (val) => {
                  if (!val || (Array.isArray(val) && !val.length)) {
                    this.dataSource = [];
                    this.fetching = false;
                  }

                  this.$emit('change', val);
                },
              },
            }}
          >
            {this.$slots.default}
          </MulitSelectFormItem>
        );
      },
    };

    // CheckAllAutoCompleteMulitSelectFormItem
    FormItemComponents[`${selectDictName}CheckAllMulitFormItem`] = {
      name: `${selectDictName}CheckAllMulitFormItem`,
      props: {
        selectProps: {
          type: Object,
          default: () => ({}),
        },
        value: {
          type: Array,
          default: () => [],
        },
        debounceTimeout: {
          type: Number,
          default: 300,
        },
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
      render(h) {
        return (
          // @ts-ignore
          <CheckAllMulitSelectFormItem
            {...{
              props: {
                selectProps: {
                  notFoundContent: this.fetching ? <Spin size="small" /> : null,
                  filterOption: false,
                  showArrow: false,
                  defaultActiveFirstOption: false,
                  ...this.selectProps,
                },
                value: this.value,
                dataSource: this.dataSource,
              },
              attrs: this.$attrs,
              scopedSlots: this.$scopedSlots,
              on: {
                ...this.$listeners,
                search: this.$data.$debounceFetcher,
                change: (val) => {
                  if (!val || (Array.isArray(val) && !val.length)) {
                    this.dataSource = [];
                    this.fetching = false;
                  }

                  this.$emit('change', val);
                },
                checkAllChange: (checkAll) => {
                  this.$emit('change', checkAll ? this.dataSource.map((t) => t.value) : []);
                },
              },
            }}
          >
            {this.$slots.default}
          </CheckAllMulitSelectFormItem>
        );
      },
    };
  });

  return FormItemComponents;
};
