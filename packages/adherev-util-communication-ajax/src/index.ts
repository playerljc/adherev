import Ajax from './ajax';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

Ajax.isUse = () => true;
Ajax.use = (Vue) => {
  withVue(Vue, 'Ajax', Ajax);
};

export default Ajax;
