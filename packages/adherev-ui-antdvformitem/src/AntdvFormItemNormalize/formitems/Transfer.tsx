import { Transfer } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap: any = HOC(Transfer, {
  props(props, getEl) {
    return assignAttrs(props, Wrap.defaultProps, getEl?.());
  },
});

Wrap.defaultProps = {
  showSearch: true,
};

export default Wrap;
