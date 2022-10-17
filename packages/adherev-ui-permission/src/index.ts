import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import BfdUtil from '@baifendian/adherev-util';

import {
  Permission,
  PermissionFun,
  checkPermission,
  getPermission,
  setPermission,
} from './permission';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(Permission);

export default {
  Permission: Component,
  PermissionFun,
  setPermission,
  checkPermission,
  getPermission,
  isUse: () => true,
  use: (Vue: { use: (arg0: any) => void }) => {
    ConditionalRender.isUse() && ConditionalRender.use(Vue);
    Vue.use(Component);
    withVue(Vue, 'Permission', Component);
  },
};
