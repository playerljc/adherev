import _defineProperty from"@babel/runtime/helpers/defineProperty";function ownKeys(r,e){var t,o=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),o.push.apply(o,t)),o}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.define-properties.js";import"core-js/modules/es.object.define-property.js";import{__assign,__spreadArray}from"tslib";import{Transfer}from"../../AntdvFormItemNormalize";import MulitSelectFormItem from"../MulitSelectFormItem";export default{name:"TransferSelectFormItem",props:{selectProps:{type:Object,default:function(){return{}}},transferProps:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},emits:["change"],data:function(){return{inputValue:"",selectedKeys:[]}},methods:{$renderDropdownRender:function(e){var t=this,r=this.inputValue?this.dataSource.filter(function(e){return-1!==e.label.indexOf(t.inputValue)}):this.dataSource;return e(Transfer,{attrs:{selectedKeys:this.selectedKeys,targetKeys:this.value,dataSource:r.map(function(e){return{key:"".concat(e.value),title:e.label,description:e.label}}),render:function(e){return e.title}},props:_objectSpread({},this.transferProps),on:{change:function(e){t.$emit("change",e)},selectChange:function(e,r){t.selectedKeys=__spreadArray(__spreadArray([],e,!0),r,!0)}}})}},render:function(e){var r=this;return e(MulitSelectFormItem,{props:__assign(__assign({},this.$props),{selectProps:__assign({dropdownRender:function(){return r.$renderDropdownRender(e)},filterOption:function(){return!1}},this.$props.selectProps)}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:__assign(__assign({},this.$listeners),{search:function(e){r.inputValue=e},change:function(e){r.$emit("change",e),e&&(!Array.isArray(e)||e.length)||(r.inputValue="")}})},this.$slots.default)}};
//# sourceMappingURL=index.js.map
