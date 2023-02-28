import { InputNumber } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap: any = HOC(InputNumber, {
  props(props, getEl) {
    return assignAttrs(props, Wrap.defaultProps, getEl?.());
  },
});

Wrap.defaultProps = {
  precision: 2,
};

export default Wrap;
