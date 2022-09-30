import BfdUtil from '@baifendian/adherev-util';

import Ajax from './ajax';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
Ajax.isUse = () => true;
// @ts-ignore
Ajax.use = (Vue: any) => {
  withVue(Vue, 'Ajax', Ajax);
};

export default Ajax;
