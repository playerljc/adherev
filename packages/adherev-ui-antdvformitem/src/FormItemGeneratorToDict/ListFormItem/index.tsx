// ListFormItem
import { List } from '../../AntdvFormItemNormalize';

export default {
  name: 'ListFormItem',
  props: {
    listProps: {
      type: Object,
      default: () => ({}),
    },
    rowKey: {
      type: String,
      default: 'id',
    },
  },
  render(h) {
    return h(
      List,
      {
        props: {
          pagination: false,
          rowKey: this.rowKey || 'id',
          ...this.listProps,
        },
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots,
      },
      this.$slots.default,
    );
  },
};
