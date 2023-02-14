import Intl from"@baifendian/adherev-util-intl";import{selectorPrefix}from"../../../SearchTable";export default{name:"adv-searchtable-editable-control",props:{rowKey:{type:String},renderEditorTable:{type:Function},renderSave:{type:Function},renderCancel:{type:Function},onEditor:{type:Function},onSave:{type:Function}},emits:["renderEditorTable","renderSave","renderCancel"],inject:["getFormIns","getContext"],methods:{renderDefaultSave:function(t){return t("a",[Intl.tv("保存")])},renderDefaultCancel:function(t){return t("a",[Intl.tv("取消")])},renderDefaultEditorTable:function(t){return t("a",[Intl.tv("编辑表格")])},$onEditor:function(){var t,e=this;this.onEditor?null!=(t=null==(t=this.onEditor)?void 0:t.call(this))&&t.then(function(){return e.updateTableEdit()}):this.updateTableEdit()},$onSave:function(){var t,e=this,l=null==(l=this.getFormIns)?void 0:l.call(this);null!=(t=null==(l=null==l?void 0:l.validateFields())?void 0:l.then)&&t.call(l,function(t){return e.validateFieldsSuccess(t)})},validateFieldsSuccess:function(t){var e=this;this.onSave?this.onSave(t).then(function(){return e.updateEditorCellTableData(t)}):this.updateEditorCellTableData(t)},updateEditorCellTableData:function(t){var e=this,l=null==(l=null==(l=this.getContext)?void 0:l.call(this))?void 0:l.context;null!=(l=null==l?void 0:l.updateEditorData(t))&&l.then(function(){return e.reset()})},updateTableEdit:function(){var t=null==(t=null==(t=this.getContext)?void 0:t.call(this))?void 0:t.context;t&&(t.isTableEditor=!0)},reset:function(){var t=null==(t=null==(t=this.getContext)?void 0:t.call(this))?void 0:t.context;t&&(t.isTableEditor=!1)}},render:function(t){var e,l,n=null==(n=this.getContext)?void 0:n.call(this).context;return t("div",{class:"".concat(selectorPrefix,"-editor-table-control")},[!(null!=n&&n.isTableEditor)&&t("div",{class:"".concat(selectorPrefix,"-editor-table-control-edit"),on:{click:this.$onEditor}},[(null==(l=null==(e=this.$slots)?void 0:e[this.renderEditorTable])?void 0:l.call(e))||(null==(l=this.renderEditorTable)?void 0:l.call(this,t))||(null==(e=this.renderDefaultEditorTable)?void 0:e.call(this,t))]),(null==n?void 0:n.isTableEditor)&&t("div",{class:"".concat(selectorPrefix,"-editor-table-control-save-cancel")},[t("div",{class:"".concat(selectorPrefix,"-editor-table-control-save-cancel-item"),on:{click:this.$onSave}},[(null==(e=null==(l=this.$slots)?void 0:l[this.renderSave])?void 0:e.call(l))||(null==(n=this.renderSave)?void 0:n.call(this,t))||this.renderDefaultSave(t)]),t("div",{class:"".concat(selectorPrefix,"-editor-table-control-save-cancel-item"),on:{click:this.reset}},[(null==(l=null==(e=this.$slots)?void 0:e[this.renderCancel])?void 0:l.call(e))||(null==(n=this.renderCancel)?void 0:n.call(this,t))||this.renderDefaultCancel(t)])])])}};
//# sourceMappingURL=index.js.map
