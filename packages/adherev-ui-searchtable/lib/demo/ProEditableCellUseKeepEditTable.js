"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),SearchTable_1=tslib_1.__importDefault(require("../SearchTable")),extend=adherev_util_1.default._util.extend,SearchTableImplementFactory=SearchTable_1.default.SearchTableImplementFactory,ProEditableCellSearchTable=SearchTable_1.default.ProEditableCellSearchTable,OptionsWrap=SearchTable_1.default.OptionsWrap,DisabledOption=SearchTable_1.default.DisabledOption;exports.default=SearchTableImplementFactory(extend({className:"ProEditableCellUseKeepEditTable",mixins:[ProEditableCellSearchTable("user")],methods:{getComponentId:function(){return"ProEditableCellUseKeepEditTable"},getFetchListPropName:function(){return"fetchList"},getOrderFieldValue:function(){return"height"},getDataKey:function(){return"records"},getTotalKey:function(){return"total"},getScopedSlots:function(i){var r=this,e=this.$getScopedSlotsProEditableCellSearchTable(i);return tslib_1.__assign(tslib_1.__assign({},e),{options:function(e,t){return i(OptionsWrap,[r.renderOptionColumn([{key:"view",value:i("a",{on:{click:function(){return alert(1)}}},["查看"])},{key:"edit",value:i("a",{on:{click:function(){return alert(2)}}},["编辑"])},{key:"delete",value:i(DisabledOption,["删除"])}],{val:e,record:t})])}})},getColumns:function(){return this.$getColumnsProEditableCellSearchTable([{title:"姓名",dataIndex:"name",key:"name",align:"center",width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入姓名"}],useKeepEdit:!0,listeners:{blur:function(e,t){(0,t.updateEditorCellData)()}}}},{title:"性别",dataIndex:"sex",key:"sex",align:"center",width:200,scopedSlots:{customRender:"sex"},$search:{type:"select",visible:!0,dictName:"SystemTestSexSelect"}},{title:"籍贯",dataIndex:"homeTown",key:"homeTown",align:"center",width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入姓名"}],useKeepEdit:!0,props:{onBlur:function(e,t){(0,t.updateEditorCellData)()}}}},{title:"出生年月",dataIndex:"birthday",key:"birthday",align:"center",sorter:!0,width:200,sortOrder:this.sortOrder("birthday"),scopedSlots:{customRender:"birthday"},$search:{type:"rangePicker",visible:!0,startName:"birthDayStart",endName:"birthDayEnd"},$editable:{editable:!0,type:"datePicker",rules:[{required:!0,message:"请选择"}],useKeepEdit:!0,props:{onBlur:function(e,t){(0,t.updateEditorCellData)()}}}},{title:"所在部门",dataIndex:"deptName",key:"deptName",align:"center",width:200,$search:{type:"input",visible:!0}},{title:"身高",dataIndex:"height",key:"height",align:"center",sorter:!0,sortOrder:this.sortOrder("height"),width:300,$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请输入体重"}],useKeepEdit:!0,props:{onBlur:function(e,t){(0,t.updateEditorCellData)()}}}},{title:"体重",dataIndex:"width",key:"width",align:"center",sorter:!0,sortOrder:this.sortOrder("width"),width:300,$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请输入体重"}],useKeepEdit:!0,props:{onBlur:function(e,t){(0,t.updateEditorCellData)()}}}},{title:"操作",dataIndex:"_options",key:"_options",align:"center",scopedSlots:{customRender:"options"},width:200}])}}}));
//# sourceMappingURL=ProEditableCellUseKeepEditTable.js.map
