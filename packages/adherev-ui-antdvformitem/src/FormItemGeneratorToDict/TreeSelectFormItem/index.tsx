import { TransferProps } from 'ant-design-vue/es/transfer';
import { defineComponent } from 'vue';
import { array, object } from 'vue-types';

import { TreeSelect } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'TreeSelectFormItem',
  props: {
    transferProps: object<TransferProps>().def({}),
    value: array().def([]),
    dataSource: array<any>().def([]),
  },
  emits: ['change'],
  render() {
    return (
      <TreeSelect
        {...{
          treeData: this.dataSource,
          value: this.value,
          ...this.treeSelectProps,
          ...this.$attrs,
          onChange: (value) => this.$emit('change', value),
        }}
      >
        {this.$slots}
      </TreeSelect>
    );
  },
});
