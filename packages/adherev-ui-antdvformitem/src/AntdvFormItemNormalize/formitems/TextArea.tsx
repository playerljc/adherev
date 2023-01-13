import { Input } from 'ant-design-vue';

import { assignAttrs, extend } from '../util';

const Wrap = extend(Input.TextArea, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Input.TextArea, context, Wrap.defaultProps);

    return h(Input.TextArea, context.data, context.children);
  },
});

Wrap.defaultProps = {
  allowClear: true,
  maxLength: 1000,
};

export default Wrap;
