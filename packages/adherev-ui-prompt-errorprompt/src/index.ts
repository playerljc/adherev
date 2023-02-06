import { Modal } from 'ant-design-vue';
import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import { openErrorDialog, openErrorMessage } from './errorprompt';

const {
  _util: { withVue },
} = BfdUtil;

const ErrorPrompt = {
  openErrorDialog,
  openErrorMessage,
  install: function (app: App) {
    app.component(Intl.name, Intl);
    app.component(Modal.name, Modal);
    withVue(app, 'ErrorPrompt', ErrorPrompt);

    return app;
  },
};

export default ErrorPrompt as typeof ErrorPrompt & Plugin;
