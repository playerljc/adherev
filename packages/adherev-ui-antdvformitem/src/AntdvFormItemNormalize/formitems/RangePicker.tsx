import { DatePicker } from 'ant-design-vue';

import { assignAttrs, extend } from '../util';

const { RangePicker } = DatePicker;

const Wrap = extend(RangePicker, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(RangePicker, context, Wrap.defaultProps);

    return h(RangePicker, context.data, context.children);
  },
});

Wrap.defaultProps = {
  allowClear: true,
};

export default Wrap;
