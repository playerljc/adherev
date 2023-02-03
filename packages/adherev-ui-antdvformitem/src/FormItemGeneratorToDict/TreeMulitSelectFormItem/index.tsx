import { defineComponent } from 'vue';
import { array } from 'vue-types';

import { TreeSelect } from '../../AntdvFormItemNormalize';
import TreeSelectFormItem from '../TreeSelectFormItem';

export default defineComponent({
  name: 'TreeMulitSelectFormItem',
  mixins: [TreeSelectFormItem],
  props: {
    value: array().def([]),
  },
  emits: ['change'],
  render() {
    return (
      <TreeSelect
        {...{
          multiple: true,
          treeCheckable: true,
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
