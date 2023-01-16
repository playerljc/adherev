import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import{__assign}from"tslib";import Util from"@baifendian/adherev-util";import SearchTable from"../index";var extend=Util._util.extend,ProDragSortEditableCellSearchTable=SearchTable.ProDragSortEditableCellSearchTable,OptionsWrap=SearchTable.OptionsWrap,DisabledOption=SearchTable.DisabledOption;export default extend({className:"ProRowDragSortEditableCellTable",mixins:[ProDragSortEditableCellSearchTable("user")],methods:{getFetchListPropName:function(){return"fetchList"},getOrderFieldValue:function(){return"height"},getDataKey:function(){return"records"},getTotalKey:function(){return"total"},getScopedSlots:function(r){var a=this,e=this.$getScopedSlotsProDragSortEditableCellSearchTable(r);return __assign(__assign({},e),{options:function(e,t){return r(OptionsWrap,[a.renderOptionColumn([{key:"view",value:r("a",{on:{click:function(){return alert(1)}}},["查看"])},{key:"edit",value:r("a",{on:{click:function(){return alert(2)}}},["编辑"])},{key:"delete",value:r(DisabledOption,["删除"])}],{val:e,record:t})])}})},getColumns:function(){var i=this;return this.$getColumnsProDragSortEditableCellSearchTable([{title:"姓名",dataIndex:"name",key:"name",align:"center",width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入姓名"}],onSave:function(e){var t=e.value,r=e.record,a=e.dataIndex;return new Promise(function(e){i.updateEditorCellDate({record:r,dataIndex:a,value:t}).then(function(){return e()})})}}},{title:"性别",dataIndex:"sex",key:"sex",align:"center",width:200,scopedSlots:{customRender:"sex"},$search:{type:"select",visible:!0,dictName:"SystemTestSexSelect"}},{title:"籍贯",dataIndex:"homeTown",key:"homeTown",align:"center",width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入姓名"}],onSave:function(e){var t=e.value,r=e.record,a=e.dataIndex;return new Promise(function(e){i.updateEditorCellDate({record:r,dataIndex:a,value:t}).then(function(){return e()})})}}},{title:"出生年月",dataIndex:"birthday",key:"birthday",align:"center",sorter:!0,width:200,sortOrder:this.sortOrder("birthday"),scopedSlots:{customRender:"birthday"},$search:{type:"rangePicker",visible:!0,startName:"birthDayStart",endName:"birthDayEnd"},$editable:{editable:!0,type:"datePicker",rules:[{required:!0,message:"请选择"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){i.updateEditorCellDateData({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"所在部门",dataIndex:"deptName",key:"deptName",align:"center",width:200,$search:{type:"input",visible:!0}},{title:"身高",dataIndex:"height",key:"height",align:"center",sorter:!0,sortOrder:this.sortOrder("height"),width:300,$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请输入体重"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){i.updateEditorCellDate({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"体重",dataIndex:"width",key:"width",align:"center",sorter:!0,sortOrder:this.sortOrder("width"),width:300,$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请输入体重"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){i.updateEditorCellDate({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"操作",dataIndex:"_options",key:"_options",align:"center",scopedSlots:{customRender:"options"},width:200}])}}});
//# sourceMappingURL=ProRowDragSortEditableCellTable.js.map
