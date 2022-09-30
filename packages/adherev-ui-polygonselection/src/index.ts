import Polygonselection from '@baifendian/adhere-ui-polygonselection';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
Polygonselection.isUse = () => true;
// @ts-ignore
Polygonselection.use = (Vue) => {
  withVue(Vue, 'Polygonselection', Polygonselection);
};

export default Polygonselection;
