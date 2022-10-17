import Util from '@baifendian/adhere-util';

import * as _util from './_util';

const Component: any = Util;

Component.isUse = () => true;
Component.use = (Vue: any) => {
  _util.withVue(Vue, 'Util', Component);
};

export default { ...Component, _util: { ..._util } };
