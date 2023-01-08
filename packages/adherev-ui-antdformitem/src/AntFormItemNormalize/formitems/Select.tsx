import { Select } from 'ant-design-vue';

import { assignAttrs, extend } from '../util';

const Wrap = extend(Select, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Select, context, Wrap.defaultProps);

    return h(Select, context.data, context.children);
  },
});

Wrap.defaultProps = {
  allowClear: true,
  showSearch: true,
  filterOption: (input, option) =>
    option.componentOptions.children[0].text.toLowerCase().includes(input.toLowerCase()),
};

export default Wrap;
