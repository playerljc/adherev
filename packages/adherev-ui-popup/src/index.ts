import BfdUtil from '@baifendian/adherev-util';

import Popup from './popup';

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
