import BfdUtil from '@baifendian/adherev-util';

import { Overlay, Push, Revolving } from './slidelayout';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

withInstall(Push);
withInstall(Overlay);
withInstall(Revolving);

const SlideLayout = {
  isUse: () => true,
  use: (Vue) => {
    Vue.use(Push);
    Vue.use(Overlay);
    Vue.use(Revolving);
    withVue(Vue, 'SlideLayout', SlideLayout);
  },
  Push,
  Overlay,
  Revolving,
};

export default SlideLayout;
