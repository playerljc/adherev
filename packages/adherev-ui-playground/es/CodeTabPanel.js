import{isVNode as _isVNode,createVNode as _createVNode}from"vue";import"core-js/modules/es.array.map.js";import"core-js/modules/es.object.to-string.js";import{__rest}from"tslib";import{defineComponent,ref,watch}from"vue";import{array,string}from"vue-types";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import CodePanel from"./CodePanel";import SimpleTabs from"./SimpleTabs";import TabPanel from"./SimpleTabs/TabPanel";function _isSlot(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!_isVNode(e)}var selectPrefix="adherev-ui-playground-code-tab-panel",codeTabPanelProps={active:string().def(""),config:array().def([])};export default defineComponent({name:"adv-playground-code-tab-panel",emits:["change"],props:codeTabPanelProps,setup:function(t,e){var o=e.emit,n=ref(t.active);return watch(function(){return t.active},function(e){return n.value=e}),function(){var e;return _createVNode("div",{class:selectPrefix},[_createVNode(SimpleTabs,{defaultActiveKey:n.value,onChange:function(e){n.value=e,o("change",e)}},_isSlot(e=t.config.map(function(e){var t=e.key,o=e.title,r=__rest(e,["key","title"]);return _createVNode(TabPanel,{title:o,key:t,index:t},{default:function(){return[_createVNode(ConditionalRender,{conditional:n.value===t},{default:function(){return[_createVNode(CodePanel,r,null)]}})]}})}))?e:{default:function(){return[e]}})])}}});export{codeTabPanelProps};
//# sourceMappingURL=CodeTabPanel.js.map
