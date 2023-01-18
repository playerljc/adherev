import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.reduce.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.array.concat.js";import{__assign}from"tslib";import{Form,Icon}from"ant-design-vue";import moment from"moment";import{selectorPrefix}from"../../../SearchTable";import FormItemGenerator from"./FormItemGenerator";export default{props:{rowIndex:{type:Number},record:{type:Object},column:{type:Object},columns:{type:Array},editableConfig:{type:Object}},emits:["triggerChange"],inject:["getFormIns","getContext"],methods:{updateEditorCellData:function(){var e,t=this.editableConfig.dataIndex,r=this.record,n=this.rowIndex,i=this.getValue();return i instanceof moment?null==(e=null==(e=null==(e=this.getContext)?void 0:e.call(this))?void 0:e.context)?void 0:e.updateEditorCellDateData({record:r,dataIndex:t,value:i,rowIndex:n}):null==(e=null==(e=null==(e=this.getContext)?void 0:e.call(this))?void 0:e.context)?void 0:e.updateEditorCellDate({record:r,dataIndex:t,value:i,rowIndex:n})},renderFormItem:function(e){var i=this,t=this.editableConfig,r=t.useKeepEdit,o=t.dataIndex,n=t.type,l=t.render,d=t.dictName,t=t.renderChildren,a=this.rowIndex,s=this.record,c=this.getFormIns(),r=__assign({autoFocus:!r},this.editableConfig.props),u=Object.keys((null==(u=this.editableConfig)?void 0:u.listeners)||{}).reduce(function(e,n){return e[n]=function(e){var t,r;null!=(r=null==(r=i.editableConfig)?void 0:(t=r.listeners)[n])&&r.call(t,e,{form:c,dataIndex:o,rowIndex:a,updateEditorCellData:function(){return i.updateEditorCellData()}})},e},{}),e=FormItemGenerator.render(e,{type:n,props:r,listeners:u,dictName:d,renderChildren:t,form:c,dataIndex:o,rowIndex:a}),d=null==(u=null==(r=null==(n=this.getContext)?void 0:n.call(this))?void 0:r.context)?void 0:u.$scopedSlots,t={value:null==s?void 0:s[o],record:s,dataIndex:o,rowIndex:a,form:c,updateEditorCellData:function(){return i.updateEditorCellData()},children:e};return(null==(n=null==d?void 0:d[l])?void 0:n.call(d,t))||(null==l?void 0:l(t))||e},renderDefaultSaveTrigger:function(e){return e(Icon,{attrs:{type:"check"}})},renderDefaultCancelTrigger:function(e){return e(Icon,{attrs:{type:"close"}})},onSaveTrigger:function(){var t=this,e=this.editableConfig,r=e.dataIndex,n=e.onSave,i=this.rowIndex,o=this.record,e=this.getFormIns(),l=this.getValue();n?null!=e&&e.validateFields().then(function(e){null!=(e=n({value:l,values:e,record:o,dataIndex:r,rowIndex:i}))&&e.then(function(){t.$emit("triggerChange")})}):this.$emit("triggerChange")},onCancelTrigger:function(){var e=this,t=this.editableConfig,r=t.dataIndex,t=t.onBeforeCancel,n=this.rowIndex,i=this.record,o=this.getValue();t?null!=(t=t({value:o,record:i,dataIndex:r,rowIndex:n}))&&t.then(function(){return e.$emit("triggerChange")}):this.$emit("triggerChange")},getValue:function(){var e;return null==(e=null==(e=this.getFormIns)?void 0:e.call(this))?void 0:e.getFieldValue("".concat(this.editableConfig.dataIndex,"_").concat(this.rowIndex))}},render:function(e){var t=this,r=this.editableConfig,n=r.useTrigger,i=r.useKeepEdit,o=r.renderSaveTrigger,l=r.renderCancelTrigger,d=r.dataIndex,a=r.type,s=r.render,c=r.rules,r=r.formItemProps,u=this.record,g=this.rowIndex,m=null==(m=null==(m=this.getContext)?void 0:m.call(this))?void 0:m.context,v=null==m?void 0:m.$scopedSlots,h=this.getFormIns(),x=h.getFieldDecorator,h={value:null==u?void 0:u[d],record:u,dataIndex:d,rowIndex:g,form:h,updateEditorCellData:function(){return t.updateEditorCellData()}},f={value:null==u?void 0:u[d],record:u,dataIndex:d,rowIndex:g},I={value:null==u?void 0:u[d],record:u,dataIndex:d,rowIndex:g},m=null==m?void 0:m.valueToFormItemValue({type:a,record:u,dataIndex:d});return e("div",{class:"".concat(selectorPrefix,"-editablecell-edit")},[e("div",{class:"".concat(selectorPrefix,"-editablecell-edit-inner")},[e(Form.Item,[x("".concat(d,"_").concat(g),__assign({rules:c,initialValue:m},r||{}))("custom"!==a?this.renderFormItem(e):(null==(u=null==v?void 0:v[s])?void 0:u.call(v,h))||(null==s?void 0:s(h)))])]),!!n&&!i&&e("div",{class:"".concat(selectorPrefix,"-editablecell-edit-trigger")},[e("div",{class:"".concat(selectorPrefix,"-editablecell-edit-trigger-inner")},[e("div",{class:"".concat(selectorPrefix,"-editablecell-edit-trigger-save"),on:{click:this.onSaveTrigger}},[(null==(x=null==v?void 0:v[o])?void 0:x.call(v,f))||(null==o?void 0:o(f))||this.renderDefaultSaveTrigger(e)]),e("div",{class:"".concat(selectorPrefix,"-editablecell-edit-trigger-cancel"),on:{click:this.onCancelTrigger}},[(null==(d=null==v?void 0:v[l])?void 0:d.call(v,I))||(null==l?void 0:l(I))||this.renderDefaultCancelTrigger(e)])])])])}};
//# sourceMappingURL=EditableCellEdit.js.map
