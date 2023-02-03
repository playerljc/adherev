import { DatePicker } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const { RangePicker } = DatePicker;

const Wrap = HOC(RangePicker, {
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
