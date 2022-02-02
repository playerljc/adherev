import BfdUtil from '@baifendian/adherev-util';
import ScrollLoad, { ERROR, EMPTY, NORMAL } from './scrollload';

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
