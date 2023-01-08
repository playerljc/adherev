import { Mentions } from 'ant-design-vue';

import { assignAttrs, extend } from '../util';

const Wrap = extend(Mentions, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Mentions, context, Wrap.defaultProps);

    return h(Mentions, context.data, context.children);
  },
});

Wrap.defaultProps = {};

export default Wrap;
