import Util from '@baifendian/adherev-util';

import Teleport from './teleport';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(Teleport);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'Teleport', Component);
};

export default Component;
