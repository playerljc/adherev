"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.number.constructor.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),classnames_1=tslib_1.__importDefault(require("classnames")),SearchTable_1=require("../../../SearchTable");exports.default={props:{rowIndex:{type:Number},record:{type:Object},column:{type:Object},columns:{type:Array},editableConfig:{type:Object}},inject:["getContext"],emits:["triggerChange"],methods:{onTrigger:function(){var e=this,r=this.editableConfig,t=r.onBeforeToEdit,r=r.dataIndex,i=this.rowIndex,l=this.record;t?null!=(t=this.editableConfig.onBeforeToEdit({value:l[r],record:l,dataIndex:r,rowIndex:i}))&&t.then(function(){e.$emit("triggerChange")}):this.$emit("triggerChange")},renderTrigger:function(e){return e(ant_design_vue_1.Icon,{attrs:{type:"edit"}})}},render:function(e){var r=this,t=r.editableConfig,i=t.renderToEditTrigger,l=t.useTrigger,t=t.dataIndex,n=r.record,s=r.rowIndex,r=r.column;return l?(l={value:null==n?void 0:n[t],record:n,dataIndex:t,rowIndex:s},n=null==(s=null==(t=null==(n=this.getContext)?void 0:n.call(this))?void 0:t.context)?void 0:s.$scopedSlots,e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editablecell-view")},[e("div",{class:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-editablecell-view-inner"),"ellipsis"in r&&r.ellipsis?"".concat(SearchTable_1.selectorPrefix,"-editablecell-view-inner-ellipsis"):"")},[null==this?void 0:this.$slots.default]),e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editablecell-view-trigger")},[e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editablecell-view-trigger-inner"),on:{click:this.onTrigger}},[(null==(t=null==n?void 0:n[i])?void 0:t.call(n,l))||(null==i?void 0:i(l)),!n[i]&&!i&&this.renderTrigger(e)])])])):null==this?void 0:this.$slots.default}};
//# sourceMappingURL=index.js.map
