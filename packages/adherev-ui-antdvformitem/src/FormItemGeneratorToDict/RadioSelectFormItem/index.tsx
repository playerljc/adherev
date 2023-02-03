import { Radio, Space } from '../../AntdvFormItemNormalize';
import SelectFormItem from '../SelectFormItem';

export default {
  name: 'RadioSelectFormItem',
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
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    $renderDropdownRender(h) {
      const data = this.inputValue
        ? this.dataSource.filter((t) => t.label.indexOf(this.inputValue) !== -1)
        : this.dataSource;

      return (
        <Radio.Group
          style="padding: 10px;"
          value={this.value}
          onChange={(e) => this.$emit('change', e.target.value)}
        >
          <Space direction="vertical">
            {data.map((t) => (
              <Radio key={t.value} value={t.value} disabled={t.disabled}>
                {t.label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      );
    },
  },
  render(h) {
    return h(
      SelectFormItem,
      {
        props: {
          ...this.$props,
          selectProps: {
            dropdownRender: () => this.$renderDropdownRender(h),
            filterOption: () => {
              return false;
            },
            ...this.$props.selectProps,
          },
        },
        attrs: this.$attrs,
        scopedSlots: this.$scopedSlots,
        on: {
          ...this.$listeners,
          search: (inputValue) => {
            this.inputValue = inputValue;
          },
          change: (val) => {
            console.log('change', val);
            this.$emit('change', val);

            if (!val) this.inputValue = '';
          },
        },
      },
      this.$slots.default,
    );
  },
};
