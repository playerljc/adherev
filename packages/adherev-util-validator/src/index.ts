import Validator from '@baifendian/adhere-util-validator';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Component: any = Validator;

Component.isUse = () => true;

Component.use = (Vue) => {
  withVue(Vue, 'Validator', Component);
};

export default Component;
