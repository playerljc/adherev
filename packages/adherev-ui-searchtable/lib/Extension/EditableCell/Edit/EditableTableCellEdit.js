"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.array.concat.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),ant_design_vue_1=require("ant-design-vue"),SearchTable_1=require("../../../SearchTable"),FormItemGenerator_1=tslib_1.__importDefault(require("./FormItemGenerator"));exports.default={props:{rowIndex:{type:Number},record:{type:Object},column:{type:Object},columns:{type:Array},editableConfig:{type:Object}},emits:["triggerChange"],inject:["getFormIns","getContext"],methods:{renderFormItem:function(e){var r=this.editableConfig,t=r.useKeepEdit,n=r.dataIndex,i=r.type,l=r.render,o=r.dictName,r=r.renderChildren,a=this.rowIndex,d=this.record,c=this.getFormIns(),t=tslib_1.__assign({autoFocus:!t},this.editableConfig.props),e=FormItemGenerator_1.default.render(e,{type:i,props:t,dictName:o,renderChildren:r,form:c,dataIndex:n,rowIndex:a}),r=null==(o=null==(t=null==(i=this.getContext)?void 0:i.call(this))?void 0:t.context)?void 0:o.$scopedSlots,i={value:null==d?void 0:d[n],record:d,dataIndex:n,rowIndex:a,form:c,children:e};return(null==(t=null==r?void 0:r[l])?void 0:t.call(r,i))||(null==l?void 0:l(i))||e},renderDefaultSaveTrigger:function(e){return e(ant_design_vue_1.Icon,{attrs:{type:"check"}})},renderDefaultCancelTrigger:function(e){return e(ant_design_vue_1.Icon,{attrs:{type:"close"}})},onSaveTrigger:function(){var r=this,e=this.editableConfig,t=e.dataIndex,n=e.onSave,i=this.rowIndex,l=this.record,e=this.getFormIns(),o=this.getValue();n?null!=e&&e.validateFields().then(function(e){null!=(e=n({value:o,values:e,record:l,dataIndex:t,rowIndex:i}))&&e.then(function(){r.$emit("triggerChange")})}):this.$emit("triggerChange")},onCancelTrigger:function(){var e=this,r=this.editableConfig,t=r.dataIndex,r=r.onBeforeCancel,n=this.rowIndex,i=this.record,l=this.getValue();r?null!=(r=r({value:l,record:i,dataIndex:t,rowIndex:n}))&&r.then(function(){return e.$emit("triggerChange")}):this.$emit("triggerChange")},getValue:function(){var e;return null==(e=null==(e=this.getFormIns)?void 0:e.call(this))?void 0:e.getFieldValue("".concat(this.editableConfig.dataIndex,"_").concat(this.rowIndex))}},render:function(e){var r=this.editableConfig,t=r.useTrigger,n=r.useKeepEdit,i=r.renderSaveTrigger,l=r.renderCancelTrigger,o=r.dataIndex,a=r.type,d=r.render,c=r.rules,r=r.formItemProps,s=this.record,u=this.rowIndex,g=null==(g=null==(g=this.getContext)?void 0:g.call(this))?void 0:g.context,v=null==g?void 0:g.$scopedSlots,h=this.getFormIns(),m=h.getFieldDecorator,h={value:null==s?void 0:s[o],record:s,dataIndex:o,rowIndex:u,form:h},I={value:null==s?void 0:s[o],record:s,dataIndex:o,rowIndex:u},x={value:null==s?void 0:s[o],record:s,dataIndex:o,rowIndex:u};return e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit")},[e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-inner")},[e(ant_design_vue_1.Form.Item,[m("".concat(o,"_").concat(u),tslib_1.__assign({rules:c,initialValue:null==g?void 0:g.valueToFormItemValue({type:a,record:s,dataIndex:o})},r||{}))("custom"!==a?this.renderFormItem(e):(null==(m=null==v?void 0:v[d])?void 0:m.call(v,h))||(null==d?void 0:d(h)))])]),!!t&&!n&&e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-trigger")},[e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-trigger-inner")},[e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-trigger-save"),on:{click:this.onSaveTrigger}},[(null==(u=null==v?void 0:v[i])?void 0:u.call(v,I))||(null==i?void 0:i(I))||this.renderDefaultSaveTrigger(e)]),e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-trigger-cancel"),on:{click:this.onCancelTrigger}},[(null==(c=null==v?void 0:v[l])?void 0:c.call(v,x))||(null==l?void 0:l(x))||this.renderDefaultCancelTrigger(e)])])])])}};
//# sourceMappingURL=EditableTableCellEdit.js.map