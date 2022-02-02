import BackTopAnimation from './backtopanimation';
import Util from '@baifendian/adherev-util';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(BackTopAnimation);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'BackTopAnimation', Component);
};

export default Component;
