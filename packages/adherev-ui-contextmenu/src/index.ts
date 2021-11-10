import ContextMenu from './ContextMenu';
import Util from '@baifendian/adherev-util';
const {
  _util: { withVue },
} = Util;

ContextMenu.isUse = () => true;
ContextMenu.use = (Vue) => {
  withVue(Vue, 'ContextMenu', ContextMenu);
};

export default ContextMenu;
