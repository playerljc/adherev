import { App, Plugin } from 'vue';

import IframeIO from '@baifendian/adhere-util-iframeio';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const IframeIOWrap: typeof IframeIO & {
  install?: (app: App) => App
} = IframeIO;

IframeIOWrap.install = (app: App) => {
  withVue(app, 'IframeIO', IframeIO);

  return app;
}

export default IframeIOWrap as typeof IframeIOWrap & Plugin;
