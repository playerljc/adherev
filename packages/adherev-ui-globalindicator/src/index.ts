import Util from '@baifendian/adherev-util';

import GlobalIndicator from './globalindicator';

const {
  _util: { withVue },
} = Util;

GlobalIndicator.isUse = () => true;

GlobalIndicator.use = (Vue) => {
  withVue(Vue, 'GlobalIndicator', GlobalIndicator);
};

export default GlobalIndicator;
