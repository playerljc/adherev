import Validator from '@baifendian/adhere-util-validator';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

Validator.isUse = () => true;
Validator.use = (Vue) => {
  withVue(Vue, 'Validator', Validator);
};

export default Validator;
