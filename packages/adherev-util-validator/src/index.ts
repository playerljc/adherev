import Validator from '@baifendian/adhere-util-validator';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
Validator.isUse = () => true;
// @ts-ignore
Validator.use = (Vue: any) => {
  withVue(Vue, 'Validator', Validator);
};

export default Validator;
