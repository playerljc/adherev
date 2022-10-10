import Util from '@baifendian/adherev-util';
import Resource from '@baifendian/adherev-util-resource';

import BackTopAnimation from './backtopanimation';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(BackTopAnimation);

Component.isUse = () => true;

Component.use = (Vue) => {
  if ((Resource as any).isUse()) {
    (Resource as any).use(Vue);
  }

  Vue.use(Component);
  withVue(Vue, 'BackTopAnimation', Component);
};

export default Component;
