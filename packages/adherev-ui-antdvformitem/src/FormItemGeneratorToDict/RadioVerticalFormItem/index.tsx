// RadioVerticalFormItem
import { RadioGroupProps } from 'ant-design-vue/es/radio';
import { defineComponent, h } from 'vue';
import { array, number, object, oneOfType, string } from 'vue-types';

import { Radio } from '../../AntdvFormItemNormalize';

const selectorPrefix = 'adherev-ui-antdformitem';

export default defineComponent({
  name: 'RadioVerticalFormItem',
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
        h(
          Radio,
          {
            key: t.value,
            value: t.value,
            disabled: t.disabled,
            class: `${selectorPrefix}-radio-vertical`,
          },
          t.label,
        ),
      ),
    );
  },
});
