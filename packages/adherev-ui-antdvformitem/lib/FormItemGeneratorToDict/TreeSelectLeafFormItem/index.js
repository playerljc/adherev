"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.for-each.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),TreeSelectFormItem_1=tslib_1.__importDefault(require("../TreeSelectFormItem"));exports.default={name:"TreeSelectLeafFormItem",props:tslib_1.__assign({},TreeSelectFormItem_1.default.props),computed:{targetDataSource:function(){var e=JSON.parse(JSON.stringify(this.dataSource));return function t(e){(e||[]).forEach(function(e){"leaf"in e&&e.leaf?e.disabled=!1:e.disabled=!0,t(e.children)})}(e),e}},render:function(e){return e(TreeSelectFormItem_1.default,{props:tslib_1.__assign(tslib_1.__assign({},this.$props),{dataSource:this.targetDataSource}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}};
//# sourceMappingURL=index.js.map