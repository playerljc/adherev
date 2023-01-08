import { TreeSelect } from 'ant-design-vue';

import { assignAttrs, extend } from '../util';

const Wrap = extend(TreeSelect, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(TreeSelect, context, Wrap.defaultProps);

    return h(TreeSelect, context.data, context.children);
  },
});

Wrap.defaultProps = {};

export default Wrap;
