import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import Surnames from './surnames';

const {
  _util: { withVue },
} = BfdUtil;

Surnames.install = function (app: App) {
  app.component(Surnames.name, Surnames);
  withVue(app, 'Surnames', Surnames);

  return app;
};

export default Surnames as typeof Surnames & Plugin;
