import { Input } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap: any = HOC(Input, {
  props(props, getEl) {
    return assignAttrs(props, Wrap.defaultProps, getEl?.());
  },
});

Wrap.defaultProps = {
  allowClear: true,
  maxlength: 1000,
  showCount: true,
};

export default Wrap;
