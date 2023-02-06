import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';

import ContextMenu from './ContextMenu';

const {
  _util: { withVue },
} = Util;

ContextMenu.install = function (app: App) {
  withVue(app, 'ContextMenu', ContextMenu);

  return app;
};

export default ContextMenu as typeof ContextMenu & Plugin;
