import SwipeOut from './swipeout';
import BfdUtil from '@baifendian/adherev-util';

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
