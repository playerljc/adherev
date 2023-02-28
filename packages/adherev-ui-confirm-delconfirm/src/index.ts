import { App, Plugin } from 'vue';

import MessageDialog from '@baifendian/adherev-ui-messagedialog';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import DelConfirm, { open } from './delconfirm';

const {
  _util: { withVue },
} = Util;

DelConfirm.open = open;

DelConfirm.install = (app: App) => {
  app.use(MessageDialog);
  app.use(Intl);
  app.component(DelConfirm.name, DelConfirm);

  withVue(app, 'DelConfirm', DelConfirm);
};

export default DelConfirm as typeof DelConfirm &
  Plugin & {
    readonly open: typeof open;
  };
