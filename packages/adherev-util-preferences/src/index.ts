import { App, Plugin } from 'vue';

import Preferences from '@baifendian/adhere-util-preferences';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const PreferencesWrap: typeof Preferences & {
  install?: (app: App) => App
} = Preferences;

PreferencesWrap.install = (app: App) => {
  withVue(app, 'Preferences', Preferences);

  return app;
};

export default PreferencesWrap as typeof PreferencesWrap & Plugin;

