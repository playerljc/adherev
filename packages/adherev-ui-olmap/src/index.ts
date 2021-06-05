// @ts-ignore
import OLMap from './olmap';
// @ts-ignore
import HeatMap from './heatmap';

import GeoLayer from './geolayer';
import * as TitleLayer from './titlelayer';
import Util from './util';
import AnimationManager from './animationmanager';

// @ts-ignore
import { withInstall } from '../../_util';

const Component = {
  AnimationManager,
  GeoLayer,
  TitleLayer,
  OLMap,
  HeatMap,
  Util,
};

// @ts-ignore
Component.isUse = () => true;

// @ts-ignore
Component.use = (Vue) => {
  // @ts-ignore
  Vue.use(Component.OLMap);
  // @ts-ignore
  Vue.use(Component.HeatMap);
};

Component.OLMap = withInstall(Component.OLMap);
Component.HeatMap = withInstall(Component.HeatMap);

// @ts-ignore
export default Component;
