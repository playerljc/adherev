import { App, Plugin } from 'vue';

import AdapterScreen from '@baifendian/adhere-util-adapterscreen';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Wrap = {
  ...AdapterScreen,
  install: (app: App) => {
    withVue(app, 'AdapterScreen', AdapterScreen);

    return app;
  },
};

export default Wrap as typeof Wrap & Plugin;
