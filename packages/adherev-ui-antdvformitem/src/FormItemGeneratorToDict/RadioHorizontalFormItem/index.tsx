// RadioHorizontalFormItem
import { RadioGroupProps } from 'ant-design-vue/es/radio';
import { defineComponent, h } from 'vue';
import { array, number, object, oneOfType, string } from 'vue-types';

import { Radio } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'RadioHorizontalFormItem',
  props: {
    radioGroupProps: object<RadioGroupProps>().def({}),
    value: oneOfType([string(), number()]).def(''),
    dataSource: array<any>().def([]),
  },
  emits: ['change'],
  render() {
    return h(
      Radio.Group,
      {
        value: this.value,
        options: this.dataSource,
        ...this.radioGroupProps,
        ...this.$attrs,
        onChange: (value) => this.$emit('change', value),
      },
      this.$slots,
    );
  },
});
