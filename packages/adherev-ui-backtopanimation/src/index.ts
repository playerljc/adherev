import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';

import BackTopAnimation from './backtopanimation';

const {
  _util: { withVue },
} = Util;

BackTopAnimation.install = function (app: App) {
  app.component(BackTopAnimation.name, BackTopAnimation);
  withVue(app, 'BackTopAnimation', BackTopAnimation);

  return app;
};

export default BackTopAnimation as typeof BackTopAnimation & Plugin;
