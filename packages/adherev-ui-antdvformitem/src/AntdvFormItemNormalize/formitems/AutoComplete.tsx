import { AutoComplete } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap = HOC(AutoComplete, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(AutoComplete, context, Wrap.defaultProps);

    return h(AutoComplete, context.data, context.children);
  },
});

Wrap.defaultProps = {
  allowClear: true,
  filterOption: (input, option) =>
    option.componentOptions.children[0].text.toLowerCase().includes(input.toLowerCase()),
};

export default Wrap;
