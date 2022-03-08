import Util from '@baifendian/adherev-util';

import ContextMenu from './ContextMenu';

const {
  _util: { withVue },
} = Util;

ContextMenu.isUse = () => true;

ContextMenu.use = (Vue: any) => {
  withVue(Vue, 'ContextMenu', ContextMenu);
};

export default ContextMenu;
