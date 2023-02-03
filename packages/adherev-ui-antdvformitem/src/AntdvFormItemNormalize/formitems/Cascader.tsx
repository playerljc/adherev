import { Cascader } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap = HOC(Cascader, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Cascader, context, Wrap.defaultProps);

    return h(Cascader, context.data, context.children);
  },
});

Wrap.defaultProps = {
  showSearch: {
    filter: (inputValue, path) =>
      path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1),
  },
  allowClear: true,
};

export default Wrap;
