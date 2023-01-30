import _InputNumber from"ant-design-vue/es/input-number";import _Input from"ant-design-vue/es/input";import _DatePicker from"ant-design-vue/es/date-picker";import _Select from"ant-design-vue/es/select";import"core-js/modules/es.string.trim.js";import"core-js/modules/es.array.map.js";import moment from"moment";import Ajax from"@baifendian/adherev-util-communication-ajax";import Resource from"@baifendian/adherev-util-resource";import SearchTable from"../index";var request=new Ajax(""),Option=_Select.Option,RangePicker=_DatePicker.RangePicker,SearchTableImplement=SearchTable.SearchTableImplement,SearchForm=SearchTable.SearchForm,SearchFormRow=SearchTable.SearchFormRow,SearchFormLabel=SearchTable.SearchFormLabel,SearchFormValue=SearchTable.SearchFormValue,SearchTableImplementMixins=SearchTableImplement();export default{mixins:[SearchTableImplementMixins],data:function(){return{loading:!1,dataSource:{total:0,list:[]}}},props:{pagination:{type:Boolean,default:!0}},watch:{pagination:function(e,t){e!==t&&(this.scrollY=0)}},methods:{getParams:function(){return{name:"",sex:"",startTime:null,endTime:null,deptCode:"",homeTown:"",width:"",height:""}},getFetchDataParams:function(){var e=this.searchParams,t=e.startTime,e=e.endTime;return{startTime:t?t.format(Resource.Dict.value.ResourceMomentFormat15.value()):null,endTime:e?e.format(Resource.Dict.value.ResourceMomentFormat15.value()):null}},getData:function(){return this.dataSource.list},getTotal:function(){return this.dataSource.total},getColumns:function(){return[{title:"姓名",dataIndex:"name",key:"name",align:"center",width:200},{title:"性别",dataIndex:"sex",key:"sex",align:"center",width:200,scopedSlots:{customRender:"sex"}},{title:"籍贯",dataIndex:"homeTown",key:"homeTown",align:"center",width:200},{title:"出生年月",dataIndex:"birthday",key:"birthday",align:"center",sorter:!0,width:200,sortOrder:this.sortOrder("birthday"),scopedSlots:{customRender:"birthday"}},{title:"所在部门",dataIndex:"deptName",key:"deptName",align:"center",width:200},{title:"身高",dataIndex:"height",key:"height",align:"center",sorter:!0,sortOrder:this.sortOrder("height"),width:300},{title:"体重",dataIndex:"width",key:"width",align:"center",sorter:!0,sortOrder:this.sortOrder("width"),width:300}]},getScopedSlots:function(){return{sex:function(e){return Resource.Dict.value.ResourceNormalSexMap.value.get(e).label},birthday:function(e){return e?moment(e).format(Resource.Dict.value.ResourceMomentFormat10.value()):""}}},renderSearchForm:function(t){var a=this;return t(SearchForm,[t(SearchFormRow,[t(SearchFormLabel,{style:"width: 120px;"},["姓名："]),t(SearchFormValue,[t(_Input,{style:"width: 90%",attrs:{placeholder:"姓名",value:this.name},on:{change:function(e){a.name=e.target.value.trim()}}})]),t(SearchFormLabel,{style:"width: 120px;"},["性别："]),t(SearchFormValue,[t(_Select,{style:"width: 90%",attrs:{value:this.sex,getPopupContainer:Resource.Dict.value.FormPopupContainer.value},on:{change:function(e){a.sex=e}}},[Resource.Dict.value.ResourceNormalSex.value.map(function(e){return t(Option,{key:e.value,attrs:{value:e.value}},[e.label])})])]),t(SearchFormLabel,{style:"width: 120px;"},["出生年月："]),t(SearchFormValue,[t(RangePicker,{style:"width: 90%",attrs:{value:[this.startTime,this.endTime],getPopupContainer:Resource.Dict.value.FormPopupContainer.value,getCalendarContainer:function(e){return e.parentElement}},on:{change:function(e){a.startTime=e.length?e[0]:null,a.endTime=e.length?e[1]:null}}})])]),t(SearchFormRow,[t(SearchFormLabel,{style:"width: 120px;"},["籍贯："]),t(SearchFormValue,[t(_Input,{style:"width: 90%",attrs:{placeholder:"籍贯",value:this.homeTown},on:{change:function(e){a.homeTown=e.target.value.trim()}}})]),t(SearchFormLabel,{style:"width: 120px;"},["身高："]),t(SearchFormValue,[t(_InputNumber,{style:"width: 90%",attrs:{placeholder:"身高",value:this.height},on:{change:function(e){a.height=e}}})]),t(SearchFormLabel,{style:"width: 120px;"},["体重："]),t(SearchFormValue,[t(_InputNumber,{style:"width: 90%",attrs:{placeholder:"体重",value:this.width},on:{change:function(e){a.width=e}}})])]),t(SearchFormRow,[t(SearchFormLabel,{style:"width: 120px;"},["所在部门："]),t(SearchFormValue,[t(_Select,{style:"width: 90%",attrs:{value:this.deptCode,getPopupContainer:Resource.Dict.value.FormPopupContainer.value},on:{change:function(e){a.deptCode=e}}},[t(Option,{attrs:{value:""}},["全部"]),t(Option,{attrs:{value:"0"}},["产品部"]),t(Option,{attrs:{value:"1"}},["开发部"]),t(Option,{attrs:{value:"2"}},["工程部"])])])])])},renderSearchFooterItems:function(){return null},showLoading:function(){return this.loading},getOrderFieldValue:function(){return"height"},fetchDataExecute:function(e){var t=this;return this.loading=!0,request.get({mock:!0,path:require("./mock.js").default}).then(function(e){t.dataSource={total:e.total,list:e.list},t.loading=!1})},getPagination:function(){return!!this.pagination&&this.$getPaginationSearchTable()}}};
//# sourceMappingURL=table.js.map
