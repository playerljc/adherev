import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import StickupLayoutItem from './item';
import StickupLayout from './stickuplayout';

const {
  _util: { withVue },
} = BfdUtil;

StickupLayout.Item = StickupLayoutItem;

StickupLayout.install = function (app: App) {
  app.component(StickupLayoutItem.name, StickupLayoutItem);
  app.component(StickupLayout.name, StickupLayout);
  withVue(app, 'StickupLayout', StickupLayout);

  return app;
};

export default StickupLayout as typeof StickupLayout &
  Plugin & {
    readonly Item: typeof StickupLayoutItem;
  };
