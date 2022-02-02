import Util from '@baifendian/adherev-util';

import DelConfirm, { open } from './delconfirm';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(DelConfirm);

Component.open = open;

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'DelConfirm', Component);
};

export default Component;
