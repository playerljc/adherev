import { App, Plugin } from 'vue';

import StickUpLayout from '@baifendian/adherev-ui-stickuplayout';
import Util from '@baifendian/adherev-util';

import CascadeCompared from './cascadecompared';

const {
  _util: { withVue },
} = Util;

CascadeCompared.install = function (app: App) {
  app.use(StickUpLayout);
  app.component(CascadeCompared.name, CascadeCompared);
  withVue(app, 'CascadeCompared', CascadeCompared);

  return app;
};

export default CascadeCompared as typeof CascadeCompared & Plugin;
