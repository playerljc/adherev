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
    FormItemComponents[`${dictName}VerticalFormItem`] = {
      name: `${dictName}VerticalFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        checkGroupProps: CheckBoxVerticalFormItem.props.checkBoxGroupProps,
        value: CheckBoxVerticalFormItem.props.value,
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
          CheckBoxVerticalFormItem,
          {
            props: {
              checkGroupProps: this.checkGroupProps,
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

    // CheckBoxHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = {
      name: `${dictName}HorizontalFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        checkGroupProps: CheckBoxHorizontalFormItem.props.checkBoxGroupProps,
        value: CheckBoxHorizontalFormItem.props.value,
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
          CheckBoxHorizontalFormItem,
          {
            props: {
              checkGroupProps: this.checkGroupProps,
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

    // CheckBoxCheckAllVerticalFormItem
    FormItemComponents[`${dictName}CheckAllVerticalFormItem`] = {
      name: `${dictName}CheckAllVerticalFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        checkGroupProps: CheckBoxCheckAllVerticalFormItem.props.checkBoxGroupProps,
        value: CheckBoxCheckAllVerticalFormItem.props.value,
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
          CheckBoxCheckAllVerticalFormItem,
          {
            props: {
              checkGroupProps: this.checkGroupProps,
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

    // CheckBoxCheckAllHorizontalFormItem
    FormItemComponents[`${dictName}CheckAllHorizontalFormItem`] = {
      name: `${dictName}CheckAllHorizontalFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        checkGroupProps: CheckBoxCheckAllHorizontalFormItem.props.checkBoxGroupProps,
        value: CheckBoxCheckAllHorizontalFormItem.props.value,
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
          CheckBoxCheckAllHorizontalFormItem,
          {
            props: {
              checkGroupProps: this.checkGroupProps,
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

    // CheckBoxSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = {
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        selectProps: CheckBoxSelectFormItem.props.selectProps,
        value: CheckBoxSelectFormItem.props.value,
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
          CheckBoxSelectFormItem,
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

    // CheckBoxCheckAllSelectFormItem
    FormItemComponents[`${dictName}CheckAllSelectFormItem`] = {
      name: `${dictName}CheckAllSelectFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        selectProps: CheckBoxCheckAllSelectFormItem.props.selectProps,
        value: CheckBoxCheckAllSelectFormItem.props.value,
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
          CheckBoxCheckAllSelectFormItem,
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

    // CheckBoxCustomFormItem
    FormItemComponents[`${dictName}CustomFormItem`] = {
      name: `${dictName}CustomFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        checkGroupProps: CheckBoxCustomFormItem.props.checkBoxGroupProps,
        value: CheckBoxCustomFormItem.props.value,
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
          CheckBoxCustomFormItem,
          {
            props: {
              checkGroupProps: this.checkGroupProps,
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

    // CheckBoxCheckAllCustomFormItem
    FormItemComponents[`${dictName}CheckAllCustomFormItem`] = {
      name: `${dictName}CheckAllCustomFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        checkGroupProps: CheckBoxCheckAllCustomFormItem.props.checkBoxGroupProps,
        value: CheckBoxCheckAllCustomFormItem.props.value,
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
          CheckBoxCheckAllCustomFormItem,
          {
            props: {
              checkGroupProps: this.checkGroupProps,
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

  // 动态的CheckBox
  checkBoxDynamicDictNames.forEach((dictName) => {
    // CheckBoxDynamicVerticalFormItem
    FormItemComponents[`${dictName}VerticalFormItem`] = {
      name: `${dictName}VerticalFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        checkBoxGroupProps: CheckBoxVerticalFormItem.props.checkBoxGroupProps,
        value: CheckBoxVerticalFormItem.props.value,
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
          CheckBoxVerticalFormItem,
          {
            props: {
              checkBoxGroupProps: this.checkBoxGroupProps,
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

    // CheckBoxDynamicHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = {
      name: `${dictName}HorizontalFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        checkBoxGroupProps: CheckBoxHorizontalFormItem.props.checkBoxGroupProps,
        value: CheckBoxHorizontalFormItem.props.value,
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
          CheckBoxHorizontalFormItem,
          {
            props: {
              checkBoxGroupProps: this.checkBoxGroupProps,
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

    // CheckBoxDynamicCheckAllVerticalFormItem
    FormItemComponents[`${dictName}CheckAllVerticalFormItem`] = {
      name: `${dictName}CheckAllVerticalFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        checkBoxGroupProps: CheckBoxCheckAllVerticalFormItem.props.checkBoxGroupProps,
        value: CheckBoxCheckAllVerticalFormItem.props.value,
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
          CheckBoxCheckAllVerticalFormItem,
          {
            props: {
              checkBoxGroupProps: this.checkBoxGroupProps,
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

    // CheckBoxDynamicCheckAllHorizontalFormItem
    FormItemComponents[`${dictName}CheckAllHorizontalFormItem`] = {
      name: `${dictName}CheckAllHorizontalFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        checkBoxGroupProps: CheckBoxCheckAllHorizontalFormItem.props.checkBoxGroupProps,
        value: CheckBoxCheckAllHorizontalFormItem.props.value,
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
          CheckBoxCheckAllHorizontalFormItem,
          {
            props: {
              checkBoxGroupProps: this.checkBoxGroupProps,
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

    // CheckBoxDynamicSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = {
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        selectProps: CheckBoxSelectFormItem.props.selectProps,
        value: CheckBoxSelectFormItem.props.value,
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
          CheckBoxSelectFormItem,
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

    // CheckBoxDynamicCheckAllSelectFormItem
    FormItemComponents[`${dictName}CheckAllSelectFormItem`] = {
      name: `${dictName}CheckAllSelectFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        selectProps: CheckBoxCheckAllSelectFormItem.props.selectProps,
        value: CheckBoxCheckAllSelectFormItem.props.value,
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
          CheckBoxCheckAllSelectFormItem,
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

    // CheckBoxCustomFormItem
    FormItemComponents[`${dictName}CustomFormItem`] = {
      name: `${dictName}CustomFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        checkBoxGroupProps: CheckBoxCustomFormItem.props.checkBoxGroupProps,
        value: CheckBoxCustomFormItem.props.value,
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
          CheckBoxCustomFormItem,
          {
            props: {
              checkBoxGroupProps: this.checkBoxGroupProps,
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

    // CheckBoxCheckAllCustomFormItem
    FormItemComponents[`${dictName}CheckAllCustomFormItem`] = {
      name: `${dictName}CheckAllCustomFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        checkBoxGroupProps: CheckBoxCheckAllCustomFormItem.props.checkBoxGroupProps,
        value: CheckBoxCheckAllCustomFormItem.props.value,
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
          CheckBoxCheckAllCustomFormItem,
          {
            props: {
              checkBoxGroupProps: this.checkBoxGroupProps,
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
