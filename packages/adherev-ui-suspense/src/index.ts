import { Empty, Skeleton, Spin } from 'ant-design-vue';
import { App, Plugin } from 'vue';

import BfdUtil from '@baifendian/adherev-util';

import SuspenseAsync from './async';
import Suspense from './suspense';
import SuspenseSync from './sync';

const {
  _util: { withVue },
} = BfdUtil;

Suspense.Sync = SuspenseSync;
Suspense.Async = SuspenseAsync;

Suspense.install = function (app: App) {
  app.component(Spin.name, Spin);
  app.component(Skeleton.name, Skeleton);
  app.component(Empty.name, Empty);
  app.component(SuspenseAsync.name, SuspenseAsync);
  app.component(SuspenseSync.name, SuspenseSync);
  app.component(Suspense.name, Suspense);
  withVue(app, 'Suspense', Suspense);

  return app;
};

export default Suspense as typeof Suspense &
  Plugin & {
    readonly Sync: typeof SuspenseSync;
    readonly Async: typeof SuspenseAsync;
  };
