import NotNull from '@baifendian/adhere-util-notnull';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
NotNull.isUse = () => true;
// @ts-ignore
NotNull.use = (Vue: any) => {
  withVue(Vue, 'NotNull', NotNull);
};

export default NotNull;
