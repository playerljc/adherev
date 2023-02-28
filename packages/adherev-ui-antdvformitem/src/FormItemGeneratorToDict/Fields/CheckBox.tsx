import { defineComponent, h } from 'vue';
import { number, oneOfType, string } from 'vue-types';

import Dict from '@baifendian/adherev-util-dict';

import CheckBoxCheckAllCustomFormItem from '../CheckBoxCheckAllCustomFormItem';
import CheckBoxCheckAllHorizontalFormItem from '../CheckBoxCheckAllHorizontalFormItem';
import CheckBoxCheckAllSelectFormItem from '../CheckBoxCheckAllSelectFormItem';
import CheckBoxCheckAllVerticalFormItem from '../CheckBoxCheckAllVerticalFormItem';
import CheckBoxCustomFormItem from '../CheckBoxCustomFormItem';
import CheckBoxHorizontalFormItem from '../CheckBoxHorizontalFormItem';
import CheckBoxSelectFormItem from '../CheckBoxSelectFormItem';
import CheckBoxVerticalFormItem from '../CheckBoxVerticalFormItem';

const FormItemComponents: any = {};

export default () => {
  // 名称以CheckBox结尾的字典
  const checkBoxDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('CheckBox'),
  );

  // 名称以DynamicCheckBox结尾的字典
  const checkBoxDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicCheckBox'),
  );

  // 静态的CheckBox
  checkBoxDictNames.forEach((dictName) => {
    // CheckBoxVerticalFormItem
    FormItemComponents[`${dictName}VerticalFormItem`] = defineComponent({
      name: `${dictName}VerticalFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        checkGroupProps: CheckBoxVerticalFormItem.props.checkBoxGroupProps,
        value: CheckBoxVerticalFormItem.props.value,
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
          CheckBoxVerticalFormItem,
          {
            checkGroupProps: this.checkGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // CheckBoxHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = defineComponent({
      name: `${dictName}HorizontalFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        checkGroupProps: CheckBoxHorizontalFormItem.props.checkBoxGroupProps,
        value: CheckBoxHorizontalFormItem.props.value,
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
          CheckBoxHorizontalFormItem,
          {
            checkGroupProps: this.checkGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // CheckBoxCheckAllVerticalFormItem
    FormItemComponents[`${dictName}CheckAllVerticalFormItem`] = defineComponent({
      name: `${dictName}CheckAllVerticalFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        checkGroupProps: CheckBoxCheckAllVerticalFormItem.props.checkBoxGroupProps,
        value: CheckBoxCheckAllVerticalFormItem.props.value,
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
          CheckBoxCheckAllVerticalFormItem,
          {
            checkGroupProps: this.checkGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // CheckBoxCheckAllHorizontalFormItem
    FormItemComponents[`${dictName}CheckAllHorizontalFormItem`] = defineComponent({
      name: `${dictName}CheckAllHorizontalFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        checkGroupProps: CheckBoxCheckAllHorizontalFormItem.props.checkBoxGroupProps,
        value: CheckBoxCheckAllHorizontalFormItem.props.value,
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
          CheckBoxCheckAllHorizontalFormItem,
          {
            checkGroupProps: this.checkGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // CheckBoxSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = defineComponent({
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        selectProps: CheckBoxSelectFormItem.props.selectProps,
        value: CheckBoxSelectFormItem.props.value,
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
          CheckBoxSelectFormItem,
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

    // CheckBoxCheckAllSelectFormItem
    FormItemComponents[`${dictName}CheckAllSelectFormItem`] = defineComponent({
      name: `${dictName}CheckAllSelectFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        selectProps: CheckBoxCheckAllSelectFormItem.props.selectProps,
        value: CheckBoxCheckAllSelectFormItem.props.value,
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
          CheckBoxCheckAllSelectFormItem,
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

    // CheckBoxCustomFormItem
    FormItemComponents[`${dictName}CustomFormItem`] = defineComponent({
      name: `${dictName}CustomFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        checkGroupProps: CheckBoxCustomFormItem.props.checkBoxGroupProps,
        value: CheckBoxCustomFormItem.props.value,
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
          CheckBoxCustomFormItem,
          {
            checkGroupProps: this.checkGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // CheckBoxCheckAllCustomFormItem
    FormItemComponents[`${dictName}CheckAllCustomFormItem`] = defineComponent({
      name: `${dictName}CheckAllCustomFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        checkGroupProps: CheckBoxCheckAllCustomFormItem.props.checkBoxGroupProps,
        value: CheckBoxCheckAllCustomFormItem.props.value,
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
          CheckBoxCheckAllCustomFormItem,
          {
            checkGroupProps: this.checkGroupProps,
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

  // 动态的CheckBox
  checkBoxDynamicDictNames.forEach((dictName) => {
    // CheckBoxDynamicVerticalFormItem
    FormItemComponents[`${dictName}VerticalFormItem`] = defineComponent({
      name: `${dictName}VerticalFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        checkBoxGroupProps: CheckBoxVerticalFormItem.props.checkBoxGroupProps,
        value: CheckBoxVerticalFormItem.props.value,
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
          CheckBoxVerticalFormItem,
          {
            checkBoxGroupProps: this.checkBoxGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // CheckBoxDynamicHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = defineComponent({
      name: `${dictName}HorizontalFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        checkBoxGroupProps: CheckBoxHorizontalFormItem.props.checkBoxGroupProps,
        value: CheckBoxHorizontalFormItem.props.value,
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
          CheckBoxHorizontalFormItem,
          {
            checkBoxGroupProps: this.checkBoxGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // CheckBoxDynamicCheckAllVerticalFormItem
    FormItemComponents[`${dictName}CheckAllVerticalFormItem`] = defineComponent({
      name: `${dictName}CheckAllVerticalFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        checkBoxGroupProps: CheckBoxCheckAllVerticalFormItem.props.checkBoxGroupProps,
        value: CheckBoxCheckAllVerticalFormItem.props.value,
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
          CheckBoxCheckAllVerticalFormItem,
          {
            checkBoxGroupProps: this.checkBoxGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // CheckBoxDynamicCheckAllHorizontalFormItem
    FormItemComponents[`${dictName}CheckAllHorizontalFormItem`] = defineComponent({
      name: `${dictName}CheckAllHorizontalFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        checkBoxGroupProps: CheckBoxCheckAllHorizontalFormItem.props.checkBoxGroupProps,
        value: CheckBoxCheckAllHorizontalFormItem.props.value,
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
          CheckBoxCheckAllHorizontalFormItem,
          {
            checkBoxGroupProps: this.checkBoxGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // CheckBoxDynamicSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = defineComponent({
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        selectProps: CheckBoxSelectFormItem.props.selectProps,
        value: CheckBoxSelectFormItem.props.value,
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
          CheckBoxSelectFormItem,
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

    // CheckBoxDynamicCheckAllSelectFormItem
    FormItemComponents[`${dictName}CheckAllSelectFormItem`] = defineComponent({
      name: `${dictName}CheckAllSelectFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        selectProps: CheckBoxCheckAllSelectFormItem.props.selectProps,
        value: CheckBoxCheckAllSelectFormItem.props.value,
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
          CheckBoxCheckAllSelectFormItem,
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

    // CheckBoxCustomFormItem
    FormItemComponents[`${dictName}CustomFormItem`] = defineComponent({
      name: `${dictName}CustomFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        checkBoxGroupProps: CheckBoxCustomFormItem.props.checkBoxGroupProps,
        value: CheckBoxCustomFormItem.props.value,
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
          CheckBoxCustomFormItem,
          {
            checkBoxGroupProps: this.checkBoxGroupProps,
            value: this.value,
            dataSource: this.dataSource,
            ...this.$attrs,
            onChange: (value) => this.$emit('change', value),
          },
          this.$slots,
        );
      },
    });

    // CheckBoxCheckAllCustomFormItem
    FormItemComponents[`${dictName}CheckAllCustomFormItem`] = defineComponent({
      name: `${dictName}CheckAllCustomFormItem`,
      props: {
        cascadeParams: oneOfType([string(), number()]),
        checkBoxGroupProps: CheckBoxCheckAllCustomFormItem.props.checkBoxGroupProps,
        value: CheckBoxCheckAllCustomFormItem.props.value,
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
          CheckBoxCheckAllCustomFormItem,
          {
            checkBoxGroupProps: this.checkBoxGroupProps,
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
