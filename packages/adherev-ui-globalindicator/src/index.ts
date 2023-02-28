import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';

import GlobalIndicator from './globalindicator';

const {
  _util: { withVue },
} = Util;

GlobalIndicator.install = function (app: App) {
  withVue(app, 'GlobalIndicator', GlobalIndicator);

  return app;
};

export default GlobalIndicator as typeof GlobalIndicator & Plugin;
