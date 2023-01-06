import Util from '@baifendian/adherev-util';

import VueQuillSandbox from './vueQuillSandbox';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(VueQuillSandbox);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'VueQuillSandbox', Component);
};

export default Component;
