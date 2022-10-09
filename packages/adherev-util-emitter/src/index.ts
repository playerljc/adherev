import Emitter from '@baifendian/adhere-util-emitter';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Component: any = Emitter;

Component.isUse = () => true;

Component.use = (Vue) => {
  withVue(Vue, 'Emitter', Component);
};

export default Component;
