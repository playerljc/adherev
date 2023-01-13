import { Slider } from 'ant-design-vue';

import { assignAttrs, extend } from '../util';

const Wrap = extend(Slider, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Slider, context, Wrap.defaultProps);

    return h(Slider, context.data, context.children);
  },
});

Wrap.defaultProps = {};

export default Wrap;
