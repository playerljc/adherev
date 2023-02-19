import { App, Plugin } from "vue";

import Domain from '@baifendian/adhere-util-domain';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const DomainWrap: typeof Domain & {
  install?: (app: App) => App
} = Domain;

DomainWrap.install = (app: App) => {
  withVue(app, 'Domain', Domain);

  return app;
}

export default DomainWrap as typeof DomainWrap & Plugin;
