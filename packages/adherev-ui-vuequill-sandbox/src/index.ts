import Util from '@baifendian/adherev-util';

import VueQuillSandbox from './vueQuillSandbox';
import { Component } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: Component = withInstall(VueQuillSandbox);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Component);
  withVue(Vue, 'VueQuillSandbox', Component);
};

export default Component;
