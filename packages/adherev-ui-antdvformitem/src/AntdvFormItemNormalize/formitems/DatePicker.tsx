import { DatePicker } from 'ant-design-vue';

import { assignAttrs, extend } from '../util';

const Wrap = extend(DatePicker, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(DatePicker, context, Wrap.defaultProps);

    return h(DatePicker, context.data, context.children);
  },
});

Wrap.defaultProps = {
  allowClear: true,
};

export default Wrap;
