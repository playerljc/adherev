import { App, Plugin } from 'vue';

import Dict from '@baifendian/adhere-util-dict';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Wrap = {
  ...Dict,
  install: (app: App) => {
    withVue(app, 'Dict', Dict);

    return app;
  },
};

export default Wrap as typeof Wrap & Plugin;
