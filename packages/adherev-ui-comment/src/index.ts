import Util from '@baifendian/adherev-util';

import BackTopAnimation from './backtopanimation';

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
