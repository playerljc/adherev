import Util from"@baifendian/adherev-util";import Intl from"@baifendian/adherev-util-intl";import Resource from"@baifendian/adherev-util-resource";import ConfigProvider from"./configprovider";var _a=Util._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(ConfigProvider);Component.isUse=function(){return!0},Component.use=function(e){Intl.isUse()&&Intl.use(e),Resource.isUse()&&Resource.use(e),e.use(Component),withVue(e,"ConfigProvider",Component)};export default Component;
//# sourceMappingURL=index.js.map
