import { App, Plugin } from 'vue';

import Browsersniff from '@baifendian/adhere-util-browsersniff';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const BrowsersniffWrap: typeof Browsersniff & {
  install?: (app: App) => App
} = Browsersniff;

BrowsersniffWrap.install = (app: App) => {
  withVue(app, 'Browsersniff', Browsersniff);

  return app;
}

export default BrowsersniffWrap as typeof BrowsersniffWrap & Plugin;
