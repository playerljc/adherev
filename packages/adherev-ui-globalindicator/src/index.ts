import GlobalIndicator from './globalindicator';
import Util from '@baifendian/adherev-util';
const {
  _util: { withVue },
} = Util;

GlobalIndicator.isUse = () => true;
GlobalIndicator.use = (Vue) => {
  withVue(Vue, 'GlobalIndicator', GlobalIndicator);
};

export default GlobalIndicator;
