import Intl, { extend, getLocal } from './intl';

// @ts-ignore
Intl.install = function (Vue: any) {
  // 扩展Vue对象
  extend(Vue);
};

export { getLocal };
export default Intl;
