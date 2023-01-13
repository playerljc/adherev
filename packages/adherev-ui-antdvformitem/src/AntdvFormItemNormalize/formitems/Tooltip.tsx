import { Tooltip } from 'ant-design-vue';

import { assignAttrs, extend } from '../util';

const Wrap = extend(Tooltip, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Tooltip, context, Wrap.defaultProps);

    return h(Tooltip, context.data, context.children);
  },
});

Wrap.defaultProps = {};

export default Wrap;
