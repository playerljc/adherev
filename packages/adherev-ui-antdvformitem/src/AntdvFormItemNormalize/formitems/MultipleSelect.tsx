import { Select } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap = HOC(Select, {
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
  mode: 'multiple',
  filterOption: (input, option) =>
    option.componentOptions.children[0].text.toLowerCase().includes(input.toLowerCase()),
};

export default Wrap;
