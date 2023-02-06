import BfdUtil from"@baifendian/adherev-util";import Split,{SplitGroup}from"./split";var withVue=BfdUtil._util.withVue;Split.Group=SplitGroup,Split.install=function(t){return t.component(SplitGroup.name,SplitGroup),t.component(Split.name,Split),withVue(t,"Split",Split),t};export default Split;
//# sourceMappingURL=index.js.map
