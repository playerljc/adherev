// import VueI18n from 'vue-i18n';
//
// import Intl, { extend, getLocal } from './intl';
//
// Intl.install = function (Vue: any) {
//   // 扩展Vue对象
//   extend(Vue);
// };
//
// Intl.use = (Vue) => {
//   Vue.use(VueI18n);
//   Vue.use(Intl);
// };
//
// Intl.isUse = () => true;
//
// Intl.getLocal = getLocal;
//
// export default Intl;
// import VueI18n from 'vue-i18n';
import IntlV, { extend } from './intl';

IntlV.install = function (Vue: any) {
  // 扩展Vue对象
  extend(Vue);
};

IntlV.isUse = () => true;

IntlV.use = (Vue) => {
  Vue.use(IntlV);
  // Vue.use(VueI18n);
};

export default IntlV;
