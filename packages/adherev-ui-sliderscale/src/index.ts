import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import SliderScale from './sliderscale';

const {
  _util: { withVue },
} = BfdUtil;

SliderScale.install = function (app: App) {
  app.component(SliderScale.name, SliderScale);
  withVue(app, 'SliderScale', SliderScale);

  return app;
};

export default SliderScale as typeof SliderScale & Plugin;
