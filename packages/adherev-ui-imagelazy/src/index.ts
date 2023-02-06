import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';

import ImageLazy from './imagelazy';

const {
  _util: { withVue },
} = Util;

ImageLazy.install = function (app: App) {
  app.component(ImageLazy.name, ImageLazy);
  withVue(app, 'ImageLazy', ImageLazy);

  return app;
};

export default ImageLazy as typeof ImageLazy & Plugin;
