import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';

import ContourBlock from './contourblock';

const {
  _util: { withVue },
} = Util;

ContourBlock.install = function (app: App) {
  app.component(ContourBlock.name, ContourBlock);
  withVue(app, 'ContourBlock', ContourBlock);

  return app;
};

export default ContourBlock as typeof ContourBlock & Plugin;
