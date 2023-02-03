import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

const Component: any = WatchMemoized;

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.config.globalProperties.$adv = Vue.config.globalProperties.$adv || {};
  Vue.config.globalProperties.$adv.WatchMemoized = Component;
};

export default Component;
