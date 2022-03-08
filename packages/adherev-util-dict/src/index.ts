import Dict from '@baifendian/adhere-util-dict';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
Dict.isUse = () => true;
// @ts-ignore
Dict.use = (Vue: any) => {
  withVue(Vue, 'Dict', Dict);
};

export default Dict;
