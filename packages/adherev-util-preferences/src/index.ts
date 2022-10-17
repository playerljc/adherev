import Preferences from '@baifendian/adhere-util-preferences';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Component: any = Preferences;

Component.isUse = () => true;

Component.use = (Vue) => {
  withVue(Vue, 'Preferences', Component);
};

export default Component;
