import { Empty, Skeleton, Spin } from 'ant-design-vue';

import BfdUtil from '@baifendian/adherev-util';

import SuspenseAsync from './async';
import Suspense from './suspense';
import SuspenseSync from './sync';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

withInstall(SuspenseAsync);
withInstall(SuspenseSync);

Suspense.Sync = SuspenseSync;
Suspense.Async = SuspenseAsync;

Suspense.isUse = () => true;

Suspense.use = (Vue) => {
  Vue.use(Spin);
  Vue.use(Skeleton);
  Vue.use(Empty);
  Vue.use(SuspenseAsync);
  Vue.use(SuspenseSync);

  withVue(Vue, 'Suspense', Suspense);
};

export default Suspense;
