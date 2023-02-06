import { Button, ConfigProvider } from 'ant-design-vue';
import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import formCreate from '@form-create/ant-design-vue';

import MessageDialog from './messagedialog';

const {
  _util: { withVue },
} = Util;

MessageDialog.install = function (app: App) {
  app.use(Intl);
  app.use(ConfigProvider);
  app.use(Button);
  app.use(formCreate);

  withVue(app, 'MessageDialog', MessageDialog);

  return app;
};

export default MessageDialog as typeof MessageDialog & Plugin;
