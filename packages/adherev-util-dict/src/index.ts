import Dict from '@baifendian/adhere-util-dict';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

Dict.isUse = () => true;
Dict.use = (Vue) => {
  withVue(Vue, 'Dict', Dict);
};

export default Dict;
