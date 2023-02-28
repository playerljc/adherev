import { defineComponent, h } from 'vue';
import { number, oneOfType, string } from 'vue-types';

import Dict from '@baifendian/adherev-util-dict';

import RadioButtonFormItem from '../RadioButtonFormItem';
import RadioCustomFormItem from '../RadioCustomFormItem';
import RadioHorizontalFormItem from '../RadioHorizontalFormItem';
import RadioSelectFormItem from '../RadioSelectFormItem';
import RadioVerticalFormItem from '../RadioVerticalFormItem';

const FormItemComponents: any = {};

export default () => {
  // 名称以Radio结尾的字典
  const radioDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Radio'),
  );

  // 名称以DynamicRadio结尾的字典
  const radioDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicRadio'),
  );

  // 静态的Radio
  radioDictNames.forEach((dictName) => {
    // RadioVerticalFormItem
    FormItemComponents[`${dictName}VerticalFormItem`] = defineComponent({
      name: `${dictName}VerticalFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        radioGroupProps: RadioVerticalFormItem.props.radioGroupProps,
        value: RadioVerticalFormItem.props.value,
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
          RadioVerticalFormItem,
          {
            radioGroupProps: this.radioGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // RadioHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = defineComponent({
      name: `${dictName}HorizontalFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        radioGroupProps: RadioVerticalFormItem.props.radioGroupProps,
        value: RadioVerticalFormItem.props.value,
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
          RadioHorizontalFormItem,
          {
            radioGroupProps: this.radioGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // RadioButtonFormItem
    FormItemComponents[`${dictName}ButtonFormItem`] = defineComponent({
      name: `${dictName}ButtonFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        radioGroupProps: RadioVerticalFormItem.props.radioGroupProps,
        value: RadioVerticalFormItem.props.value,
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
          RadioButtonFormItem,
          {
            radioGroupProps: this.radioGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // RadioSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = defineComponent({
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        selectProps: RadioSelectFormItem.props.selectProps,
        value: RadioSelectFormItem.props.value,
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
          RadioSelectFormItem,
          {
            selectProps: this.selectProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // RadioCustomFormItem
    FormItemComponents[`${dictName}CustomFormItem`] = defineComponent({
      name: `${dictName}CustomFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        radioGroupProps: RadioCustomFormItem.props.radioGroupProps,
        value: RadioCustomFormItem.props.value,
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
          RadioCustomFormItem,
          {
            radioGroupProps: this.radioGroupProps,
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

  // 动态的Radio
  radioDynamicDictNames.forEach((dictName) => {
    // RadioVerticalFormItem
    FormItemComponents[`${dictName}VerticalFormItem`] = defineComponent({
      name: `${dictName}VerticalFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        radioGroupProps: RadioVerticalFormItem.props.radioGroupProps,
        value: RadioVerticalFormItem.props.value,
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
          RadioVerticalFormItem,
          {
            radioGroupProps: this.radioGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // RadioHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = defineComponent({
      name: `${dictName}HorizontalFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        radioGroupProps: RadioHorizontalFormItem.props.radioGroupProps,
        value: RadioHorizontalFormItem.props.value,
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
          RadioHorizontalFormItem,
          {
            radioGroupProps: this.radioGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // RadioButtonFormItem
    FormItemComponents[`${dictName}ButtonFormItem`] = defineComponent({
      name: `${dictName}ButtonFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        radioGroupProps: RadioButtonFormItem.props.radioGroupProps,
        value: RadioButtonFormItem.props.value,
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
          RadioButtonFormItem,
          {
            radioGroupProps: this.radioGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // RadioSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = defineComponent({
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        selectProps: RadioSelectFormItem.props.selectProps,
        value: RadioSelectFormItem.props.value,
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
          RadioSelectFormItem,
          {
            selectProps: this.selectProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // RadioCustomFormItem
    FormItemComponents[`${dictName}CustomFormItem`] = defineComponent({
      name: `${dictName}CustomFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]).def(''),
        radioGroupProps: RadioCustomFormItem.props.radioGroupProps,
        value: RadioCustomFormItem.props.value,
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
          RadioCustomFormItem,
          {
            radioGroupProps: this.radioGroupProps,
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
