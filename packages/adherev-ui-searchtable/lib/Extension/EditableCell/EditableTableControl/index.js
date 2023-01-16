"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),SearchTable_1=require("../../../SearchTable");exports.default={name:"adv-searchtable-editable-control",props:{rowKey:{type:String},renderEditorTable:{type:Function},renderSave:{type:Function},renderCancel:{type:Function},onEditor:{type:Function},onSave:{type:Function}},emits:["renderEditorTable","renderSave","renderCancel"],inject:["getFormIns","getContext"],methods:{renderDefaultSave:function(e){return e("a",[adherev_util_intl_1.default.tv("保存")])},renderDefaultCancel:function(e){return e("a",[adherev_util_intl_1.default.tv("取消")])},renderDefaultEditorTable:function(e){return e("a",[adherev_util_intl_1.default.tv("编辑表格")])},$onEditor:function(){var e,t=this;this.onEditor?null!=(e=null==(e=this.onEditor)?void 0:e.call(this))&&e.then(function(){return t.updateTableEdit()}):this.updateTableEdit()},$onSave:function(){var e,t=this,l=null==(l=this.getFormIns)?void 0:l.call(this);null!=(e=null==(l=null==l?void 0:l.validateFields())?void 0:l.then)&&e.call(l,function(e){return t.validateFieldsSuccess(e)})},validateFieldsSuccess:function(e){var t=this;this.onSave?this.onSave(e).then(function(){return t.updateEditorCellTableData(e)}):this.updateEditorCellTableData(e)},updateEditorCellTableData:function(e){var t=this,l=null==(l=null==(l=this.getContext)?void 0:l.call(this))?void 0:l.context;null!=(l=null==l?void 0:l.updateEditorData(e))&&l.then(function(){return t.reset()})},updateTableEdit:function(){var e=null==(e=null==(e=this.getContext)?void 0:e.call(this))?void 0:e.context;e&&(e.isTableEditor=!0)},reset:function(){var e=null==(e=null==(e=this.getContext)?void 0:e.call(this))?void 0:e.context;e&&(e.isTableEditor=!1)}},render:function(e){var t,l,i=null==(i=this.getContext)?void 0:i.call(this).context;return e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editor-table-control")},[!(null!=i&&i.isTableEditor)&&e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editor-table-control-edit"),on:{click:this.$onEditor}},[(null==(l=null==(t=this.$slots)?void 0:t[this.renderEditorTable])?void 0:l.call(t))||(null==(l=this.renderEditorTable)?void 0:l.call(this,e))||(null==(t=this.renderDefaultEditorTable)?void 0:t.call(this,e))]),(null==i?void 0:i.isTableEditor)&&e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editor-table-control-save-cancel")},[e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editor-table-control-save-cancel-item"),on:{click:this.$onSave}},[(null==(t=null==(l=this.$slots)?void 0:l[this.renderSave])?void 0:t.call(l))||(null==(i=this.renderSave)?void 0:i.call(this,e))||this.renderDefaultSave(e)]),e("div",{class:"".concat(SearchTable_1.selectorPrefix,"-editor-table-control-save-cancel-item"),on:{click:this.reset}},[(null==(l=null==(t=this.$slots)?void 0:t[this.renderCancel])?void 0:l.call(t))||(null==(i=this.renderCancel)?void 0:i.call(this,e))||this.renderDefaultCancel(e)])])])}};
//# sourceMappingURL=index.js.map
