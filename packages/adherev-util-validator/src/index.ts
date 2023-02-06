import { App, Plugin } from 'vue';

import Validator from '@baifendian/adhere-util-validator';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Wrap = {
  ...Validator,
  install: (app: App) => {
    withVue(app, 'Validator', Validator);

    return app;
  },
};

export default Wrap as typeof Wrap & Plugin;
