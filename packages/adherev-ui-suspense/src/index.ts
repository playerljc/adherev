import { Spin, Skeleton } from 'ant-design-vue';

import Suspense from './suspense';

Suspense.isUse = () => true;

Suspense.use = (Vue) => {
  Vue.use(Spin);
  Vue.use(Skeleton);
};

export default Suspense;
