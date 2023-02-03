import { Tooltip } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap = HOC(Tooltip, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Tooltip, context, Wrap.defaultProps);

    return h(Tooltip, context.data, context.children);
  },
});

Wrap.defaultProps = {};

export default Wrap;
