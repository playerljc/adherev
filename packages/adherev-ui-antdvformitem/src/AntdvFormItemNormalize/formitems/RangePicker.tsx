import { DatePicker } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const { RangePicker } = DatePicker;

const Wrap: any = HOC(RangePicker, {
  props(props, getEl) {
    return assignAttrs(props, Wrap.defaultProps, getEl?.());
  },
});

Wrap.defaultProps = {
  allowClear: true,
};

export default Wrap;
