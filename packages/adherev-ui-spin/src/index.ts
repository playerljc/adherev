import BfdUtil from '@baifendian/adherev-util';

import Spin from './spin';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(Spin);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'Spin', Component);
};

export default Component;
