import { App, Plugin } from 'vue';

import Polygonselection from '@baifendian/adhere-ui-polygonselection';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const PolygonSelectionWrap: typeof Polygonselection & {
  install?: (app: App) => App;
} = Polygonselection;

PolygonSelectionWrap.install = (app: App) => {
  withVue(app, 'Polygonselection', Polygonselection);

  return app;
};

export default PolygonSelectionWrap as typeof PolygonSelectionWrap & Plugin;
