import{Button}from"ant-design-vue";import Util from"@baifendian/adherev-util";import Auto from"./auto";import BackLayout from"./backLayout";import Fixed from"./fixed";import FlexLayout,{selectorPrefix}from"./flexlayout";import HorizontalFlexLayout from"./horizontalFlexLayout";import ScrollLayout from"./scrollLayout";import ToolBarLayout from"./toolBarLayout";import VerticalFlexLayout from"./verticalFlexLayout";var _a=Util._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(FlexLayout);Component.Fixed=withInstall(Fixed),Component.Auto=withInstall(Auto),Component.HorizontalFlexLayout=withInstall(HorizontalFlexLayout),Component.VerticalFlexLayout=withInstall(VerticalFlexLayout),Component.BackLayout=withInstall(BackLayout),Component.ScrollLayout=withInstall(ScrollLayout),Component.ToolBarLayout=withInstall(ToolBarLayout),Component.selectorPrefix=selectorPrefix,Component.isUse=function(){return!0},Component.use=function(o){o.use(Button),o.use(Component),o.use(Component.Fixed),o.use(Component.Auto),o.use(Component.HorizontalFlexLayout),o.use(Component.VerticalFlexLayout),o.use(Component.BackLayout),o.use(Component.ScrollLayout),o.use(Component.ToolBarLayout),withVue(o,"FlexLayout",Component),withVue(o,"Fixed",Component.Fixed),withVue(o,"Auto",Component.Auto),withVue(o,"HorizontalFlexLayout",Component.HorizontalFlexLayout),withVue(o,"VerticalFlexLayout",Component.VerticalFlexLayout),withVue(o,"BackLayout",Component.BackLayout),withVue(o,"ScrollLayout",Component.ScrollLayout),withVue(o,"ToolBarLayout",Component.ToolBarLayout)};export default Component;
//# sourceMappingURL=index.js.map
