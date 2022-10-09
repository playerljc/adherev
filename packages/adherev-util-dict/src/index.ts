import Dict from '@baifendian/adhere-util-dict';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Component: any = Dict;

Component.isUse = () => true;

Component.use = (Vue) => {
  withVue(Vue, 'Dict', Component);
};

export default Component;
