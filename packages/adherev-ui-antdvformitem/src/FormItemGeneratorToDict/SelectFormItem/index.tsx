import { SelectProps } from 'ant-design-vue/es/select';
import { defineComponent } from 'vue';
import { array, number, object, oneOfType, string } from 'vue-types';

import { Select } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'SelectFormItem',
  props: {
    selectProps: object<SelectProps>().def({}),
    value: oneOfType([string(), number()]).def(''),
    dataSource: array<any>().def([]),
  },
  emits: ['change'],
  render() {
    return (
      <Select
        {...{
          ...this.selectProps,
          ...this.$attrs,
          options: this.dataSource,
          value: this.value,
          onChange: (value) => this.$emit('change', value),
        }}
      />
    );
  },
});
