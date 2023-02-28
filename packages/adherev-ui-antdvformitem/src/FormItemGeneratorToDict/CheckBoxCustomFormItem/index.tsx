// CheckBoxCustomFormItem
import { CheckboxGroupProps } from 'ant-design-vue/es/checkbox';
import { defineComponent, h } from 'vue';
import { array, object } from 'vue-types';

import { Checkbox } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'CheckBoxCustomFormItem',
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
        value: this.value,
        ...this.checkBoxGroupProps,
        ...this.$attrs,
        onChange: (value) => this.$emit('change', value),
      },
      this.dataSource.map((t) =>
        this.$slots.option({
          data: t,
          item: h(
            Checkbox,
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
