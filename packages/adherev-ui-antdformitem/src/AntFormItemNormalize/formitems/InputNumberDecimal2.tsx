import { InputNumber } from 'ant-design-vue';

import { assignAttrs, extend } from '../util';

const Wrap = extend(InputNumber, {
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
