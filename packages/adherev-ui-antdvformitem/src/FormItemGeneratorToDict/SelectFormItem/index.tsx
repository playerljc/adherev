import { Select as AntdvSelect } from 'ant-design-vue';

import { Select } from '../../AntdvFormItemNormalize';

const { Option } = AntdvSelect;

export default {
  name: 'SelectFormItem',
  emits: ['change'],
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
  computed: {
    targetValue() {
      if (this.value === null || this.value === undefined || this.value === '') return '';

      return this.dataSource?.find?.((t) => t.value === this.value) ? this.value : '';
    },
  },
  watch: {
    value(value) {
      if (value === null || value === undefined) {
        this.$emit('change', '');
        return;
      }

      if (!this.dataSource?.find?.((t) => t.value === value)) {
        this.$emit('change', '');
      }
    },
  },
  render(h) {
    return (
      <Select
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
      </Select>
    );
  },
};
