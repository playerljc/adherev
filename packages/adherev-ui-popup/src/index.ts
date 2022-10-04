import BfdUtil from '@baifendian/adherev-util';

import Popup from './popup';

const {
  _util: { withVue },
} = BfdUtil;

Popup.isUse = () => true;
Popup.use = (Vue) => {
  withVue(Vue, 'Popup', Popup);
};

export default Popup;
