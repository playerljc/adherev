// CheckBoxHorizontalFormItem
import { CheckboxGroupProps } from 'ant-design-vue/es/checkbox';
import { defineComponent, h } from 'vue';
import { array, object } from 'vue-types';

import { Checkbox } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'CheckBoxHorizontalFormItem',
  props: {
    checkBoxGroupProps: object<CheckboxGroupProps>().def({}),
    value: array().def([]),
    dataSource: array().def([]),
  },
  emits: ['change'],
  render() {
    return h(
      Checkbox.Group,
      {
        options: this.dataSource,
        value: this.value,
        ...this.checkBoxGroupProps,
        ...this.$attrs,
        onChange: (value) => this.$emit('change', value),
      },
      this.$slots,
    );
  },
});
