import Popup from './popup';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withVue },
} = BfdUtil;

Popup.isUse = () => true;
Popup.use = (Vue) => {
  withVue(Vue, 'Popup', Popup);
};

export default Popup;
