import { Button } from 'ant-design-vue';

import Util from '@baifendian/adherev-util';

import Auto from './auto';
import BackLayout from './backLayout';
import Fixed from './fixed';
import FlexLayout, { selectorPrefix } from './flexlayout';
import HorizontalFlexLayout from './horizontalFlexLayout';
import ScrollLayout from './scrollLayout';
import ToolBarLayout from './toolBarLayout';
import { IComponent } from './types';
import VerticalFlexLayout from './verticalFlexLayout';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: IComponent = withInstall(FlexLayout);

Component.Fixed = withInstall(Fixed);
Component.Auto = withInstall(Auto);
Component.HorizontalFlexLayout = withInstall(HorizontalFlexLayout);
Component.VerticalFlexLayout = withInstall(VerticalFlexLayout);
Component.BackLayout = withInstall(BackLayout);
Component.ScrollLayout = withInstall(ScrollLayout);
Component.ToolBarLayout = withInstall(ToolBarLayout);
Component.selectorPrefix = selectorPrefix;

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Button);
  Vue.use(Component);
  Vue.use(Component.Fixed);
  Vue.use(Component.Auto);
  Vue.use(Component.HorizontalFlexLayout);
  Vue.use(Component.VerticalFlexLayout);
  Vue.use(Component.BackLayout);
  Vue.use(Component.ScrollLayout);
  Vue.use(Component.ToolBarLayout);

  withVue(Vue, 'FlexLayout', Component);
  withVue(Vue, 'Fixed', Component.Fixed);
  withVue(Vue, 'Auto', Component.Auto);
  withVue(Vue, 'HorizontalFlexLayout', Component.HorizontalFlexLayout);
  withVue(Vue, 'VerticalFlexLayout', Component.VerticalFlexLayout);
  withVue(Vue, 'BackLayout', Component.BackLayout);
  withVue(Vue, 'ScrollLayout', Component.ScrollLayout);
  withVue(Vue, 'ToolBarLayout', Component.ToolBarLayout);
};

export default Component;
