import Popup from './popup';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
Popup.isUse = () => true;
// @ts-ignore
Popup.use = (Vue) => {
  withVue(Vue, 'Popup', Popup);
};

export default Popup;
