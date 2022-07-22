import OriginBMap from '@baifendian/adhere-ui-bmap';
import Util from '@baifendian/adherev-util';

import BMapComponent from './bmap';

const {
  _util: { withInstall, withVue },
} = Util;

const BMap: { isUse?(): boolean; use?(Vue: any); BMap: any } = {
  ...OriginBMap,
  BMap: BMapComponent,
};

BMap.isUse = () => true;

BMap.use = (Vue) => {
  Vue.use(BMapComponent);
  withVue(Vue, 'BMap', BMap);
};

withInstall(BMapComponent);

export default BMap;
