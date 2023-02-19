import { App, Plugin } from 'vue';

import NotNull from '@baifendian/adhere-util-notnull';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const NotNullWrap: typeof NotNull & {
  install?: (app: App) => App
} = NotNull;

NotNullWrap.install = (app: App) => {
  withVue(app, 'NotNull', NotNull);

  return app;
};

export default NotNullWrap as typeof NotNullWrap & Plugin;
