import Dict from '@baifendian/adherev-util-dict';

import CascaderFormItem from '../CascaderFormItem';
import CascaderLeafFormItem from '../CascaderLeafFormItem';

const FormItemComponents: any = {};

export default () => {
  // 名称以Cascader结尾的字典
  const cascaderDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Cascader'),
  );

  // 名称以DynamicCascader结尾的字典
  const cascaderDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicCascader'),
  );

  // 静态的Cascader
  cascaderDictNames.forEach((dictName) => {
    // CascaderFormItem
    FormItemComponents[`${dictName}FormItem`] = {
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        cascaderProps: CascaderFormItem.props.cascaderProps,
        value: CascaderFormItem.props.value,
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
          CascaderFormItem,
          {
            props: {
              cascaderProps: this.cascaderProps,
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

    // treeCascaderLeafFormItem
    FormItemComponents[`${dictName}LeafFormItem`] = {
      name: `${dictName}LeafFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        cascaderProps: CascaderLeafFormItem.props.cascaderProps,
        value: CascaderLeafFormItem.props.value,
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
          CascaderLeafFormItem,
          {
            props: {
              cascaderProps: this.cascaderProps,
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

  // 动态的Cascader
  cascaderDynamicDictNames.forEach((dictName) => {
    // CascaderFormItem
    FormItemComponents[`${dictName}FormItem`] = {
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        cascaderProps: CascaderFormItem.props.cascaderProps,
        value: CascaderFormItem.props.value,
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
          CascaderFormItem,
          {
            props: {
              cascaderProps: this.cascaderProps,
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

    // treeCascaderLeafFormItem
    FormItemComponents[`${dictName}LeafFormItem`] = {
      name: `${dictName}LeafFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        cascaderProps: CascaderLeafFormItem.props.cascaderProps,
        value: CascaderLeafFormItem.props.value,
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
          CascaderLeafFormItem,
          {
            props: {
              cascaderProps: this.cascaderProps,
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
