// transferFormItem
import { TransferProps } from 'ant-design-vue/es/transfer';
import { defineComponent, h } from 'vue';
import { array, object } from 'vue-types';

import { Transfer } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'TransferFormItem',
  props: {
    transferProps: object<TransferProps>().def({}),
    dataSource: array<any>().def([]),
    value: array().def([]),
  },
  emits: ['change'],
  render() {
    return h(
      Transfer,
      {
        dataSource: this.dataSource.map((t) => ({
          key: `${t.value}`,
          title: t.label,
          description: t.label,
          disabled: 'disabled' in t ? t.disabled : false,
        })),
        render: (item) => item.title,
        targetKeys: this.value,
        ...this.transferProps,
        ...this.$attrs,
        onChange: (value) => this.$emit('change', value),
      },
      this.$slots,
    );
  },
});
