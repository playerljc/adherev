import { Slider } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap = HOC(Slider, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Slider, context, Wrap.defaultProps);

    return h(Slider, context.data, context.children);
  },
});

Wrap.defaultProps = {};

export default Wrap;
