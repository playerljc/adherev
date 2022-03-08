import OriginBMap from '@baifendian/adhere-ui-bmap';
import Util from '@baifendian/adherev-util';

import BMapComponent from './bmap';

import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

// @ts-ignore
const BMap: IComponent = {
  ...OriginBMap,
  BMap: BMapComponent,
};

BMap.isUse = () => true;

BMap.use = (Vue: any) => {
  Vue.use(BMapComponent);
  withVue(Vue, 'BMap', BMap);
};

withInstall(BMapComponent);

export default BMap;
