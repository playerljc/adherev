import BfdUtil from '@baifendian/adherev-util';

import AnimationManager from './animationmanager';
import GeoLayer from './geolayer';
import HeatMap from './heatmap';
import OLMap from './olmap';
import * as TitleLayer from './titlelayer';
import { IComponent } from './types';
import Util from './util';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component: IComponent = {
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

  withVue(Vue, 'OLMap', Component);
};

Component.OLMap = withInstall(Component.OLMap);
Component.HeatMap = withInstall(Component.HeatMap);

export default Component;
