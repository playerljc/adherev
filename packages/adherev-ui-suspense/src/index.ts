import { Skeleton, Spin } from 'ant-design-vue';

import BfdUtil from '@baifendian/adherev-util';

import Suspense from './suspense';

const {
  _util: { withVue },
} = BfdUtil;

Suspense.isUse = () => true;

Suspense.use = (Vue: any) => {
  Vue.use(Spin);
  Vue.use(Skeleton);
  withVue(Vue, 'Suspense', Suspense);
};

export default Suspense;
