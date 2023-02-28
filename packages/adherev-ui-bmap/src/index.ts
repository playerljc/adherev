import { App, Plugin } from 'vue';

import OriginBMap from '@baifendian/adhere-ui-bmap';
import Util from '@baifendian/adherev-util';

import BMap from './bmap';

const {
  _util: { withVue },
} = Util;

BMap.init = (ak) =>
  new Promise((resolve) => {
    OriginBMap(ak).then((modules) =>
      resolve({
        ...(modules as any),
        BMap,
      }),
    );
  });

BMap.install = function (app: App) {
  app.component(BMap.name, BMap);
  withVue(app, 'BMap', BMap);

  return app;
};

export default BMap as typeof BMap & Plugin;
