import StickUpLayout from '@baifendian/adherev-ui-stickuplayout';
import Util from '@baifendian/adherev-util';

import CascadeCompared from './cascadecompared';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(CascadeCompared);

Component.isUse = () => true;

Component.use = (Vue) => {
  StickUpLayout.isUse() && StickUpLayout.use(Vue);
  Vue.use(Component);
  withVue(Vue, 'CascadeCompared', Component);
};

export default Component;
