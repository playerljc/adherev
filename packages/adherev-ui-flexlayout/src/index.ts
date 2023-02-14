import { Button } from 'ant-design-vue';
import { App, Plugin } from 'vue';

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
  _util: { withVue },
} = Util;

FlexLayout.Fixed = Fixed;
FlexLayout.Auto = Auto;
FlexLayout.HorizontalFlexLayout = HorizontalFlexLayout;
FlexLayout.VerticalFlexLayout = VerticalFlexLayout;
FlexLayout.BackLayout = BackLayout;
FlexLayout.ScrollLayout = ScrollLayout;
FlexLayout.ToolBarLayout = ToolBarLayout;
FlexLayout.selectorPrefix = selectorPrefix;

FlexLayout.install = function (app: App) {
  app.component(Button.name, Button);
  app.component(FlexLayout.name, FlexLayout);
  app.component(Fixed.name, Fixed);
  app.component(Auto.name, Auto);
  app.component(HorizontalFlexLayout.name, HorizontalFlexLayout);
  app.component(VerticalFlexLayout.name, VerticalFlexLayout);
  app.component(BackLayout.name, BackLayout);
  app.component(ScrollLayout.name, ScrollLayout);
  app.component(ToolBarLayout.name, ToolBarLayout);

  withVue(app, 'FlexLayout', FlexLayout);

  return app;
};

export default FlexLayout as typeof FlexLayout &
  Plugin & {
    readonly Fixed: typeof Fixed;
    readonly Auto: typeof Auto;
    readonly HorizontalFlexLayout: typeof HorizontalFlexLayout;
    readonly VerticalFlexLayout: typeof VerticalFlexLayout;
    readonly BackLayout: typeof BackLayout;
    readonly ScrollLayout: typeof ScrollLayout;
    readonly ToolBarLayout: typeof ToolBarLayout;
    readonly selectorPrefix: typeof selectorPrefix;
  };
