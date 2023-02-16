"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),index_1=tslib_1.__importDefault(require("../index")),extend=adherev_util_1.default._util.extend,ProDragSortEditableSearchTable=index_1.default.ProDragSortEditableSearchTable,EditableTableControl=index_1.default.EditableTableControl,ProRowDragSortEditableTable=extend({className:"ProRowDragSortEditableTable",mixins:[ProDragSortEditableSearchTable("user")],methods:{getFetchListPropName:function(){return"fetchList"},getOrderFieldValue:function(){return"height"},getDataKey:function(){return"records"},getTotalKey:function(){return"total"},getColumns:function(){return this.$getColumnsProDragSortEditableSearchTable([{title:"姓名",dataIndex:"name",key:"name",align:"center",width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入姓名"}]}},{title:"性别",dataIndex:"sex",key:"sex",align:"center",width:200,$search:{type:"select",visible:!0,dictName:"SystemTestSexSelect"}},{title:"籍贯",dataIndex:"homeTown",key:"homeTown",align:"center",width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入姓名"}]}},{title:"出生年月",dataIndex:"birthday",key:"birthday",align:"center",sorter:!0,width:200,sortOrder:this.sortOrder("birthday"),$search:{type:"rangePicker",visible:!0,startName:"birthDayStart",endName:"birthDayEnd"},$editable:{editable:!0,type:"datePicker",rules:[{required:!0,message:"请选择"}]}},{title:"所在部门",dataIndex:"deptName",key:"deptName",align:"center",width:200,$search:{type:"input",visible:!0}},{title:"身高",dataIndex:"height",key:"height",align:"center",sorter:!0,sortOrder:this.sortOrder("height"),width:300,$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请输入体重"}]}},{title:"体重",dataIndex:"width",key:"width",align:"center",sorter:!0,sortOrder:this.sortOrder("width"),width:300,$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请输入体重"}]}}])},renderSearchFooterItems:function(e){return tslib_1.__spreadArray([(0,_vue.createVNode)(EditableTableControl,null,null)],e,!0)}}});exports.default=ProRowDragSortEditableTable;
//# sourceMappingURL=ProRowDragSortEditableTable.js.map
