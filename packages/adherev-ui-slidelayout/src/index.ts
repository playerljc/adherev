import { Push, Overlay, Revolving } from './slidelayout';
import { withInstall } from '../../_util/index';

withInstall(Push);
withInstall(Overlay);
withInstall(Revolving);

export default {
  isUse: () => true,
  use: (Vue) => {
    Vue.use(Push);
    Vue.use(Overlay);
    Vue.use(Revolving);
  },
};
