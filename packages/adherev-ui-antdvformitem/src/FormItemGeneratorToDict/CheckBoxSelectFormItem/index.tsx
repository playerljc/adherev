import { SelectProps } from 'ant-design-vue/es/select';
import { defineComponent, h } from 'vue';
import { array, object } from 'vue-types';

import { Checkbox, Space } from '../../AntdvFormItemNormalize';
import MulitSelectFormItem from '../MulitSelectFormItem';

export default defineComponent({
  name: 'CheckBoxSelectFormItem',
  props: {
    selectProps: object<SelectProps>().def({}),
    value: array().def([]),
    dataSource: array().def([]),
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
  render() {
    return h(
      MulitSelectFormItem,
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

          if (!val || (Array.isArray(val) && !val.length)) this.inputValue = '';
        },
      },
      this.$slots,
    );
  },
});
