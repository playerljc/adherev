import BfdUtil from"@baifendian/adherev-util";import{Overlay,Push,Revolving}from"./slidelayout";var withVue=BfdUtil._util.withVue,SlideLayout={Push:Push,Overlay:Overlay,Revolving:Revolving,install:function(e){return e.component(Push.name,Push),e.component(Overlay.name,Overlay),e.component(Revolving.name,Revolving),withVue(e,"SlideLayout",SlideLayout),e}};export default SlideLayout;
//# sourceMappingURL=index.js.map
