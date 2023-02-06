import { App, Plugin } from 'vue';

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
  _util: { withVue },
} = BfdUtil;

const PermissionWrap = {
  Permission,
  PermissionFun,
  setPermission,
  checkPermission,
  getPermission,
  install: function (app: App) {
    app.component(ConditionalRender.name, ConditionalRender);
    app.component(Permission.name, Permission);
    withVue(app, 'Permission', Permission);

    return app;
  },
};

export default PermissionWrap as typeof PermissionWrap &
  Plugin & {
    readonly Permission: typeof Permission;
    readonly PermissionFun: typeof PermissionFun;
    readonly checkPermission: typeof checkPermission;
    readonly getPermission: typeof getPermission;
  };
