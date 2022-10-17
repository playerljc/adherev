import WatchMemoized from '@baifendian/adhere-util-watchmemoized';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Component: any = WatchMemoized;

Component.isUse = () => true;

Component.use = (Vue) => {
  withVue(Vue, 'WatchMemoized', Component);
};

export default Component;
