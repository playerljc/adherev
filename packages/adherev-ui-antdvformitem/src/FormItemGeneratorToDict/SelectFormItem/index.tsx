import { Select as AntdvSelect } from 'ant-design-vue';

import { Select } from '../../AntdvFormItemNormalize';

const { Option } = AntdvSelect;

export default {
  name: 'SelectFormItem',
  props: {
    selectProps: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: [Number, String],
      default: '',
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
  render(h) {
    return (
      <Select
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
      </Select>
    );
  },
};
