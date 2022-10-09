import Domain from '@baifendian/adhere-util-domain';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Component: any = Domain;

Component.isUse = () => true;

Component.use = (Vue) => {
  withVue(Vue, 'Domain', Component);
};

export default Component;
