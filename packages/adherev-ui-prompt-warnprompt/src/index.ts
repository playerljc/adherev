import { Modal } from 'ant-design-vue';
import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import { openWarnDialog, openWarnMessage } from './warnprompt';

const {
  _util: { withVue },
} = BfdUtil;

const WarnPrompt = {
  openWarnMessage,
  openWarnDialog,
  install: function (app: App) {
    app.component(Intl.name, Intl);
    app.component(Modal.name, Modal);
    withVue(app, 'WarnPrompt', WarnPrompt);

    return app;
  },
};

export default WarnPrompt as typeof WarnPrompt & Plugin;
