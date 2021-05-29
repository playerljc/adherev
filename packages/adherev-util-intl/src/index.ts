import VueI18n from 'vue-i18n';
import Intl, { extend, getLocal } from './intl';

// @ts-ignore
Intl.install = function (Vue: any) {
  // 扩展Vue对象
  extend(Vue);
};

// @ts-ignore
Intl.use = (Vue) => {
  Vue.use(VueI18n);
  Vue.use(Intl);
};

// @ts-ignore
Intl.isUse = () => true;

// @ts-ignore
Intl.getLocal = getLocal;

export default Intl;
