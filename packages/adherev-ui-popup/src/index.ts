import BfdUtil from '@baifendian/adherev-util';

import Popup from './popup';

const {
  _util: { withVue },
} = BfdUtil;

Popup.isUse = () => true;

Popup.use = (Vue: any) => {
  withVue(Vue, 'Popup', Popup);
};

export default Popup;
