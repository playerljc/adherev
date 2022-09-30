import BfdUtil from '@baifendian/adherev-util';

import SwipeOut from './swipeout';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(SwipeOut);
Component.isUse = () => true;
Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'SwipeOut', Component);
};

export default Component;
