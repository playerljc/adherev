import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';

import WritingBoard from './writingboard';

const {
  _util: { withVue },
} = Util;

WritingBoard.install = function (app: App) {
  app.component(WritingBoard.name, WritingBoard);
  withVue(app, 'WritingBoard', WritingBoard);

  return app;
};

export default WritingBoard as typeof WritingBoard & Plugin;
