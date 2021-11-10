import NotNull from '@baifendian/adhere-util-notnull';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

NotNull.isUse = () => true;
NotNull.use = (Vue) => {
  withVue(Vue, 'NotNull', NotNull);
};

export default NotNull;
