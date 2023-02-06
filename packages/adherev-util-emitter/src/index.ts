import { App, Plugin } from 'vue';

import Emitter from '@baifendian/adhere-util-emitter';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Wrap = {
  ...Emitter,
  install: (app: App) => {
    withVue(app, 'Emitter', Emitter);

    return app;
  },
};

export default Wrap as typeof Wrap & Plugin;
