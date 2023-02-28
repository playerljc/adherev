import { Modal } from 'ant-design-vue';
import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import { openSuccessDialog, openSuccessMessage } from './successprompt';

const {
  _util: { withVue },
} = BfdUtil;

const SuccessPrompt = {
  openSuccessDialog,
  openSuccessMessage,
  install: function (app: App) {
    app.component(Intl.name, Intl);
    app.component(Modal.name, Modal);
    withVue(app, 'SuccessPrompt', SuccessPrompt);

    return app;
  },
};

export default SuccessPrompt as typeof SuccessPrompt & Plugin;
