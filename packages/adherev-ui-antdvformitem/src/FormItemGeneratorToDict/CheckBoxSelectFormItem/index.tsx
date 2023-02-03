import { Checkbox, Space } from '../../AntdvFormItemNormalize';
import MulitSelectFormItem from '../MulitSelectFormItem';

export default {
  name: 'CheckBoxSelectFormItem',
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
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    $renderDropdownRender(h) {
      const data = this.inputValue
        ? this.dataSource.filter((t) => t.label.startsWith(this.inputValue))
        : this.dataSource;

      return (
        <Checkbox.Group
          style="padding: 10px;"
          value={this.value}
          onChange={(values) => {
            this.$emit('change', values);
          }}
        >
          <Space direction="vertical">
            {data.map((t) => (
              <Checkbox key={t.value} value={t.value} disabled={t.disabled}>
                {t.label}
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
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
            filterOption: (inputValue) => {
              this.inputValue = inputValue;

              return false;
            },
            ...this.$props.selectProps,
          },
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: {
          ...this.$listeners,
          change: (val) => {
            this.$emit('change', val);

            if (!val || (Array.isArray(val) && !val.length)) this.inputValue = '';
          },
        },
      },
      this.$slots.default,
    );
  },
};
