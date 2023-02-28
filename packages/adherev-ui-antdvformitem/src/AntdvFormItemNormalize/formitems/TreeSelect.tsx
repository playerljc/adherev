import { TreeSelect } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap: any = HOC(TreeSelect, {
  props(props, getEl) {
    return assignAttrs(props, Wrap.defaultProps, getEl?.());
  },
});

Wrap.defaultProps = {
  showSearch: true,
  allowClear: true,
  treeNodeFilterProp: 'title',
};

export default Wrap;
