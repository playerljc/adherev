import BfdUtil from '@baifendian/adherev-util';

import ScrollLoad, { EMPTY, ERROR, NORMAL } from './scrollload';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(ScrollLoad);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'ScrollLoad', Component);
};

// @ts-ignore
ScrollLoad.ERROR = ERROR;
// @ts-ignore
ScrollLoad.EMPTY = EMPTY;
// @ts-ignore
ScrollLoad.NORMAL = NORMAL;

export default Component;
