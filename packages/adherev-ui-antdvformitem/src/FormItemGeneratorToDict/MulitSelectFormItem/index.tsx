import { Select as AntdvSelect } from 'ant-design-vue';

import { MultipleSelect } from '../../AntdvFormItemNormalize';

const { Option } = AntdvSelect;

export default {
  name: 'MulitSelectFormItem',
  emits: ['change'],
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
  computed: {
    targetValue() {
      if (!Array.isArray(this.value)) return [];

      return this.value.filter((_value) => this.dataSource?.find((t) => t.value === _value));
    },
  },
  watch: {
    value(value) {
      if (!Array.isArray(value)) {
        this.$emit('change', []);
        return;
      }

      const filterValue = value.filter((_value) =>
        this.dataSource?.find((t) => t.value === _value),
      );

      if (filterValue.length !== value.length) {
        this.$emit('change', filterValue);
      }
    },
  },
  render(h) {
    return (
      <MultipleSelect
        {...{
          props: {
            ...this.selectProps,
            value: this.targetValue,
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
