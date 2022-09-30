import BfdUtil from '@baifendian/adherev-util';

import { Permission, checkPermission, getPermission, setPermission } from './permission';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(Permission);

export default {
  Permission: Component,
  setPermission,
  checkPermission,
  getPermission,
  isUse: () => true,
  use: (Vue) => {
    Vue.use(Component);
    withVue(Vue, 'Permission', Component);
  },
};
