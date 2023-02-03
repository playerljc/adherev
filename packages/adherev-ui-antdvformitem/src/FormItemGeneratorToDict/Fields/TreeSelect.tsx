import { defineComponent, h } from 'vue';
import { number, oneOfType, string } from 'vue-types';

import Util from '@baifendian/adherev-util';
import Dict from '@baifendian/adherev-util-dict';

import TreeMulitSelectFormItem from '../TreeMulitSelectFormItem';
import TreeSelectFormItem from '../TreeSelectFormItem';
import TreeSelectLeafFormItem from '../TreeSelectLeafFormItem';
import TreeSelectLeafMulitFormItem from '../TreeSelectLeafMulitFormItem';

const FormItemComponents: any = {};

const {
  _util: { getComponentPropsOption },
} = Util;

export default () => {
  // 名称以Tree结尾的字典
  const treeSelectDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Tree'),
  );

  // 名称以DynamicTree结尾的字典
  const treeSelectDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicTree'),
  );

  // 静态的TreeSelect
  treeSelectDictNames.forEach((dictName) => {
    // treeSelectFormItem
    FormItemComponents[`${dictName}FormItem`] = defineComponent({
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        treeSelectProps: TreeSelectFormItem.props.treeSelectProps,
        value: TreeSelectFormItem.props.value,
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
          TreeSelectFormItem,
          {
            treeSelectProps: this.treeSelectProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // treeSelectLeafFormItem
    FormItemComponents[`${dictName}LeafFormItem`] = defineComponent({
      name: `${dictName}LeafFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        treeSelectProps: TreeSelectLeafFormItem.props.treeSelectProps,
        value: TreeSelectLeafFormItem.props.value,
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
          TreeSelectLeafFormItem,
          {
            treeSelectProps: this.treeSelectProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // MulitSelectFormItem
    FormItemComponents[`${dictName}MulitFormItem`] = defineComponent({
      name: `${dictName}MulitFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        treeSelectProps: getComponentPropsOption(TreeMulitSelectFormItem).treeSelectProps,
        value: getComponentPropsOption(TreeMulitSelectFormItem).value,
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
          TreeMulitSelectFormItem,
          {
            treeSelectProps: this.treeSelectProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // MulitSelectLeafFormItem
    FormItemComponents[`${dictName}LeafMulitFormItem`] = defineComponent({
      name: `${dictName}LeafMulitFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        treeSelectProps: TreeSelectLeafMulitFormItem.props.treeSelectProps,
        value: TreeSelectLeafMulitFormItem.props.value,
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
          TreeSelectLeafMulitFormItem,
          {
            ...this.$attrs,
            treeSelectProps: this.treeSelectProps,
            value: this.value,
            dataSource: this.dataSource,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });
  });

  // 动态的TreeSelect
  treeSelectDynamicDictNames.forEach((dictName) => {
    // treeSelectFormItem
    FormItemComponents[`${dictName}FormItem`] = defineComponent({
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        treeSelectProps: TreeSelectFormItem.props.treeSelectProps,
        value: TreeSelectFormItem.props.value,
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
          TreeSelectFormItem,
          {
            treeSelectProps: this.treeSelectProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // treeSelectLeafFormItem
    FormItemComponents[`${dictName}LeafFormItem`] = defineComponent({
      name: `${dictName}LeafFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        treeSelectProps: TreeSelectLeafFormItem.props.treeSelectProps,
        value: TreeSelectLeafFormItem.props.value,
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
          TreeSelectLeafFormItem,
          {
            treeSelectProps: this.treeSelectProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // MulitSelectFormItem
    FormItemComponents[`${dictName}MulitFormItem`] = defineComponent({
      name: `${dictName}MulitFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        treeSelectProps: getComponentPropsOption(TreeMulitSelectFormItem).treeSelectProps,
        value: getComponentPropsOption(TreeMulitSelectFormItem).value,
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
          TreeMulitSelectFormItem,
          {
            treeSelectProps: this.treeSelectProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // MulitSelectFormItem
    FormItemComponents[`${dictName}LeafMulitFormItem`] = defineComponent({
      name: `${dictName}LeafMulitFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        treeSelectProps: TreeSelectLeafMulitFormItem.props.treeSelectProps,
        value: TreeSelectLeafMulitFormItem.props.value,
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
          TreeSelectLeafMulitFormItem,
          {
            treeSelectProps: this.treeSelectProps,
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
