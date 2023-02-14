"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.find.js"),require("core-js/modules/es.object.to-string.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_ui_datedisplay_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-datedisplay")),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),adherev_util_dict_1=tslib_1.__importDefault(require("@baifendian/adherev-util-dict")),index_1=tslib_1.__importDefault(require("../index")),extend=adherev_util_1.default._util.extend,ProSearchTable=index_1.default.ProSearchTable,OptionsWrap=index_1.default.OptionsWrap,DisabledOption=index_1.default.DisabledOption;exports.default=extend({className:"ProTableImpl",mixins:[ProSearchTable("user")],methods:{getFetchListPropName:function(){return"fetchList"},getOrderFieldValue:function(){return"height"},getDataKey:function(){return"records"},getTotalKey:function(){return"total"},getScopedSlots:function(i){var r=this,e=this.$getScopedSlotsProSearchTable(i);return tslib_1.__assign(tslib_1.__assign({},e),{sex:function(t){return adherev_util_dict_1.default.value.SystemTestSexSelect.value.find(function(e){return e.value==t}).label},birthday:function(e){return i(adherev_ui_datedisplay_1.default.DateDisplay10,{attrs:{value:e}})},options:function(e,t){return i(OptionsWrap,[r.renderOptionColumn([{key:"view",value:i("a",{on:{click:function(){return alert(1)}}},["查看"])},{key:"edit",value:i("a",{on:{click:function(){return alert(2)}}},["编辑"])},{key:"delete",value:i(DisabledOption,["删除"])}],{val:e,record:t})])}})},getColumns:function(){return this.$getColumnsProSearchTable([{title:"姓名",dataIndex:"name",key:"name",align:"center",width:200,$search:{type:"input",visible:!0},fixed:"left"},{title:"性别",dataIndex:"sex",key:"sex",align:"center",width:200,scopedSlots:{customRender:"sex"},$search:{type:"select",visible:!0,dictName:"SystemTestSexSelect"}},{title:"籍贯",dataIndex:"homeTown",key:"homeTown",align:"center",width:200,$resizable:!0,$search:{type:"input",visible:!0}},{title:"出生年月",dataIndex:"birthday",key:"birthday",align:"center",sorter:!0,width:200,sortOrder:this.sortOrder("birthday"),scopedSlots:{customRender:"birthday"},$search:{type:"rangePicker",visible:!0,startName:"birthDayStart",endName:"birthDayEnd"}},{title:"所在部门",dataIndex:"deptName",key:"deptName",align:"center",width:200,$search:{type:"input",visible:!0}},{title:"身高",dataIndex:"height",key:"height",align:"center",sorter:!0,sortOrder:this.sortOrder("height"),width:300,$search:{type:"inputNumberDecimal2",visible:!0}},{title:"体重",dataIndex:"width",key:"width",align:"center",sorter:!0,sortOrder:this.sortOrder("width"),width:300,$search:{type:"inputNumberDecimal2",visible:!0}},{title:"操作",dataIndex:"_options",key:"_options",align:"center",scopedSlots:{customRender:"options"},width:200}])}}});
//# sourceMappingURL=ProTable.js.map
