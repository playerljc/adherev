import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import ConfigProvider from './configprovider';

const {
  _util: { withVue },
} = Util;

ConfigProvider.install = (app: App) => {
  app.use(Intl);
  app.component(ConfigProvider.name, ConfigProvider);
  withVue(app, 'ConfigProvider', ConfigProvider);
};

export default ConfigProvider as typeof ConfigProvider & Plugin;
