import NotNull from '@baifendian/adhere-util-notnull';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Component: any = NotNull;

Component.isUse = () => true;

Component.use = (Vue) => {
  withVue(Vue, 'NotNull', Component);
};

export default Component;
