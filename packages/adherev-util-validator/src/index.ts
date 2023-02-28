import { App, Plugin } from 'vue';

import Validator from '@baifendian/adhere-util-validator';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const ValidatorWrap: typeof Validator & {
  install?: (app: App) => App
} = Validator;

ValidatorWrap.install = (app: App) => {
  withVue(app, 'Validator', Validator);

  return app;
}

export default ValidatorWrap as typeof ValidatorWrap & Plugin;
