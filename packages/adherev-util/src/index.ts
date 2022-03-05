import Util from '@baifendian/adhere-util';
import * as _util from './_util';

// @ts-ignore
Util.isUse = () => true;
// @ts-ignore
Util.use = (Vue) => {
  _util.withVue(Vue, 'Util', Util);
};

export default { ...Util, _util: { ..._util } };
