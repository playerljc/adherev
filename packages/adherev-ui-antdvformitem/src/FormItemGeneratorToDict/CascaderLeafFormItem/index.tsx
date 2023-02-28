import { CascaderProps } from 'ant-design-vue/es/cascader';
import { defineComponent, h } from 'vue';
import { array, object } from 'vue-types';

import { Cascader } from '../../AntdvFormItemNormalize';

export default defineComponent({
  name: 'CascaderLeafFormItem',
  props: {
    cascaderProps: object<CascaderProps>().def({}),
    value: array().def([]),
    dataSource: array().def([]),
  },
  computed: {
    targetDataSource() {
      function loop(nodes) {
        (nodes || []).forEach((node) => {
          node.disabled =
            'children' in node && Array.isArray(node.children) && !!node.children.length;

          loop(node.children);
        });
      }

      const source = JSON.parse(JSON.stringify(this.dataSource));

      loop(source);

      return source;
    },
  },
  emits: ['change'],
  render() {
    return h(
      Cascader,
      {
        value: this.value,
        options: this.targetDataSource,
        ...this.cascaderProps,
        ...this.$attrs,
        onChange: (value) => this.$emit('change', value),
      },
      this.$slots,
    );
  },
});
