import { TimePicker } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap = HOC(TimePicker, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(TimePicker, context, Wrap.defaultProps);

    return h(TimePicker, context.data, context.children);
  },
});

Wrap.defaultProps = {
  allowClear: true,
};

export default Wrap;
