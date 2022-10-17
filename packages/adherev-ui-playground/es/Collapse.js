import{createVNode as _createVNode}from"vue";import classNames from"classnames";import{defineComponent,ref,watch}from"vue";import{bool,object,oneOfType,string}from"vue-types";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";var selectorPrefix="adherev-ui-playground-collapse",collapseProps={headerClassName:string().def(""),headerStyle:object().def({}),bodyClassName:string().def(""),bodyStyle:object().def({}),title:oneOfType([string(),object()]),extra:oneOfType([string(),object()]),defaultCollapse:bool().def(!1),border:bool().def(!1),scrollY:bool().def(!1),fixedHeaderScrollBody:bool().def(!1)};export default defineComponent({name:"adv-playground-collapse",props:collapseProps,setup:function(e,o){function r(){t.value=!t.value}var a=o.slots,t=ref(e.defaultCollapse);watch(function(){return e.defaultCollapse},function(e,o){e!==o&&(t.value=e)});return function(){return _createVNode("div",{class:classNames(selectorPrefix,e.scrollY?"".concat(selectorPrefix,"-scroll-y"):"",e.fixedHeaderScrollBody?"".concat(selectorPrefix,"-fixed-header-scroll-body"):"")},[_createVNode("div",{class:classNames("".concat(selectorPrefix,"-header"),e.border?"".concat(selectorPrefix,"-header-border"):"",e.headerClassName||""),style:e.headerStyle,onClick:r},[_createVNode("div",{class:"".concat(selectorPrefix,"-header-collapse")},[_createVNode("div",{class:classNames("".concat(selectorPrefix,"-header-collapse-icon"),t.value?"":"".concat(selectorPrefix,"-header-collapse-icon-close"))},null),_createVNode(ConditionalRender,{conditional:!!e.title},{default:function(){return[_createVNode("div",{class:"".concat(selectorPrefix,"-header-title")},[e.title])]}})]),_createVNode(ConditionalRender,{conditional:!!e.extra},{default:function(){return[_createVNode("div",{class:"".concat(selectorPrefix,"-header-extra")},[e.extra])]}})]),_createVNode(ConditionalRender,{conditional:!t.value},{default:function(){return[_createVNode("div",{class:classNames("".concat(selectorPrefix,"-body"),e.border?"".concat(selectorPrefix,"-body-border"):"",e.bodyClassName||"",e.title||e.extra?"".concat(selectorPrefix,"-body-exists-header"):""),style:e.bodyStyle},[a.default?a.default():null])]}})])}}});export{collapseProps};
//# sourceMappingURL=Collapse.js.map
