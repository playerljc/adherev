import Util from '@baifendian/adherev-util';

import ImportantConfirm, { open } from './importantconfirm';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(ImportantConfirm);

Component.open = open;

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'ImportantConfirm', Component);
};

export default Component;
