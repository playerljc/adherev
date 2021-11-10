import WatchMemoized from '@baifendian/adhere-util-watchmemoized';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

WatchMemoized.isUse = () => true;
WatchMemoized.use = (Vue) => {
  withVue(Vue, 'WatchMemoized', WatchMemoized);
};

export default WatchMemoized;
