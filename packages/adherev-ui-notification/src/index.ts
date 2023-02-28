import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';

import Notification from './notification';

const {
  _util: { withVue },
} = Util;

Notification.install = function (app: App) {
  withVue(app, 'Notification', Notification);

  return app;
};

export default Notification as typeof Notification & Plugin;
