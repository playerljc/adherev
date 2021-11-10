import Preferences from '@baifendian/adhere-util-preferences';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

Preferences.isUse = () => true;
Preferences.use = (Vue) => {
  withVue(Vue, 'Preferences', Preferences);
};

export default Preferences;
