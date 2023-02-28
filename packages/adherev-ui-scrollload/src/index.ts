import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import ScrollLoad, { EMPTY, ERROR, NORMAL } from './scrollload';

const {
  _util: { withVue },
} = BfdUtil;

ScrollLoad.ERROR = ERROR;
ScrollLoad.EMPTY = EMPTY;
ScrollLoad.NORMAL = NORMAL;
ScrollLoad.install = function (app: App) {
  app.component(Intl.name, Intl);
  app.component(ScrollLoad.name, ScrollLoad);
  withVue(app, 'ScrollLoad', ScrollLoad);

  return app;
};

export default ScrollLoad as typeof ScrollLoad &
  Plugin & {
    readonly NORMAL: typeof NORMAL;
    readonly EMPTY: typeof EMPTY;
    readonly ERROR: typeof ERROR;
  };
