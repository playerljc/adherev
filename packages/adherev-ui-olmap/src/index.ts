import OLMap from './olmap';
import HeatMap from './heatmap';
import GeoLayer from './geolayer';
import * as TitleLayer from './titlelayer';
import Util from './util';
import AnimationManager from './animationmanager';

import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = BfdUtil;

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
  Vue.use(Component.OLMap);

  Vue.use(Component.HeatMap);

  withVue(Vue, 'OLMap', Component);
};

Component.OLMap = withInstall(Component.OLMap);
Component.HeatMap = withInstall(Component.HeatMap);

export default Component;
