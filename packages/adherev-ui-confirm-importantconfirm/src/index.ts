import { App, Plugin } from 'vue';

import MessageDialog from '@baifendian/adherev-ui-messagedialog';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import ImportantConfirm, { open } from './importantconfirm';

const {
  _util: { withVue },
} = Util;

ImportantConfirm.open = open;

ImportantConfirm.install = function (app: App) {
  app.use(MessageDialog);
  app.use(Intl);
  app.component(ImportantConfirm.name, ImportantConfirm);
  withVue(app, 'ImportantConfirm', ImportantConfirm);

  return app;
};

export default ImportantConfirm as typeof ImportantConfirm &
  Plugin & {
    readonly open: typeof open;
  };
