import Table from"./table";export default{mixins:[Table],methods:{getColumns:function(){return[{title:"姓名",key:"group",children:[{title:"姓名1",dataIndex:"name",key:"name",align:"center",width:100,$resizable:!0},{title:"姓名2",dataIndex:"width",key:"width",align:"center",width:100,$resizable:!0}]},{title:"性别",dataIndex:"sex",key:"sex",align:"center",width:200,scopedSlots:{customRender:"sex"}},{title:"籍贯",dataIndex:"homeTown",key:"homeTown",align:"center",width:200},{title:"出生年月",dataIndex:"birthday",key:"birthday",align:"center",sorter:!0,width:200,sortOrder:this.sortOrder("birthday"),scopedSlots:{customRender:"birthday"}},{title:"所在部门",dataIndex:"deptName",key:"deptName",align:"center",width:200},{title:"身高",dataIndex:"height",key:"height",align:"center",sorter:!0,sortOrder:this.sortOrder("height"),width:300}]}}};
//# sourceMappingURL=ColumnResizeTable.js.map
