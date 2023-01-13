import { Cascader } from 'ant-design-vue';

import { assignAttrs, extend } from '../util';

const Wrap = extend(Cascader, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Cascader, context, Wrap.defaultProps);

    return h(Cascader, context.data, context.children);
  },
});

Wrap.defaultProps = {
  allowClear: true,
};

export default Wrap;
