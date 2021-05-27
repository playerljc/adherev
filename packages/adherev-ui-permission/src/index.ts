// @ts-ignore
import { Permission, setPermission, checkPermission, getPermission } from './permission';
// @ts-ignore
import { withInstall } from '../../_util';

export default {
  Permission: withInstall(Permission),
  setPermission,
  checkPermission,
  getPermission,
};
