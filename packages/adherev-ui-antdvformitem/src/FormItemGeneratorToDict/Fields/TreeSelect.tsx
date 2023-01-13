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
    FormItemComponents[`${dictName}FormItem`] = {
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        treeSelectProps: TreeSelectFormItem.props.treeSelectProps,
        value: TreeSelectFormItem.props.value,
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
          TreeSelectFormItem,
          {
            props: {
              treeSelectProps: this.treeSelectProps,
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

    // treeSelectLeafFormItem
    FormItemComponents[`${dictName}LeafFormItem`] = {
      name: `${dictName}LeafFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        treeSelectProps: TreeSelectLeafFormItem.props.treeSelectProps,
        value: TreeSelectLeafFormItem.props.value,
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
          TreeSelectLeafFormItem,
          {
            props: {
              treeSelectProps: this.treeSelectProps,
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

    // MulitSelectFormItem
    FormItemComponents[`${dictName}MulitFormItem`] = {
      name: `${dictName}MulitFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        treeSelectProps: getComponentPropsOption(TreeMulitSelectFormItem).treeSelectProps,
        value: getComponentPropsOption(TreeMulitSelectFormItem).value,
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
          TreeMulitSelectFormItem,
          {
            props: {
              treeSelectProps: this.treeSelectProps,
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

    // MulitSelectLeafFormItem
    FormItemComponents[`${dictName}LeafMulitFormItem`] = {
      name: `${dictName}LeafMulitFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        treeSelectProps: TreeSelectLeafMulitFormItem.props.treeSelectProps,
        value: TreeSelectLeafMulitFormItem.props.value,
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
          TreeSelectLeafMulitFormItem,
          {
            props: {
              treeSelectProps: this.treeSelectProps,
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

  // 动态的TreeSelect
  treeSelectDynamicDictNames.forEach((dictName) => {
    // treeSelectFormItem
    FormItemComponents[`${dictName}FormItem`] = {
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        treeSelectProps: TreeSelectFormItem.props.treeSelectProps,
        value: TreeSelectFormItem.props.value,
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
          TreeSelectFormItem,
          {
            props: {
              treeSelectProps: this.treeSelectProps,
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

    // treeSelectLeafFormItem
    FormItemComponents[`${dictName}LeafFormItem`] = {
      name: `${dictName}LeafFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        treeSelectProps: TreeSelectLeafFormItem.props.treeSelectProps,
        value: TreeSelectLeafFormItem.props.value,
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
          TreeSelectLeafFormItem,
          {
            props: {
              treeSelectProps: this.treeSelectProps,
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

    // MulitSelectFormItem
    FormItemComponents[`${dictName}MulitFormItem`] = {
      name: `${dictName}MulitFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        treeSelectProps: getComponentPropsOption(TreeMulitSelectFormItem).treeSelectProps,
        value: getComponentPropsOption(TreeMulitSelectFormItem).value,
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
          TreeMulitSelectFormItem,
          {
            props: {
              treeSelectProps: this.treeSelectProps,
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

    // MulitSelectFormItem
    FormItemComponents[`${dictName}LeafMulitFormItem`] = {
      name: `${dictName}LeafMulitFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        treeSelectProps: TreeSelectLeafMulitFormItem.props.treeSelectProps,
        value: TreeSelectLeafMulitFormItem.props.value,
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
          TreeSelectLeafMulitFormItem,
          {
            props: {
              treeSelectProps: this.treeSelectProps,
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
