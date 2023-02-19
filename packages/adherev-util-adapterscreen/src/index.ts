import { App, Plugin } from 'vue';

import AdapterScreen from '@baifendian/adhere-util-adapterscreen';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const AdapterScreenWrap: typeof AdapterScreen & {
  install?: (app: App) => App;
} = AdapterScreen;

AdapterScreenWrap.install = (app: App) => {
  withVue(app, 'AdapterScreen', AdapterScreen);

  return app;
};

export default AdapterScreenWrap as typeof AdapterScreenWrap & Plugin;
