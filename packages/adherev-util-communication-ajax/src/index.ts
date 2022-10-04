import BfdUtil from '@baifendian/adherev-util';

import Ajax from './ajax';

const {
  _util: { withVue },
} = BfdUtil;

Ajax.isUse = () => true;

Ajax.use = (Vue) => {
  withVue(Vue, 'Ajax', Ajax);
};

export default Ajax;
