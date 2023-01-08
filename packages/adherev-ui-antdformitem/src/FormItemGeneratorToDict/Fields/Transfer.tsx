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
    FormItemComponents[`${dictName}FormItem`] = {
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        transferProps: TransferFormItem.props.transferProps,
        value: TransferFormItem.props.value,
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
          TransferFormItem,
          {
            props: {
              transferProps: this.transferProps,
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

    // transferSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = {
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        selectProps: TransferSelectFormItem.props.selectProps,
        transferProps: TransferSelectFormItem.props.transferProps,
        value: TransferSelectFormItem.props.value,
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
          TransferSelectFormItem,
          {
            props: {
              selectProps: this.selectProps,
              transferProps: this.transferProps,
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

  // 动态的transferFormItem
  transferDynamicDictNames.forEach((dictName) => {
    // transferFormItem
    FormItemComponents[`${dictName}FormItem`] = {
      name: `${dictName}FormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        transferProps: TransferFormItem.props.transferProps,
        value: TransferFormItem.props.value,
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
          TransferFormItem,
          {
            props: {
              transferProps: this.transferProps,
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

    // transferSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = {
      name: `${dictName}SelectFormItem`,
      props: {
        cascadeParams: {
          type: [String, Number],
        },
        selectProps: TransferSelectFormItem.props.selectProps,
        transferProps: TransferSelectFormItem.props.transferProps,
        value: TransferSelectFormItem.props.value,
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
          TransferSelectFormItem,
          {
            props: {
              selectProps: this.selectProps,
              transferProps: this.transferProps,
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
