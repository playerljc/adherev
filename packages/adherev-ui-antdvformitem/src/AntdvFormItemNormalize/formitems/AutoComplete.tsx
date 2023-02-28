import { AutoComplete } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap: any = HOC(AutoComplete, {
  props(props, getEl) {
    return assignAttrs(props, Wrap.defaultProps, getEl?.());
  },
});

Wrap.defaultProps = {
  allowClear: true,
  optionFilterProp: 'label',
  filterOption: (input, option) =>
    (option?.label || option?.title)?.toLowerCase?.()?.indexOf?.(input.toLowerCase()) >= 0,
};

export default Wrap;
