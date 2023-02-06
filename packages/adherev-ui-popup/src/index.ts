import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import Popup from './popup';

const {
  _util: { withVue },
} = BfdUtil;

Popup.install = function (app: App) {
  withVue(app, 'Popup', Popup);

  return app;
};

export default Popup as typeof Popup & Plugin;
