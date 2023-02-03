import { InputNumber } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap = HOC(InputNumber, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(InputNumber, context, Wrap.defaultProps);

    return h(InputNumber, context.data, context.children);
  },
});

Wrap.defaultProps = {
  precision: 2,
};

export default Wrap;
