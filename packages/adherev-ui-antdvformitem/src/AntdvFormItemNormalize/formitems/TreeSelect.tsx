import { TreeSelect } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap = HOC(TreeSelect, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(TreeSelect, context, Wrap.defaultProps);

    return h(TreeSelect, context.data, context.children);
  },
});

Wrap.defaultProps = {
  showSearch: true,
  allowClear: true,
  treeNodeFilterProp: 'title',
};

export default Wrap;
