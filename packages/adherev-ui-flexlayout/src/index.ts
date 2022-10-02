import Util from '@baifendian/adherev-util';

import Auto from './auto';
import BackLayout from './backLayout';
import Fixed from './fixed';
import FlexLayout, { selectorPrefix } from './flexlayout';
import HorizontalFlexLayout from './horizontalFlexLayout';
import ScrollLayout from './scrollLayout';
import ToolBarLayout from './toolBarLayout';
import VerticalFlexLayout from './verticalFlexLayout';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(FlexLayout);
Component.Fixed = withInstall(Fixed);
Component.Auto = withInstall(Auto);
Component.HorizontalFlexLayout = withInstall(HorizontalFlexLayout);
Component.VerticalFlexLayout = withInstall(VerticalFlexLayout);
Component.BackLayout = withInstall(BackLayout);
Component.ScrollLayout = withInstall(ScrollLayout);
Component.ToolBarLayout = withInstall(ToolBarLayout);
Component.selectorPrefix = selectorPrefix;

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  Vue.use(Component.Fixed);
  Vue.use(Component.Auto);
  Vue.use(Component.HorizontalFlexLayout);
  Vue.use(Component.VerticalFlexLayout);
  Vue.use(Component.BackLayout);
  Vue.use(Component.ScrollLayout);
  Vue.use(Component.ToolBarLayout);

  withVue(Vue, Component.name, Component);
  withVue(Vue, Component.Fixed.name, Component.Fixed);
  withVue(Vue, Component.Auto.name, Component.Auto);
  withVue(Vue, Component.HorizontalFlexLayout.name, Component.HorizontalFlexLayout);
  withVue(Vue, Component.VerticalFlexLayout.name, Component.VerticalFlexLayout);
  withVue(Vue, Component.BackLayout.name, Component.BackLayout);
  withVue(Vue, Component.ScrollLayout.name, Component.ScrollLayout);
  withVue(Vue, Component.ToolBarLayout.name, Component.ToolBarLayout);
};

export default Component;
