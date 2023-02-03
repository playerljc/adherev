import { Mentions } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap = HOC(Mentions, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Mentions, context, Wrap.defaultProps);

    return h(Mentions, context.data, context.children);
  },
});

Wrap.defaultProps = {};

export default Wrap;
