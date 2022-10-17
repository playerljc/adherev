import OriginBMap from '@baifendian/adhere-ui-bmap';
import Util from '@baifendian/adherev-util';

import BMapComponent from './bmap';

const {
  _util: { withInstall, withVue },
} = Util;

withInstall(BMapComponent);

const Wrap = (ak) =>
  new Promise((resolve) => {
    OriginBMap(ak).then((modules) =>
      resolve({
        ...(modules as any),
        BMap: BMapComponent,
      }),
    );
  });

Wrap.isUse = () => true;

Wrap.use = (Vue) => {
  Vue.use(BMapComponent);
  withVue(Vue, 'BMap', BMapComponent);
};

export default Wrap;
