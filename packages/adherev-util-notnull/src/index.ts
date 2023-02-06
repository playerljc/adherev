import { App, Plugin } from 'vue';

import NotNull from '@baifendian/adhere-util-notnull';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Wrap = {
  ...NotNull,
  install: (app: App) => {
    withVue(app, 'NotNull', NotNull);

    return app;
  },
};

export default Wrap as typeof Wrap & Plugin;
