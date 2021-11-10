import Browsersniff from '@baifendian/adhere-util-browsersniff';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

Browsersniff.isUse = () => true;
Browsersniff.use = (Vue) => {
  withVue(Vue, 'Browsersniff', Browsersniff);
};

export default Browsersniff;
