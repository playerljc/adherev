import { App, Plugin } from 'vue';

import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

const Wrap = {
  ...WatchMemoized,
  install: (app: App) => {
    app.config.globalProperties.$adv = app.config.globalProperties.$adv || {};
    app.config.globalProperties.$adv.WatchMemoized = WatchMemoized;
  },
};

export default Wrap as typeof Wrap & Plugin;
