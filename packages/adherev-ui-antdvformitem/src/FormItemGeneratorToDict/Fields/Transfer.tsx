import { defineComponent, h } from 'vue';
import { number, oneOfType, string } from 'vue-types';

import Dict from '@baifendian/adherev-util-dict';

import TransferFormItem from '../TransferFormItem';
import TransferSelectFormItem from '../TransferSelectFormItem';

const FormItemComponents: any = {};

export default () => {
  // 名称以Transfer结尾的字典
  const transferDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Transfer'),
  );

  // 名称以DynamicTransfer结尾的字典
  const transferDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicTransfer'),
  );

  // 静态的Transfer
  transferDictNames.forEach((dictName) => {
    // transferFormItem
    FormItemComponents[`${dictName}FormItem`] = defineComponent({
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        transferProps: TransferFormItem.props.transferProps,
        value: TransferFormItem.props.value,
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
          TransferFormItem,
          {
            ...this.$attrs,
            transferProps: this.transferProps,
            value: this.value,
            dataSource: this.dataSource,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // transferSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = defineComponent({
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        selectProps: TransferSelectFormItem.props.selectProps,
        transferProps: TransferSelectFormItem.props.transferProps,
        value: TransferSelectFormItem.props.value,
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
          TransferSelectFormItem,
          {
            ...this.$attrs,
            selectProps: this.selectProps,
            transferProps: this.transferProps,
            value: this.value,
            dataSource: this.dataSource,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });
  });

  // 动态的transferFormItem
  transferDynamicDictNames.forEach((dictName) => {
    // transferFormItem
    FormItemComponents[`${dictName}FormItem`] = defineComponent({
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        transferProps: TransferFormItem.props.transferProps,
        value: TransferFormItem.props.value,
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
          TransferFormItem,
          {
            transferProps: this.transferProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // transferSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = defineComponent({
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        selectProps: TransferSelectFormItem.props.selectProps,
        transferProps: TransferSelectFormItem.props.transferProps,
        value: TransferSelectFormItem.props.value,
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
          TransferSelectFormItem,
          {
            selectProps: this.selectProps,
            transferProps: this.transferProps,
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

  return FormItemComponents;
};
