import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import Spin from './spin';

const {
  _util: { withVue },
} = BfdUtil;

Spin.install = function (app: App) {
  app.component(Spin.name, Spin);
  withVue(app, 'Spin', Spin);

  return app;
};

export default Spin as typeof Spin & Plugin;
