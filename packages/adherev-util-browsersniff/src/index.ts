import Browsersniff from '@baifendian/adhere-util-browsersniff';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Component: any = Browsersniff;

Component.isUse = () => true;
Component.use = (Vue) => {
  withVue(Vue, 'Browsersniff', Component);
};

export default Component;
