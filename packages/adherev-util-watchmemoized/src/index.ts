import { App, Plugin } from 'vue';

import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

const WatchMemoizedWrap: typeof WatchMemoized & {
  install?: (app: App) => App
} = WatchMemoized;

WatchMemoizedWrap.install = (app: App) => {
  app.config.globalProperties.$adv = app.config.globalProperties.$adv || {};
  app.config.globalProperties.$adv.WatchMemoized = WatchMemoized;
  return app;
}

export default WatchMemoizedWrap as typeof WatchMemoizedWrap & Plugin;
