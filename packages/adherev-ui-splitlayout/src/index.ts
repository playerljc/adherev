import { App, Plugin } from 'vue';

import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import BfdUtil from '@baifendian/adherev-util';

import SplitLayout from './splitlayout';

const {
  _util: { withVue },
} = BfdUtil;

SplitLayout.install = function (app: App) {
  app.component(FlexLayout.name, FlexLayout);
  app.component(SplitLayout.name, SplitLayout);
  withVue(app, 'SplitLayout', SplitLayout);

  return app;
};

export default SplitLayout as typeof SplitLayout & Plugin;
