import { Slider } from 'ant-design-vue';
import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';

import FontSizeSetting from './fontsizesetting';

const {
  _util: { withVue },
} = Util;

FontSizeSetting.install = function (app: App) {
  app.component(Slider.name, Slider);
  app.component(FontSizeSetting.name, FontSizeSetting);
  withVue(app, 'FontSizeSetting', FontSizeSetting);

  return app;
};

export default FontSizeSetting as typeof FontSizeSetting & Plugin;
