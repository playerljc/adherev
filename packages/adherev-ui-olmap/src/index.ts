import OLMap from './olmap';

import HeatMap from './heatmap';

import GeoLayer from './geolayer';
import * as TitleLayer from './titlelayer';
import Util from './util';
import AnimationManager from './animationmanager';

import { withInstall } from '../../_util';

const Component = {
  AnimationManager,
  GeoLayer,
  TitleLayer,
  OLMap,
  HeatMap,
  Util,
};

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component.OLMap);

  Vue.use(Component.HeatMap);
};

Component.OLMap = withInstall(Component.OLMap);
Component.HeatMap = withInstall(Component.HeatMap);

export default Component;
