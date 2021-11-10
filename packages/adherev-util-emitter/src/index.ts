import Emitter from '@baifendian/adhere-util-emitter';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

Emitter.isUse = () => true;
Emitter.use = (Vue) => {
  withVue(Vue, 'Emitter', Emitter);
};

export default Emitter;
