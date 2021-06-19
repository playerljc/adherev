import Fixed from './fixed';

import Auto from './auto';

import FlexLayout, { selectorPrefix } from './flexlayout';

import { withInstall } from '../../_util';

const Component = withInstall(FlexLayout);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);

  Vue.use(Component.Fixed);

  Vue.use(Component.Auto);
};

Component.Fixed = withInstall(Fixed);
Component.Auto = withInstall(Auto);
Component.selectorPrefix = selectorPrefix;

export default Component;
