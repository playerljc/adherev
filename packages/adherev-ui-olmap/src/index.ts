import BfdUtil from '@baifendian/adherev-util';

import AnimationManager from './animationmanager';
import GeoLayer from './geolayer';
import HeatMap from './heatmap';
import OLMap from './olmap';
import * as TitleLayer from './titlelayer';
import Util from './util';

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
