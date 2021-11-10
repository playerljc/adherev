import Util from '@baifendian/adhere-util';
import * as _util from './_util';

Util.isUse = () => true;
Util.use = (Vue) => {
  _util.withVue(Vue, 'Util', Util);
};

export default { ...Util, _util: { ..._util } };
