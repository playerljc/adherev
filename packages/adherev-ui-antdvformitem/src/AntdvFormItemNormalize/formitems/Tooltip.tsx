import { Tooltip } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap: any = HOC(Tooltip, {
  props(props, getEl) {
    return assignAttrs(props, Wrap.defaultProps, getEl?.());
  },
});

Wrap.defaultProps = {};

export default Wrap;
