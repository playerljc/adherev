import OriginBMap from '@baifendian/adhere-ui-bmap';
import BMapComponent from './bmap';
import { withInstall } from '../../_util';

const BMap = {
  ...OriginBMap,
  BMap: BMapComponent,
};

BMap.isUse = () => true;

BMap.use = (Vue) => {
  Vue.use(BMapComponent);
};

withInstall(BMapComponent);

export default BMap;
