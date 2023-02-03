// RadioCustomFormItem
import { RadioGroupProps } from 'ant-design-vue/es/radio';
import { defineComponent, h } from 'vue';
import { array, number, object, oneOfType, string } from 'vue-types';

import { Radio } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'RadioCustomFormItem',
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
        ...this.radioGroupProps,
        ...this.$attrs,
        onChange: (value) => this.$emit('change', value),
      },
      this.dataSource.map((t) =>
        this.$slots?.option?.({
          data: t,
          item: h(
            Radio,
            {
              key: t.value,
              value: t.value,
              disabled: t.disabled,
            },
            t.label,
          ),
        }),
      ),
    );
  },
});
