import { Input } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap = HOC(Input, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Input, context, Wrap.defaultProps);

    return h(Input, context.data, context.children);
  },
});

Wrap.defaultProps = {
  allowClear: true,
  maxLength: 1000,
};

export default Wrap;
