import { TreeSelect } from '../../AntdvFormItemNormalize';
import TreeSelectFormItem from '../TreeSelectFormItem';

export default {
  name: 'TreeMulitSelectFormItem',
  mixins: [TreeSelectFormItem],
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  render(h) {
    return (
      <TreeSelect
        {...{
          props: {
            multiple: true,
            treeCheckable: true,
            treeData: this.dataSource,
            value: this.value,
            ...this.treeSelectProps,
          },
          attrs: this.$attrs,
          scopedSlots: this.$scopedSlots,
          on: this.$listeners,
        }}
      >
        {this.$slots.default}
      </TreeSelect>
    );
  },
};
