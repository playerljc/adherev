import BfdUtil from"@baifendian/adherev-util";import Space,{SpaceGroup}from"./space";var _a=BfdUtil._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(Space);Component.isUse=function(){return!0},Component.use=function(t){t.use(Component),t.use(Component.Group),withVue(t,"Space",Component)},Component.Group=withInstall(SpaceGroup);export default Component;
//# sourceMappingURL=index.js.map
