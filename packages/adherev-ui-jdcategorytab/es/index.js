import Util from"@baifendian/adherev-util";import JdCategoryTabItem from"./item";import JdCategoryTab from"./jdcategorytab";var _a=Util._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(JdCategoryTab);withInstall(JdCategoryTabItem),Component.Item=JdCategoryTabItem,Component.isUse=function(){return!0},Component.use=function(t){t.use(JdCategoryTab),t.use(JdCategoryTabItem),withVue(t,"JdCategoryTab",JdCategoryTab)};export default Component;
//# sourceMappingURL=index.js.map