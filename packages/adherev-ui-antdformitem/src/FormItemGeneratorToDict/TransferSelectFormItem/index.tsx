import { Transfer } from 'ant-design-vue';

import MulitSelectFormItem from '../MulitSelectFormItem';

export default {
  name: 'TransferSelectFormItem',
  props: {
    selectProps: {
      type: Object,
      default: () => ({}),
    },
    transferProps: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Array,
      default: () => [],
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['change'],
  data() {
    return {
      selectedKeys: [],
    };
  },
  methods: {
    $renderDropdownRender(h) {
      return (
        <Transfer
          selectedKeys={this.selectedKeys}
          targetKeys={this.value}
          dataSource={this.dataSource.map((t) => ({
            key: `${t.value}`,
            title: t.label,
            description: t.label,
          }))}
          render={(item) => item.title}
          {...{
            props: this.transferProps,
          }}
          onChange={(targetKeys) => {
            this.$emit('change', targetKeys);
          }}
          onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
            this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];
          }}
        />
      );
    },
  },
  render(h) {
    return h(
      MulitSelectFormItem,
      {
        props: {
          ...this.$props,
          selectProps: {
            dropdownRender: () => this.$renderDropdownRender(h),
            ...this.$props.selectProps,
          },
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: this.$listeners,
      },
      this.$slots.default,
    );
  },
};
