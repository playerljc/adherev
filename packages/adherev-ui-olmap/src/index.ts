import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import AnimationManager from './animationmanager';
import GeoLayer from './geolayer';
import HeatMap from './heatmap';
import OLMap from './olmap';
import * as TitleLayer from './titlelayer';
import Util from './util';

const {
  _util: { withVue },
} = BfdUtil;

const OLMapWrap = {
  OLMap,
  HeatMap,
  AnimationManager,
  GeoLayer,
  TitleLayer,
  Util,
  install: function (app: App) {
    app.component(OLMap.name, OLMap);
    app.component(HeatMap.name, HeatMap);

    withVue(app, 'OLMap', OLMapWrap);

    return app;
  },
};

export default OLMapWrap as typeof OLMapWrap &
  Plugin & {
    readonly OLMap: typeof OLMap;
    readonly HeatMap: typeof HeatMap;
    readonly AnimationManager: typeof AnimationManager;
    readonly GeoLayer: typeof GeoLayer;
    readonly TitleLayer: typeof TitleLayer;
    readonly Util: typeof Util;
  };
