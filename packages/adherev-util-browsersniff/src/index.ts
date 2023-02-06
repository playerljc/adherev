import { App, Plugin } from 'vue';

import Browsersniff from '@baifendian/adhere-util-browsersniff';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Wrap = {
  ...Browsersniff,
  install: (app: App) => {
    withVue(app, 'Browsersniff', Browsersniff);

    return app;
  },
};

export default Wrap as typeof Wrap & Plugin;
