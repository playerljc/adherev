import{createVNode as _createVNode,isVNode as _isVNode}from"vue";import"core-js/modules/es.array.sort.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.object.to-string.js";import{__assign}from"tslib";import{defineComponent,h}from"vue";import{array,object}from"vue-types";import Intl from"@baifendian/adherev-util-intl";import{Checkbox,Divider}from"../../AntdvFormItemNormalize";import MulitSelectFormItem from"../MulitSelectFormItem";function _isSlot(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!_isVNode(e)}var selectorPrefix="adherev-ui-antdformitem";export default defineComponent({name:"CheckAllMulitSelectFormItem",props:{selectProps:object().def({}),value:array().def([]),dataSource:array().def([])},emits:["checkAllChange","change"],data:function(){return{checked:!1}},watch:{value:function(e){this.checked=JSON.stringify(JSON.parse(JSON.stringify(e||[])).sort())===JSON.stringify((this.dataSource||[]).map(function(e){return e.value}).sort())},dataSource:function(e){this.checked=JSON.stringify(JSON.parse(JSON.stringify(this.value||[])).sort())===JSON.stringify((e||[]).map(function(e){return e.value}).sort())}},methods:{$onCheckAllChange:function(e){this.checked=e.target.checked,this.$emit("checkAllChange",e.target.checked)},$onChange:function(e){this.checked=e.length===(this.dataSource||[]).map(function(e){return e.value}).length,this.$emit("change",e)},$dropdownRender:function(e){var t,e=e.menuNode;return _createVNode("div",{class:"".concat(selectorPrefix,"-wrap")},[_createVNode("div",{class:"".concat(selectorPrefix,"-checkallwrap")},[_createVNode(Checkbox,{checked:this.checked,onChange:this.$onCheckAllChange},_isSlot(t=Intl.tv("全选"))?t:{default:function(){return[t]}})]),_createVNode(Divider,{style:"margin: 5px 0"},null),e])}},render:function(){var t=this;return h(MulitSelectFormItem,__assign(__assign(__assign({},this.$props),this.$attrs),{selectProps:__assign({dropdownRender:function(e){return t.$dropdownRender(e)}},this.$props.selectProps),onChange:this.$onChange}),this.$slots)}});
//# sourceMappingURL=index.js.map
