import { Push, Overlay, Revolving } from './slidelayout';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = BfdUtil;

withInstall(Push);
withInstall(Overlay);
withInstall(Revolving);

export default {
  isUse: () => true,
  use: (Vue: any) => {
    Vue.use(Push);
    Vue.use(Overlay);
    Vue.use(Revolving);
    withVue(Vue, 'SlideLayout', {
      Push,
      Overlay,
      Revolving,
    });
  },
};
