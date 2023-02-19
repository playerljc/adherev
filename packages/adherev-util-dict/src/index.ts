import { App, Plugin } from 'vue';

import Dict from '@baifendian/adhere-util-dict';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const DictWrap: typeof Dict & {
  install?: (app: App) => App
} = Dict;

DictWrap.install = (app: App) => {
  withVue(app, 'Dict', Dict);

  return app;
}

export default DictWrap as typeof DictWrap & Plugin;
