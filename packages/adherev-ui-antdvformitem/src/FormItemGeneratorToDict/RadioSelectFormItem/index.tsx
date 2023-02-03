import { SelectProps } from 'ant-design-vue/es/select';
import { defineComponent, h } from 'vue';
import { array, number, object, oneOfType, string } from 'vue-types';

import { Radio, Space } from '../../AntdvFormItemNormalize';
import SelectFormItem from '../SelectFormItem';

export default defineComponent({
  name: 'RadioSelectFormItem',
  props: {
    selectProps: object<SelectProps>().def({}),
    value: oneOfType([string(), number()]).def(''),
    dataSource: array<any>().def([]),
  },
  emits: ['change'],
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    $renderDropdownRender() {
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
  render() {
    return h(
      SelectFormItem,
      {
        ...this.$props,
        ...this.$attrs,
        selectProps: {
          dropdownRender: () => this.$renderDropdownRender(),
          filterOption: () => {
            return false;
          },
          ...this.$props.selectProps,
        },
        onSearch: (inputValue) => {
          this.inputValue = inputValue;
        },
        onChange: (val) => {
          this.$emit('change', val);

          if (!val) this.inputValue = '';
        },
      },
      this.$slots,
    );
  },
});
