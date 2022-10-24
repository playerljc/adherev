import{createVNode as _createVNode}from"vue";import"core-js/modules/es.symbol.js";import"core-js/modules/es.symbol.description.js";import"core-js/modules/es.array.map.js";import classNames from"classnames";import{defineComponent}from"vue";import{array,object,oneOfType,string}from"vue-types";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";var selectorPrefix="adherev-ui-playground-card",cardProps={headerClassName:string().def(""),headerStyle:object().def({}),bodyClassName:string().def(""),bodyStyle:object().def({}),actionClassName:string().def(""),actionStyle:object().def({}),title:oneOfType([string(),object()]),extra:object(),actions:array().def([]),description:object()};export default defineComponent({name:"adv-playground-card",props:cardProps,setup:function(i,e){var c=e.slots;return function(){var e,t,o,n,r,a;return _createVNode("div",{class:selectorPrefix},[_createVNode(ConditionalRender,{conditional:!!i.title||!!i.extra},{default:function(){return[_createVNode("div",{class:classNames("".concat(selectorPrefix,"-header"),i.headerClassName||""),style:i.headerStyle},[_createVNode(ConditionalRender,{conditional:!!i.title},{default:function(){return[_createVNode("div",{class:"".concat(selectorPrefix,"-header-title")},[i.title])]}}),_createVNode(ConditionalRender,{conditional:!!i.extra},{default:function(){return[_createVNode("div",{class:"".concat(selectorPrefix,"-header-extra")},[i.extra])]}})])]}}),_createVNode(ConditionalRender,{conditional:!!c.default},{default:function(){return[_createVNode("div",{class:classNames("".concat(selectorPrefix,"-body"),i.bodyClassName||""),style:i.bodyStyle},[null==(e=null==c?void 0:c.default)?void 0:e.call(c)])]}}),_createVNode(ConditionalRender,{conditional:!(null==(t=i.description)||!t.title)||!(null==(t=i.description)||!t.info)},{default:function(){return[_createVNode("div",{class:"".concat(selectorPrefix,"-description")},[_createVNode(ConditionalRender,{conditional:!(null==(n=i.description)||!n.title)},{default:function(){return[_createVNode("div",{class:"".concat(selectorPrefix,"-description-title")},[null==(o=i.description)?void 0:o.title])]}}),_createVNode(ConditionalRender,{conditional:!(null==(n=i.description)||!n.info)},{default:function(){return[null==(r=i.description)?void 0:r.info]}})])]}}),_createVNode(ConditionalRender,{conditional:!(!i.actions||!i.actions.length)},{default:function(){return[_createVNode("ul",{class:classNames("".concat(selectorPrefix,"-action"),i.actionClassName||""),style:i.actionStyle},[null==(a=i.actions)?void 0:a.map(function(e,t){return _createVNode("li",{key:"".concat(t+1),class:"".concat(selectorPrefix,"-action-item")},[null==(t=c[e])?void 0:t.call(c)])})])]}})])}}});export{cardProps};
//# sourceMappingURL=Card.js.map
