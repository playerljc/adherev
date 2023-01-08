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
    FormItemComponents[`${dictName}VerticalFormItem`] = {
      name: `${dictName}VerticalFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        radioGroupProps: RadioVerticalFormItem.props.radioGroupProps,
        value: RadioVerticalFormItem.props.value,
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
          RadioVerticalFormItem,
          {
            props: {
              radioGroupProps: this.radioGroupProps,
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

    // RadioHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = {
      name: `${dictName}HorizontalFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        radioGroupProps: RadioVerticalFormItem.props.radioGroupProps,
        value: RadioVerticalFormItem.props.value,
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
          RadioHorizontalFormItem,
          {
            props: {
              radioGroupProps: this.radioGroupProps,
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

    // RadioButtonFormItem
    FormItemComponents[`${dictName}ButtonFormItem`] = {
      name: `${dictName}ButtonFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        radioGroupProps: RadioVerticalFormItem.props.radioGroupProps,
        value: RadioVerticalFormItem.props.value,
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
          RadioButtonFormItem,
          {
            props: {
              radioGroupProps: this.radioGroupProps,
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

    // RadioSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = {
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        selectProps: RadioSelectFormItem.props.selectProps,
        value: RadioSelectFormItem.props.value,
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
          RadioSelectFormItem,
          {
            props: {
              selectProps: this.selectProps,
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

    // RadioCustomFormItem
    FormItemComponents[`${dictName}CustomFormItem`] = {
      name: `${dictName}CustomFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        radioGroupProps: RadioCustomFormItem.props.radioGroupProps,
        value: RadioCustomFormItem.props.value,
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
          RadioCustomFormItem,
          {
            props: {
              radioGroupProps: this.radioGroupProps,
              value: this.value,
              dataSource: this.dataSource,
            },
            attrs: this.$attrs,
            on: this.$listeners,
            scopedSlots: this.$scopedSlots,
          },
          this.$slots,
        );
      },
    };
  });

  // 动态的Radio
  radioDynamicDictNames.forEach((dictName) => {
    // RadioVerticalFormItem
    FormItemComponents[`${dictName}VerticalFormItem`] = {
      name: `${dictName}VerticalFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        radioGroupProps: RadioVerticalFormItem.props.radioGroupProps,
        value: RadioVerticalFormItem.props.value,
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
          RadioVerticalFormItem,
          {
            props: {
              radioGroupProps: this.radioGroupProps,
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

    // RadioHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = {
      name: `${dictName}HorizontalFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        radioGroupProps: RadioHorizontalFormItem.props.radioGroupProps,
        value: RadioHorizontalFormItem.props.value,
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
          RadioHorizontalFormItem,
          {
            props: {
              radioGroupProps: this.radioGroupProps,
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

    // RadioButtonFormItem
    FormItemComponents[`${dictName}ButtonFormItem`] = {
      name: `${dictName}ButtonFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        radioGroupProps: RadioButtonFormItem.props.radioGroupProps,
        value: RadioButtonFormItem.props.value,
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
          RadioButtonFormItem,
          {
            props: {
              radioGroupProps: this.radioGroupProps,
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

    // RadioSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = {
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        selectProps: RadioSelectFormItem.props.selectProps,
        value: RadioSelectFormItem.props.value,
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
          RadioSelectFormItem,
          {
            props: {
              selectProps: this.selectProps,
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

    // RadioCustomFormItem
    FormItemComponents[`${dictName}CustomFormItem`] = {
      name: `${dictName}CustomFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        radioGroupProps: RadioCustomFormItem.props.radioGroupProps,
        value: RadioCustomFormItem.props.value,
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
          RadioCustomFormItem,
          {
            props: {
              radioGroupProps: this.radioGroupProps,
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

  return FormItemComponents;
};
