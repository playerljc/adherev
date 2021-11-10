import ScrollLoad, { ERROR, EMPTY, NORMAL } from './scrollload';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(ScrollLoad);
Component.isUse = () => true;
Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'ScrollLoad', Component);
};

ScrollLoad.ERROR = ERROR;
ScrollLoad.EMPTY = EMPTY;
ScrollLoad.NORMAL = NORMAL;

export default Component;
