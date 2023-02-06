import { App, Plugin } from 'vue';

import Polygonselection from '@baifendian/adhere-ui-polygonselection';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

(Polygonselection as any).install = function (app: App) {
  withVue(app, 'Polygonselection', Polygonselection);

  return app;
};

export default Polygonselection as typeof Polygonselection & Plugin;
