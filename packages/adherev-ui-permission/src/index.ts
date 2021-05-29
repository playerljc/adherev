// @ts-ignore
import { Permission, setPermission, checkPermission, getPermission } from './permission';
// @ts-ignore
import { withInstall } from '../../_util';

const Component = withInstall(Permission);

export default {
  Permission: Component,
  setPermission,
  checkPermission,
  getPermission,
  isUse: () => true,
  use: (Vue) => Vue.use(Component),
};
