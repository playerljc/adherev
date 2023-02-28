import{createVNode as _createVNode}from"vue";import"core-js/modules/es.array.map.js";import{defineComponent}from"vue";import{string}from"vue-types";import Intl from"@baifendian/adherev-util-intl";import{selectorPrefix}from"../../SearchTable";import{TableDensity}from"../../types";export default defineComponent({props:{density:string().def(TableDensity.DEFAULT)},emits:["reset","change"],setup:function(t,e){var n=e.emit,a=[{label:Intl.tv("缺省"),value:TableDensity.DEFAULT},{label:Intl.tv("中等"),value:TableDensity.MIDDLE},{label:Intl.tv("紧凑"),value:TableDensity.SMALL}];return function(){return _createVNode("div",{class:"".concat(selectorPrefix,"-table-density-setting")},[_createVNode("div",{class:"".concat(selectorPrefix,"-table-density-setting-header")},[_createVNode("a",{onClick:function(){return n("reset")}},[Intl.tv("重置")])]),_createVNode("div",{class:"".concat(selectorPrefix,"-table-density-setting-body")},[_createVNode("ul",null,[a.map(function(e){return _createVNode("li",{key:e.value,class:t.density===e.value?"active":"",onClick:function(){n("change",e.value)}},[e.label])})])])])}}});
//# sourceMappingURL=setting.js.map
