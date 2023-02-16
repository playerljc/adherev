import{createVNode as _createVNode}from"vue";import"core-js/modules/es.array.find.js";import"core-js/modules/es.object.to-string.js";import DateDisplay from"@baifendian/adherev-ui-datedisplay";import Util from"@baifendian/adherev-util";import Dict from"@baifendian/adherev-util-dict";import SearchTable from"../index";var extend=Util._util.extend,ProEditableRowSearchTable=SearchTable.ProEditableRowSearchTable,EditableRowControl=SearchTable.EditableRowControl,ProEditableRowTable=extend({className:"ProEditableRowTable",mixins:[ProEditableRowSearchTable("user")],methods:{getFetchListPropName:function(){return"fetchList"},getOrderFieldValue:function(){return"height"},getDataKey:function(){return"records"},getTotalKey:function(){return"total"},getBodyCellScopedSlots:function(e){var t=e.value,i=e.record,r=e.index,e=e.column.dataIndex;return"sex"===e?Dict.value.SystemTestSexSelect.value.find(function(e){return e.value==i.sex}).label:"birthday"===e?_createVNode(DateDisplay.DateDisplay10,{value:i.birthday},null):"_options"===e?_createVNode(EditableRowControl,{record:i,rowKey:this.getRowKey(),editorRowId:this.editorRowId,rowIndex:r},null):t},getColumns:function(){return this.$getColumnsProEditableRowSearchTable([{title:"姓名",dataIndex:"name",key:"name",align:"center",width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入姓名"}]}},{title:"性别",dataIndex:"sex",key:"sex",align:"center",width:200,$search:{type:"select",visible:!0,dictName:"SystemTestSexSelect"}},{title:"籍贯",dataIndex:"homeTown",key:"homeTown",align:"center",width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入姓名"}]}},{title:"出生年月",dataIndex:"birthday",key:"birthday",align:"center",sorter:!0,width:200,sortOrder:this.sortOrder("birthday"),$search:{type:"rangePicker",visible:!0,startName:"birthDayStart",endName:"birthDayEnd"},$editable:{editable:!0,type:"datePicker",rules:[{required:!0,message:"请选择"}]}},{title:"所在部门",dataIndex:"deptName",key:"deptName",align:"center",width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入所在部门"}]}},{title:"身高",dataIndex:"height",key:"height",align:"center",sorter:!0,sortOrder:this.sortOrder("height"),$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请输入体重"}]}},{title:"体重",dataIndex:"width",key:"width",align:"center",sorter:!0,sortOrder:this.sortOrder("width"),$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请输入体重"}]}},{title:"操作",dataIndex:"_options",key:"_options",align:"center",width:200}])}}});export default ProEditableRowTable;
//# sourceMappingURL=ProEditableRowTable.js.map
