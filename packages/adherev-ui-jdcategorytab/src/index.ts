import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';

import JdCategoryTabItem from './item';
import JdCategoryTab from './jdcategorytab';

const {
  _util: { withVue },
} = Util;

JdCategoryTab.Item = JdCategoryTabItem;

JdCategoryTab.install = function (app: App) {
  app.component(JdCategoryTabItem.name, JdCategoryTabItem);
  app.component(JdCategoryTab.name, JdCategoryTab);
  withVue(app, 'JdCategoryTab', JdCategoryTab);

  return app;
};

export default JdCategoryTab as typeof JdCategoryTab &
  Plugin & {
    readonly Item: typeof JdCategoryTabItem;
  };
