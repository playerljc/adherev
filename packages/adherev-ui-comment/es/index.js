import{Button,Empty,Input,Popover,Skeleton,Spin}from"ant-design-vue";import BackTopAnimation from"@baifendian/adherev-ui-backtopanimation";import FlexLayout from"@baifendian/adherev-ui-flexlayout";import ScrollLoad from"@baifendian/adherev-ui-scrollload";import Util from"@baifendian/adherev-util";import Intl from"@baifendian/adherev-util-intl";import Comment from"./Comment/index";var _a=Util._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(Comment);Component.isUse=function(){return!0},Component.use=function(e){e.use(Button),e.use(Empty),e.use(Input),e.use(Popover),e.use(Skeleton),e.use(Spin),BackTopAnimation.isUse()&&BackTopAnimation.use(e),FlexLayout.isUse()&&FlexLayout.use(e),ScrollLoad.isUse()&&ScrollLoad.use(e),Intl.isUse()&&Intl.use(e),e.use(Component),withVue(e,"Comment",Component)};export default Component;
//# sourceMappingURL=index.js.map
