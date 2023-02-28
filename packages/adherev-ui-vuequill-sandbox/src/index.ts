import { App } from 'vue';

import Util from '@baifendian/adherev-util';

import VueQuillSandbox from './vueQuillSandbox';

const {
  _util: { withVue },
} = Util;

VueQuillSandbox.install = function (app: App) {
  app.component(VueQuillSandbox.name, VueQuillSandbox);
  withVue(app, 'VueQuillSandbox', VueQuillSandbox);

  return app;
};

export default VueQuillSandbox as typeof VueQuillSandbox & Plugin;
