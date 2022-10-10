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

const Component: any = {
  AnimationManager,
  GeoLayer,
  TitleLayer,
  OLMap,
  HeatMap,
  Util,
};

Component.OLMap = withInstall(Component.OLMap);
Component.HeatMap = withInstall(Component.HeatMap);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component.OLMap);

  Vue.use(Component.HeatMap);

  withVue(Vue, 'OLMap', Component);
};

export default Component;
