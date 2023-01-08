import { TimePicker } from 'ant-design-vue';

import { assignAttrs, extend } from '../util';

const Wrap = extend(TimePicker, {
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
