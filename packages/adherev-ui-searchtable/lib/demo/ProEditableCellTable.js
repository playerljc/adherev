"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),index_1=tslib_1.__importDefault(require("../index")),extend=adherev_util_1.default._util.extend,ProEditableCellSearchTable=index_1.default.ProEditableCellSearchTable,OptionsWrap=index_1.default.OptionsWrap,DisabledOption=index_1.default.DisabledOption;exports.default=extend({className:"ProEditableCellTable",mixins:[ProEditableCellSearchTable("user")],methods:{getFetchListPropName:function(){return"fetchList"},getOrderFieldValue:function(){return"height"},getDataKey:function(){return"records"},getTotalKey:function(){return"total"},getScopedSlots:function(r){var i=this,e=this.$getScopedSlotsProEditableCellSearchTable(r);return tslib_1.__assign(tslib_1.__assign({},e),{options:function(e,t){return r(OptionsWrap,[i.renderOptionColumn([{key:"view",value:r("a",{on:{click:function(){return alert(1)}}},["查看"])},{key:"edit",value:r("a",{on:{click:function(){return alert(2)}}},["编辑"])},{key:"delete",value:r(DisabledOption,["删除"])}],{val:e,record:t})])}})},getColumns:function(){var a=this;return this.$getColumnsProEditableCellSearchTable([{title:"姓名",dataIndex:"name",key:"name",align:"center",width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入姓名"}],onSave:function(e){var t=e.value,r=e.record,i=e.dataIndex;return new Promise(function(e){a.updateEditorCellDate({record:r,dataIndex:i,value:t}).then(function(){return e()})})}}},{title:"性别",dataIndex:"sex",key:"sex",align:"center",width:200,scopedSlots:{customRender:"sex"},$search:{type:"select",visible:!0,dictName:"SystemTestSexSelect"}},{title:"籍贯",dataIndex:"homeTown",key:"homeTown",align:"center",width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入姓名"}],onSave:function(e){var t=e.value,r=e.record,i=e.dataIndex;return new Promise(function(e){a.updateEditorCellDate({record:r,dataIndex:i,value:t}).then(function(){return e()})})}}},{title:"出生年月",dataIndex:"birthday",key:"birthday",align:"center",sorter:!0,width:200,sortOrder:this.sortOrder("birthday"),scopedSlots:{customRender:"birthday"},$search:{type:"rangePicker",visible:!0,startName:"birthDayStart",endName:"birthDayEnd"},$editable:{editable:!0,type:"datePicker",rules:[{required:!0,message:"请选择"}],onSave:function(e){var t=e.record,r=e.dataIndex,i=e.value;return new Promise(function(e){a.updateEditorCellDateData({record:t,dataIndex:r,value:i}).then(function(){return e()})})}}},{title:"所在部门",dataIndex:"deptName",key:"deptName",align:"center",width:200,$search:{type:"input",visible:!0}},{title:"身高",dataIndex:"height",key:"height",align:"center",sorter:!0,sortOrder:this.sortOrder("height"),width:300,$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请输入体重"}],onSave:function(e){var t=e.record,r=e.dataIndex,i=e.value;return new Promise(function(e){a.updateEditorCellDate({record:t,dataIndex:r,value:i}).then(function(){return e()})})}}},{title:"体重",dataIndex:"width",key:"width",align:"center",sorter:!0,sortOrder:this.sortOrder("width"),width:300,$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请输入体重"}],onSave:function(e){var t=e.record,r=e.dataIndex,i=e.value;return new Promise(function(e){a.updateEditorCellDate({record:t,dataIndex:r,value:i}).then(function(){return e()})})}}},{title:"操作",dataIndex:"_options",key:"_options",align:"center",scopedSlots:{customRender:"options"},width:200}])}}});
//# sourceMappingURL=ProEditableCellTable.js.map
