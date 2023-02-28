import { SelectProps } from 'ant-design-vue/es/select';
import { defineComponent } from 'vue';
import { array, object } from 'vue-types';

import { MultipleSelect } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'MulitSelectFormItem',
  props: {
    selectProps: object<SelectProps>().def({}),
    value: array().def([]),
    dataSource: array<any>().def([]),
  },
  emits: ['change'],
  render() {
    return (
      <MultipleSelect
        {...{
          value: this.value,
          ...this.selectProps,
          ...this.$attrs,
          options: this.dataSource,
          onChange: (value) => this.$emit('change', value),
        }}
      />
    );
  },
});
