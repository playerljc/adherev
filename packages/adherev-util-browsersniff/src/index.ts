import Browsersniff from '@baifendian/adhere-util-browsersniff';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
Browsersniff.isUse = () => true;
// @ts-ignore
Browsersniff.use = (Vue: any) => {
  withVue(Vue, 'Browsersniff', Browsersniff);
};

export default Browsersniff;
