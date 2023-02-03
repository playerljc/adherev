import { Slider } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap: any = HOC(Slider, {
  props(props, getEl) {
    return assignAttrs(props, Wrap.defaultProps, getEl?.());
  },
});

Wrap.defaultProps = {};

export default Wrap;
