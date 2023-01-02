import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

const Component: any = WatchMemoized;

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.prototype.$adv = Vue.prototype.$adv || {};
  Vue.prototype.$adv.WatchMemoized = Component;
};

export default Component;
