import { TreeSelect } from '../../AntFormItemNormalize';

export default {
  name: 'TreeSelectFormItem',
  props: {
    treeSelectProps: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: String,
      default: () => '',
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
  render(h) {
    return (
      <TreeSelect
        {...{
          props: {
            ...this.treeSelectProps,
            treeData: this.dataSource,
            value: this.value,
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
