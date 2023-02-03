// ListFormItem
import { ListProps } from 'ant-design-vue/es/list';
import { defineComponent, h } from 'vue';
import { object, string } from 'vue-types';

import { List } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'ListFormItem',
  props: {
    listProps: object<ListProps>().def({}),
    rowKey: string().def('id'),
  },
  emits: ['change'],
  render() {
    return h(
      List,
      {
        pagination: false,
        rowKey: this.rowKey || 'id',
        ...this.listProps,
        ...this.$attrs,
        onChange: (value) => this.$emit('change', value),
      },
      this.$slots,
    );
  },
});
