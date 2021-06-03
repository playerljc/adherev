import { Spin, Skeleton } from 'ant-design-vue';
// @ts-ignore
import Suspense from './suspense';

// @ts-ignore
Suspense.isUse = () => true;
// @ts-ignore
Suspense.use = (Vue) => {
  Vue.use(Spin);
  Vue.use(Skeleton);
};

export default Suspense;
