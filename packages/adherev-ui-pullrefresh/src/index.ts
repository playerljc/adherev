import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import PullRefresh from './pullrefresh';

const {
  _util: { withVue },
} = BfdUtil;

PullRefresh.install = function (app: App) {
  app.component(Intl.name, Intl);
  app.component(PullRefresh.name, PullRefresh);
  withVue(app, 'PullRefresh', PullRefresh);

  return app;
};

export default PullRefresh as typeof PullRefresh & Plugin;
