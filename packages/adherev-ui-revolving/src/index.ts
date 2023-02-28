import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import RevolvingItem from './item';
import Revolving from './revolving';

const {
  _util: { withVue },
} = BfdUtil;

Revolving.Item = RevolvingItem;

Revolving.install = function (app: App) {
  app.component(RevolvingItem.name, RevolvingItem);
  app.component(Revolving.name, Revolving);
  withVue(app, 'Revolving', Revolving);

  return app;
};

export default Revolving as typeof Revolving &
  Plugin & {
    readonly Item: typeof RevolvingItem;
  };
