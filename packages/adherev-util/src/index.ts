import { App, Plugin } from 'vue';

import Util from '@baifendian/adhere-util';

import * as _util from './_util';

const Wrap = {
  ...Util,
  install: (app: App) => {
    _util.withVue(app, 'Util', Util);

    return app;
  },
  _util,
};

export default Wrap as typeof Wrap & Plugin;
