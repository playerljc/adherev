import Polygonselection from '@baifendian/adhere-ui-polygonselection';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Component: any = Polygonselection;

Component.isUse = () => true;

Component.use = (Vue) => {
  withVue(Vue, 'Polygonselection', Component);
};

export default Component;
