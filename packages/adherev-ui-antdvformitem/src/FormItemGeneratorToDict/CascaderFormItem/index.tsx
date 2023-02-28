import { CascaderProps } from 'ant-design-vue/es/cascader';
import { defineComponent, h } from 'vue';
import { array, object } from 'vue-types';

import { Cascader } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'CascaderFormItem',
  props: {
    cascaderProps: object<CascaderProps>().def({}),
    value: array().def([]),
    dataSource: array().def([]),
  },
  emits: ['change'],
  render() {
    return h(
      Cascader,
      {
        value: this.value,
        options: this.dataSource,
        ...this.cascaderProps,
        ...this.$attrs,
        onChange: (value) => this.$emit('change', value),
      },
      this.$slots,
    );
  },
});
