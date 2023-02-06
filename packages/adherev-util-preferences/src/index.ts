import { App, Plugin } from 'vue';

import Preferences from '@baifendian/adhere-util-preferences';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Wrap = {
  ...Preferences,
  install: (app: App) => {
    withVue(app, 'Preferences', Preferences);

    return app;
  },
};

export default Wrap as typeof Wrap & Plugin;
