import{createVNode as _createVNode}from"vue";import Resource from"@baifendian/adherev-util-resource";import{defineComponent}from"vue";import{bool,number,string}from"vue-types";var selectorPrefix="adherev-ui-spin",spinProps={spinning:bool().def(!1),text:string().def(""),zIndex:number().def(Resource.Dict.value.ResourceNormalMaxZIndex.value)};export default defineComponent({name:"adv-spin",props:spinProps,setup:function(e){return function(){return e.spinning?_createVNode("div",{class:selectorPrefix,style:{zIndex:e.zIndex}},[_createVNode("span",{class:"".concat(selectorPrefix,"-dot")},[_createVNode("i",null,null),_createVNode("i",null,null),_createVNode("i",null,null),_createVNode("i",null,null)]),_createVNode("div",{class:"".concat(selectorPrefix,"-text")},[e.text])]):null}}});
//# sourceMappingURL=spin.js.map
