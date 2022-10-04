import BfdUtil from '@baifendian/adherev-util';

import Surnames from './surnames';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(Surnames);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'Surnames', Component);
};

export default Component;
