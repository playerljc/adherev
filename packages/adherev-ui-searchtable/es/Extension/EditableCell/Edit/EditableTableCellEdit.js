import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.concat.js";import{__assign}from"tslib";import{Form,Icon}from"ant-design-vue";import{selectorPrefix}from"../../../SearchTable";import FormItemGenerator from"./FormItemGenerator";export default{props:{rowIndex:{type:Number},record:{type:Object},column:{type:Object},columns:{type:Array},editableConfig:{type:Object}},emits:["triggerChange"],inject:["getFormIns","getContext"],methods:{renderFormItem:function(e){var t=this.editableConfig,r=t.useKeepEdit,n=t.dataIndex,i=t.type,o=t.render,l=t.dictName,t=t.renderChildren,d=this.rowIndex,a=this.record,c=this.getFormIns(),r=__assign({autoFocus:!r},this.editableConfig.props),e=FormItemGenerator.render(e,{type:i,props:r,dictName:l,renderChildren:t,form:c,dataIndex:n,rowIndex:d}),t=null==(l=null==(r=null==(i=this.getContext)?void 0:i.call(this))?void 0:r.context)?void 0:l.$scopedSlots,i={value:null==a?void 0:a[n],record:a,dataIndex:n,rowIndex:d,form:c,children:e};return(null==(r=null==t?void 0:t[o])?void 0:r.call(t,i))||(null==o?void 0:o(i))||e},renderDefaultSaveTrigger:function(e){return e(Icon,{attrs:{type:"check"}})},renderDefaultCancelTrigger:function(e){return e(Icon,{attrs:{type:"close"}})},onSaveTrigger:function(){var t=this,e=this.editableConfig,r=e.dataIndex,n=e.onSave,i=this.rowIndex,o=this.record,e=this.getFormIns(),l=this.getValue();n?null!=e&&e.validateFields().then(function(e){null!=(e=n({value:l,values:e,record:o,dataIndex:r,rowIndex:i}))&&e.then(function(){t.$emit("triggerChange")})}):this.$emit("triggerChange")},onCancelTrigger:function(){var e=this,t=this.editableConfig,r=t.dataIndex,t=t.onBeforeCancel,n=this.rowIndex,i=this.record,o=this.getValue();t?null!=(t=t({value:o,record:i,dataIndex:r,rowIndex:n}))&&t.then(function(){return e.$emit("triggerChange")}):this.$emit("triggerChange")},getValue:function(){var e;return null==(e=null==(e=this.getFormIns)?void 0:e.call(this))?void 0:e.getFieldValue("".concat(this.editableConfig.dataIndex,"_").concat(this.rowIndex))}},render:function(e){var t=this.editableConfig,r=t.useTrigger,n=t.useKeepEdit,i=t.renderSaveTrigger,o=t.renderCancelTrigger,l=t.dataIndex,d=t.type,a=t.render,c=t.rules,t=t.formItemProps,s=this.record,u=this.rowIndex,g=null==(g=null==(g=this.getContext)?void 0:g.call(this))?void 0:g.context,v=null==g?void 0:g.$scopedSlots,m=this.getFormIns(),h=m.getFieldDecorator,m={value:null==s?void 0:s[l],record:s,dataIndex:l,rowIndex:u,form:m},I={value:null==s?void 0:s[l],record:s,dataIndex:l,rowIndex:u},x={value:null==s?void 0:s[l],record:s,dataIndex:l,rowIndex:u};return e("div",{class:"".concat(selectorPrefix,"-editablecell-edit")},[e("div",{class:"".concat(selectorPrefix,"-editablecell-edit-inner")},[e(Form.Item,[h("".concat(l,"_").concat(u),__assign({rules:c,initialValue:null==g?void 0:g.valueToFormItemValue({type:d,record:s,dataIndex:l})},t||{}))("custom"!==d?this.renderFormItem(e):(null==(h=null==v?void 0:v[a])?void 0:h.call(v,m))||(null==a?void 0:a(m)))])]),!!r&&!n&&e("div",{class:"".concat(selectorPrefix,"-editablecell-edit-trigger")},[e("div",{class:"".concat(selectorPrefix,"-editablecell-edit-trigger-inner")},[e("div",{class:"".concat(selectorPrefix,"-editablecell-edit-trigger-save"),on:{click:this.onSaveTrigger}},[(null==(u=null==v?void 0:v[i])?void 0:u.call(v,I))||(null==i?void 0:i(I))||this.renderDefaultSaveTrigger(e)]),e("div",{class:"".concat(selectorPrefix,"-editablecell-edit-trigger-cancel"),on:{click:this.onCancelTrigger}},[(null==(c=null==v?void 0:v[o])?void 0:c.call(v,x))||(null==o?void 0:o(x))||this.renderDefaultCancelTrigger(e)])])])])}};
//# sourceMappingURL=EditableTableCellEdit.js.map
