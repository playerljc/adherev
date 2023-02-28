import BfdUtil from"@baifendian/adherev-util";import Space,{SpaceGroup}from"./space";var withVue=BfdUtil._util.withVue;Space.Group=SpaceGroup,Space.install=function(e){return e.component(SpaceGroup.name,SpaceGroup),e.component(Space.name,Space),withVue(e,"Space",Space),e};export default Space;
//# sourceMappingURL=index.js.map
