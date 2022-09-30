import Util from '@baifendian/adherev-util';

import Auto from './auto';
import Fixed from './fixed';
import FlexLayout, { selectorPrefix } from './flexlayout';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(FlexLayout);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);

  Vue.use(Component.Fixed);

  Vue.use(Component.Auto);

  withVue(Vue, 'FlexLayout', Component);
};

Component.Fixed = withInstall(Fixed);
Component.Auto = withInstall(Auto);
Component.selectorPrefix = selectorPrefix;

export default Component;
