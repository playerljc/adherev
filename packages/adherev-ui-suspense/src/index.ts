import { Spin, Skeleton } from 'ant-design-vue';
import BfdUtil from '@baifendian/adherev-util';
import Suspense from './suspense';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
Suspense.isUse = () => true;

// @ts-ignore
Suspense.use = (Vue) => {
  Vue.use(Spin);
  Vue.use(Skeleton);
  withVue(Vue, 'Suspense', Suspense);
};

export default Suspense;
