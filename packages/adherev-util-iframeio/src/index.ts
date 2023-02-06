import { App, Plugin } from 'vue';

import IframeIO from '@baifendian/adhere-util-iframeio';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Wrap = {
  ...IframeIO,
  install: (app: App) => {
    withVue(app, 'IframeIO', IframeIO);

    return app;
  },
};

export default Wrap as typeof Wrap & Plugin;
