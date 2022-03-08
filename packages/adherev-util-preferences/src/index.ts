import Preferences from '@baifendian/adhere-util-preferences';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
Preferences.isUse = () => true;
// @ts-ignore
Preferences.use = (Vue: any) => {
  withVue(Vue, 'Preferences', Preferences);
};

export default Preferences;
