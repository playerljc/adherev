import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import SwipeOut from './swipeout';

const {
  _util: { withVue },
} = BfdUtil;

SwipeOut.install = function (app: App) {
  app.component(SwipeOut.name, SwipeOut);
  withVue(app, 'SwipeOut', SwipeOut);

  return app;
};

export default SwipeOut as typeof SwipeOut & Plugin;
