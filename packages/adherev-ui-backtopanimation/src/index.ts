import Util from '@baifendian/adherev-util';

import BackTopAnimation from './backtopanimation';
import { Component } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: Component = withInstall(BackTopAnimation);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Component);
  withVue(Vue, 'BackTopAnimation', Component);
};

export default Component;
