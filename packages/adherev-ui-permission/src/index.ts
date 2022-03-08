import { Permission, setPermission, checkPermission, getPermission } from './permission';

import BfdUtil from '@baifendian/adherev-util';
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
  use: (Vue: { use: (arg0: any) => void }) => {
    Vue.use(Component);
    withVue(Vue, 'Permission', Component);
  },
};
