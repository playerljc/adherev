import { AutoCompleteProps } from 'ant-design-vue/es/auto-complete';
import { PropType } from 'vue';

import Dict from '@baifendian/adherev-util-dict';

import AutoCompleteFormItem from '../AutoCompleteFormItem';

const FormItemComponents = {};

export default () => {
  // 名称以AutoComplete结尾的字典
  const autoCompleteDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('AutoComplete'),
  );

  // 名称以DynamicAutoComplete结尾的字典
  const autoCompleteDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicAutoComplete'),
  );

  // 静态的AutoComplete
  autoCompleteDictNames.forEach((dictName) => {
    // SelectFormItem
    FormItemComponents[`${dictName}FormItem`] = {
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
          default: '',
        },
        autoCompleteProps: {
          type: Object as PropType<AutoCompleteProps>,
          default: () => ({}),
        },
        value: {
          type: Object as PropType<{
            inputValue: string;
            selectValue: string | number;
          }>,
          default: () => ({
            inputValue: '',
            selectValue: '',
          }),
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
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <AutoCompleteFormItem
            dataSource={this.dataSource}
            {...{
              props: { ...props },
              attrs: { ...(this.$attrs || {}) },
              on: { ...(this.$listeners || {}) },
            }}
          >
            {Object.keys(this.$slots).reduce((arr, key) => arr.concat(this.$slots[key]), [])}
          </AutoCompleteFormItem>
        );
      },
    };
  });

  // 动态的AutoComplete
  autoCompleteDynamicDictNames.forEach((dictName) => {
    // SelectFormItem
    FormItemComponents[`${dictName}FormItem`] = {
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
          default: '',
        },
        autoCompleteProps: {
          type: Object as PropType<AutoCompleteProps>,
          default: () => ({}),
        },
        value: {
          type: Object as PropType<{
            inputValue: string;
            selectValue: string | number;
          }>,
          default: () => ({
            inputValue: '',
            selectValue: '',
          }),
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
        const { cascadeParams, ...props } = this.$props;

        return (
          // @ts-ignore
          <AutoCompleteFormItem
            dataSource={this.dataSource}
            {...{
              props: { ...props },
              attrs: { ...(this.$attrs || {}) },
              on: { ...(this.$listeners || {}) },
            }}
          >
            {Object.keys(this.$slots).reduce((arr, key) => arr.concat(this.$slots[key]), [])}
          </AutoCompleteFormItem>
        );
      },
    };
  });

  return FormItemComponents;
};
