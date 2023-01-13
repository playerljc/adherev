import _defineProperty from"@babel/runtime/helpers/defineProperty";function ownKeys(t,e){var i,l=Object.keys(t);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(t),e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),l.push.apply(l,i)),l}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(i),!0).forEach(function(e){_defineProperty(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.define-properties.js";import"core-js/modules/es.object.define-property.js";import{__assign}from"tslib";import Util from"@baifendian/adherev-util";import EditableCellEdit from"./Edit/EditableCellEdit";import EditableCellView from"./View";var cloneElement=Util._util.cloneElement;export default{data:function(){var e;return{$editableCell:{defaultConfig:{editable:!1,defaultStatus:"view",type:"input",props:{},formItemProps:{},useTrigger:!0,require:!0,dataIndex:null==(e=this.column)?void 0:e.dataIndex,useKeepEdit:!1},watchHandler:[]},editableCell:{status:null==(e=null==(e=this.column)?void 0:e.$editable)?void 0:e.defaultStatus}}},computed:{editableCellEditableConfig:function(){var e;return __assign(__assign({},this.$data.$editableCell.defaultConfig),(null==(e=this.column)?void 0:e.$editable)||{})}},created:function(){var e=this.$data.$editableCell;e.watchHandler.push(this.$watch(function(){var e;return null==(e=null==(e=null==(e=this.getContext)?void 0:e.call(this))?void 0:e.context)?void 0:e.getData()},function(){this.editableCell.status=this.editableCellEditableConfig.defaultStatus})),e.watchHandler.push(this.$watch("editableCellEditableConfig",function(e){this.editableCell.status=e}))},beforeDestroy:function(){this.$data.$editableCell.watchHandler.forEach(function(e){return e()})},methods:{useEditableCell:function(e,t){var i=this,l=t,r=this.editableCellEditableConfig,o=r.editable,r=r.useKeepEdit,n=this.editableCell.status;return o?r?l=cloneElement(t,{children:[e(EditableCellEdit,{props:_objectSpread({},this.$props),attrs:{editableConfig:this.editableCellEditableConfig},on:{triggerChange:function(){return i.editableCell.status="view"}}},[t.children])]}):"view"===n?l=cloneElement(t,{children:[e(EditableCellView,{props:_objectSpread({},this.$props),attrs:{editableConfig:this.editableCellEditableConfig},on:{triggerChange:function(){return i.editableCell.status="edit"}}},[t.children])]}):"edit"===n&&(l=cloneElement(t,{children:[e(EditableCellEdit,{props:_objectSpread({},this.$props),attrs:{editableConfig:this.editableCellEditableConfig},on:{triggerChange:function(){return i.editableCell.status="view"}}},[t.children])]})):l=t,l}}};
//# sourceMappingURL=EditableCell.js.map
