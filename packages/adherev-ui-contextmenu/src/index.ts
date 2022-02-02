import Util from '@baifendian/adherev-util';

import ContextMenu from './ContextMenu';

const {
  _util: { withVue },
} = Util;

ContextMenu.isUse = () => true;

ContextMenu.use = (Vue) => {
  withVue(Vue, 'ContextMenu', ContextMenu);
};

export default ContextMenu;
