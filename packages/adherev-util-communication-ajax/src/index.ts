import { App, Plugin } from 'vue';

import GlobalIndicator from '@baifendian/adherev-ui-globalindicator';
import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import Ajax from './ajax';

const {
  _util: { withVue },
} = BfdUtil;

Ajax.install = (app: App) => {
  app.use(GlobalIndicator);
  app.use(Intl);

  withVue(app, 'Ajax', Ajax);

  return app;
};

export default Ajax as typeof Ajax & Plugin;
