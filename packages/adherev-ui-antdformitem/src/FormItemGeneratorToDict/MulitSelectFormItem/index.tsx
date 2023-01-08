import { Select as AntdvSelect } from 'ant-design-vue';

import { MultipleSelect } from '../../AntFormItemNormalize';

const { Option } = AntdvSelect;

export default {
  name: 'MulitSelectFormItem',
  props: {
    selectProps: {
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
  render(h) {
    return (
      <MultipleSelect
        {...{
          props: {
            ...this.selectProps,
            value: this.value,
          },
          attrs: this.$attrs,
          scopedSlots: this.$scopedSlots,
          on: this.$listeners,
        }}
      >
        {this.dataSource.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </MultipleSelect>
    );
  },
};
