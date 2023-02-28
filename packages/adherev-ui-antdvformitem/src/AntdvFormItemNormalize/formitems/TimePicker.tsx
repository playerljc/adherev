import { TimePicker } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap: any = HOC(TimePicker, {
  props(props, getEl) {
    return assignAttrs(props, Wrap.defaultProps, getEl?.());
  },
});

Wrap.defaultProps = {
  allowClear: true,
};

export default Wrap;
