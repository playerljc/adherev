import { App } from 'vue';

import Domain from '@baifendian/adhere-util-domain';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
const Wrap = {
  ...Domain,
  install: (app: App) => {
    withVue(app, 'Domain', Domain);

    return app;
  },
};

export default Wrap;
