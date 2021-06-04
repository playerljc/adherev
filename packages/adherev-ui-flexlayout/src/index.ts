// @ts-ignore
import Fixed from './fixed';
// @ts-ignore
import Auto from './auto';
// @ts-ignore
import FlexLayout from './flexlayout';

// @ts-ignore
import { withInstall } from '../../_util';

const Component = withInstall(FlexLayout);
// @ts-ignore
Component.isUse = () => true;
// @ts-ignore
Component.use = (Vue) => {
  Vue.use(Component);
  // @ts-ignore
  Vue.use(Component.Fixed);
  // @ts-ignore
  Vue.use(Component.Auto);
};

// @ts-ignore
Component.Fixed = withInstall(Fixed);
Component.Auto = withInstall(Auto);

export default Component;
