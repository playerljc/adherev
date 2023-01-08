import { AutoComplete } from 'ant-design-vue';

import { assignAttrs, extend } from '../util';

const Wrap = extend(AutoComplete, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(AutoComplete, context, Wrap.defaultProps);

    return h(AutoComplete, context.data, context.children);
  },
});

Wrap.defaultProps = {
  allowClear: true,
};

export default Wrap;
