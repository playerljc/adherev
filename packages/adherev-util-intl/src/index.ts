import Intl, { extend, getLocal } from './intl';

// @ts-ignore
Intl.install = function (app: any) {
  console.log('intlInstall');
  // 扩展Vue对象
  extend(app);
};

// @ts-ignore
Intl.isUse = () => true;

// @ts-ignore
Intl.use = (app) => {
  app.use(Intl);
};

// @ts-ignore
Intl.getLocal = getLocal;

export default Intl;
