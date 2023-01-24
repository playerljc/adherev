import"core-js/modules/es.symbol.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.define-properties.js";import"core-js/modules/es.object.define-property.js";import _defineProperty from"@babel/runtime/helpers/defineProperty";import _mergeJSXProps3 from"@vue/babel-helper-vue-jsx-merge-props";import _mergeJSXProps2 from"@vue/babel-helper-vue-jsx-merge-props";import _mergeJSXProps from"@vue/babel-helper-vue-jsx-merge-props";function ownKeys(n,e){var t,r=Object.keys(n);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(n),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)),r}function _objectSpread(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.search.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.array.reduce.js";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.string.trim.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.array.find-index.js";import"core-js/modules/es.string.starts-with.js";import"core-js/modules/es.array.splice.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.slice.js";import"core-js/modules/es.promise.js";import{__assign,__rest,__spreadArray}from"tslib";import{Button,Icon,Input,InputNumber,Rate,Slider,Switch}from"ant-design-vue";import merge from"lodash.merge";import moment from"moment/moment";import omit from"omit.js";import qs from"qs";import AntdvFormItem from"@baifendian/adherev-ui-antdvformitem";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import TableGridLayout from"@baifendian/adherev-ui-tablegridlayout";import Util from"@baifendian/adherev-util";import Intl from"@baifendian/adherev-util-intl";import Resource from"@baifendian/adherev-util-resource";import Validator from"@baifendian/adherev-util-validator";import AdvancedSearchPanel from"./Extension/AdvancedSearchPanel";import{selectorPrefix}from"./SearchTable";var extend=Util._util.extend,getComponents=AntdvFormItem.FormItemGeneratorToDict.getComponents,_a=AntdvFormItem.AntdvFormItemNormalize,DatePicker=_a.DatePicker,InputNumberDecimal1=_a.InputNumberDecimal1,InputNumberDecimal2=_a.InputNumberDecimal2,InputNumberInteger=_a.InputNumberInteger,RangePicker=_a.RangePicker,TimePicker=_a.TimePicker,_renderGridSearchFormGroup=TableGridLayout.renderGridSearchFormGroup,Label=TableGridLayout.Label,Value=TableGridLayout.Value,Components=function(){return getComponents()},_selectorPrefix="".concat(selectorPrefix,"-protable");export default function(e,o){var n=e.className,e=e.superClass;return extend({className:n,mixins:[e],props:{openSearchParamsMemory:{type:Boolean,default:!0}},data:function(){var e=this;return{$pathname:"undefined"!=typeof window?this.getPathName():"",$hasAdvancedSearchPanel:!1,$advancedSearchConfig:{rowCount:"auto",showStrategy:"remaining",insertSearchButton:null,advancedSearch:{className:"",style:{},width:"60%",mask:!0,zIndex:1e3,time:300,direction:"right",collapse:!0,onBeforeShow:function(){},onBeforeClose:function(){},onAfterShow:function(){},onAfterClose:function(){e.advancedSearchPanelCollapse=!1},getPopupContainer:function(){return document.body}}},advancedSearchPanelCollapse:!1,search:{},searchParams:{},page:1,limit:10}},created:function(){var e={search:{},page:1,limit:this.getLimit()||10};for(n in(e="openSearchParamsMemory"in this&&!("openSearchParamsMemory"in this&&this.openSearchParamsMemory)?e:this.initSearchAndPaginParams()).search)this[n]=e.search[n];this.page=e.page,this.limit=e.limit,this.searchParams=__assign(__assign({},this.searchParams),e.search);var n,t=this.getDateState(omit(this.$data,["searchParams"]));for(n in t)this[n]=t[n];this.searchParams=__assign(__assign({},this.searchParams),this.getDateState(this.searchParams)),this.$data.$hasAdvancedSearchPanel=!1},beforeDestroy:function(){"openSearchParamsMemory"in this&&!("openSearchParamsMemory"in this&&this.openSearchParamsMemory)||this.unMountSearchAndPaginParamsDeal()},methods:{onSearchPanelCollapseBefore:function(){this.$data.$hasAdvancedSearchPanel&&this.expand&&(this.advancedSearchPanelCollapse=!1)},unMountSearchAndPaginParamsDeal:function(){var e,n=this.searchParams||{},t=this.$data.$pathname,r=this.getComponentId();o.isEmpty()?o.add(t,((e={})[r]={search:n,page:this.page,limit:this.limit},e)):(e=o.findByPath(t))?(e.components[r].search=n,e.components[r].page=this.page,e.components[r].limit=this.limit):o.add(t,((e={})[r]={search:n,page:this.page,limit:this.limit},e))},initSearchAndPaginParams:function(n){var e,t,r=qs.parse(this.getSearch(),{ignoreQueryPrefix:!0}),a={};return Object.keys(r).forEach(function(e){a[e]=n?n(e,r[e]):r[e]}),!o.isEmpty()&&(e=o.findByPath(this.$data.$pathname),t=this.getComponentId(),e)&&e.components[t]?__assign(__assign({},a),e.components[t]):{search:__assign({},a),page:1,limit:this.getLimit()}},hasAdvancedSearch:function(){return!0},hasNumberColumnFixed:function(){return!0},hasOptionColumnFixed:function(){return!0},getPathName:function(){return window.location.pathname},getSearch:function(){return window.location.search},getFilterDropdownSlot:function(){return"filterDropdown"},getFilterIconSlot:function(){return"filterIcon"},getParams:function(){var o=this,n={};return function a(e){e.reduce(function(e,n){var t=n.$search,r=n.children,t=t||{},n=t.dataIndex||n.dataIndex;return[o.getOptionsColumnDataIndex(),o.getLinkColumnDataIndex(),"_number"].includes(n)||("rangePicker"===t.type?(t.startName&&(e[t.startName]=null),t.endName&&(e[t.endName]=null)):["datePicker","timePicker"].includes(t.type)?e[n]=null:e[n]=void 0,r&&Array.isArray(r)&&a(r)),e},n)}(this.getTableColumns()),n},getDateState:function(n){var e=Object.keys(n).filter(function(e){return null===n[e]||"null"===n[e]||Validator.isDate(n[e],{format:"YYYY-MM-DD"})}),t={};return e.forEach(function(e){t[e]=null===n[e]||"null"===n[e]?null:moment(n[e])}),t},getDataKey:function(){return"records"},getTotalKey:function(){return"total"},getLimit:function(){return 10},getFetchDataParams:function(){var t=this,r={};return Object.keys(this.searchParams).filter(function(n){return["start","Start"].some(function(e){return-1!==n.indexOf(e)})||["end","End"].some(function(e){return-1!==n.indexOf(e)})}).forEach(function(n){r[n]=t.searchParams[n]?"".concat(t.searchParams[n].format(Resource.Dict.value.ResourceMomentFormat10.value())," ").concat(["start","Start"].some(function(e){return-1!==n.indexOf(e)})?"00:00:00":["end","End"].some(function(e){return-1!==n.indexOf(e)})?"23:59:59":"").trim():null}),Object.keys(this.searchParams).filter(function(e){return!(e in r)&&t.searchParams[e]instanceof moment}).forEach(function(e){r[e]=t.searchParams[e]?t.searchParams[e].format(Resource.Dict.value.ResourceMomentFormat10.value()).trim():null}),r},getColumns:function(e){return(e||this.$getColumnsSearchTableImpl()).map(function(e){return __assign({},e)})},getTableColumns:function(e){var o=this,e=this.$getTableColumnsSearchTable(e),n=(!this.hasOptionColumnFixed()||!(n=e.find(function(e){return e.dataIndex===(o.getOptionsColumnDataIndex()||"_options")}))||"fixed"in n||n.fixed||(n.fixed="right"),!this.hasNumberColumnFixed()||!(n=e.find(function(e){return"_number"===e.dataIndex}))||"fixed"in n||n.fixed||(n.fixed="left"),e.find(function(e){return e.dataIndex===(o.getLinkColumnDataIndex()||"_linkColumn")}));return n&&("ellipsis"in n||(n.ellipsis=!1),"align"in n||(n.align="left")),e.map(function(e){return __assign(__assign({},e),{align:[o.getLinkColumnDataIndex()||"_linkColumn"].includes(e.dataIndex)&&"align"in e&&e.align?e.align:"center"})}).map(function(e){return function t(r){var e=r.$search,n=__rest(r,["$search"]),e=o.assignSearchConfig(e,n),n=e.showColumnHeader,a=__assign({},r),e=e.dataIndex||r.dataIndex;return!["_number",o.getOptionsColumnDataIndex()].includes(e)&&n&&(a=__assign(__assign({},a),{scopedSlots:__assign(__assign({},a.scopedSlots||{}),{filterDropdown:o.getFilterDropdownSlot(),filterIcon:o.getFilterIconSlot()})})),r.children&&Array.isArray(r.children)&&r.children.forEach(function(e,n){r.children[n]=t(e)}),a}(e)})},getOptionsColumnDataIndex:function(){return"_options"},getLinkColumnDataIndex:function(){return"_linkColumn"},getPagination:function(){var r=this;return __assign(__assign({},this.$getPaginationSearchTable()),{showTotal:function(e){var n=(r.page-1)*r.limit+1,t=r.page*r.limit;return Intl.tv("当前 {page}-{pageSize}/共 {total}条",{page:n,pageSize:t<e?t:e,total:e})}})},getGridSearchFormGroupParams:function(e){return[[{name:"g1",columnCount:3,colgroup:[,"auto",,"auto",,"auto"],data:this.getGridSearchFormGroupDataByColumnConfig(e)}],{},{rowCount:1}]},getGridSearchFormGroupDataByColumnConfig:function(c){var u=this,l=[];return function s(e){e.filter(function(e){return"$search"in e&&!!e.$search.visible}).forEach(function(e){var n=e.$search,t=__rest(e,["$search"]),r=u.assignSearchConfig(n,t),a=(null==r?void 0:r.type)||"input",o=r.dataIndex||e.dataIndex,i=n.title||e.title;l.push({key:o,label:c(Label,_mergeJSXProps([{},n.labelAttrs||{}]),[i,"："]),value:ConditionalRender.conditionalRender({conditional:!u.hasAuthority||(null==(i=u.hasAuthority)?void 0:i.call(u,r.authority)),match:c(Value,_mergeJSXProps2([{},n.valueAttrs||{}]),[u.renderGridSearchFormGroupDataItem(c,a,{searchConfig:r,column:t,dataIndex:o})]),noMatch:n.renderNoAuthority?c(Value,_mergeJSXProps3([{},n.valueAttrs||{}]),[(null==(a=null==(i=u.$scopedSlots)?void 0:i[null==n?void 0:n.renderNoAuthority])?void 0:a.call(i))||(null==(r=null==n?void 0:n.renderNoAuthority)?void 0:r.call(n))]):null})}),e.children&&Array.isArray(e.children)&&s(e.children)})}(this.getColumns(this.$getColumnsSearchTableImpl())),l.filter(function(e){return!!e.value})},getScopedSlots:function(o){var i=this,e={};return e[this.getFilterDropdownSlot()]=function(e){var n=e.confirm,e=e.column,t=e.$search,r=e.dataIndex,a=t.type;return o("div",{class:"".concat(_selectorPrefix,"-headersearchwrap")},[o("div",{class:"".concat(_selectorPrefix,"-headersearchwrap-main")},[i.renderGridSearchFormGroupDataItem(o,a,{searchConfig:t,column:e,dataIndex:r})]),o("div",{class:"".concat(_selectorPrefix,"-headersearchwrap-footer")},[o(Button,{attrs:{size:"small"},on:{click:function(){"rangePicker"===a?(t.startName&&(i[t.startName]=null),t.endName&&(i[t.endName]=null)):i[r]=void 0,i.$nextTick(function(){return i.onSearch().then(function(){return n()})})}}},[Intl.tv("重置")]),o(Button,{attrs:{size:"small",type:"primary"},on:{click:function(){return i.onSearch().then(function(){return n()})}}},[Intl.tv("确定")])])])},e[this.getFilterIconSlot()]=function(){return o(Icon,{attrs:{type:"search"}})},e},assignSearchConfig:function(e,n){n={type:"input",visible:!0,showColumnHeader:!0,props:{},labelAttrs:{},valueAttrs:{},authority:[],renderNoAuthority:function(){return null},dataIndex:n.dataIndex,title:n.title,dictName:"",renderChildren:function(){return null},render:function(){return null},startName:"",endName:""};return __assign(__assign({},n),e||{})},renderSearchForm:function(e){return this.renderGridSearchFormGroup.apply(this,__spreadArray([e],this.getGridSearchFormGroupParams(e),!1))},renderSearchFooterItems:function(e,n){var t,r,a=this,n=__spreadArray([],n||[],!0);return this.hasAdvancedSearch()&&this.$data.$hasAdvancedSearchPanel&&this.expand&&(t=e(Button,{slot:"default",attrs:{icon:"filter",type:"primary"},on:{click:function(){a.advancedSearchPanelCollapse=!0}}},[Intl.tv("高级搜索")]),this.$data.$advancedSearchConfig.insertSearchButton?this.$data.$advancedSearchConfig.insertSearchButton(n,t):-1!==(r=n.findIndex(function(e){return"tag"in e&&e.tag&&e.tag.startsWith("vue-component-")&&"key"in e&&"reset"===e.key}))&&n.splice(r+1,0,t)),this.renderSearchFooterItemsImpl(e,n).map(function(e){return"tag"in e&&e.tag&&e.tag.startsWith("vue-component-")?e:e.value})},renderSearchFooterItemsImpl:function(e,n){var t=this.renderTableDensitySetting(this.$createElement),r=this.renderColumnSetting(this.$createElement);return __spreadArray(__spreadArray([],n,!0),[{value:e("div",{class:"".concat(_selectorPrefix,"-headeritem")},[t])},{value:e("div",{class:"".concat(_selectorPrefix,"-headeritem")},[r])}],!1)},renderGridSearchFormGroupDataItem:function(a,e,n){var o=this,t=n.searchConfig,r=n.column,i=n.dataIndex;return null==(n=new Map([["input",function(e){var n=e.searchConfig,t=e.dataIndex;return a(Input,{attrs:{value:o[t]},on:{change:function(e){return o.onInputChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["textArea",function(e){var n=e.searchConfig,t=e.dataIndex;return a(Input.TextArea,{attrs:{value:o[t]},on:{change:function(e){return o.onInputChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["inputNumber",function(e){var n=e.searchConfig,t=e.dataIndex;return a(InputNumber,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["inputNumberDecimal1",function(e){var n=e.searchConfig,t=e.dataIndex;return a(InputNumberDecimal1,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["inputNumberDecimal2",function(e){var n=e.searchConfig,t=e.dataIndex;return a(InputNumberDecimal2,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["inputNumberInteger",function(e){var n=e.searchConfig,t=e.dataIndex;return a(InputNumberInteger,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["select",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"FormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["multiSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"MulitFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["checkAllMultiSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"CheckAllMulitFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["autoCompleteSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"FormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["autoCompleteSelectMulti",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"MulitFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["autoCompleteSelectCheckAllMulti",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"CheckAllMulitFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["radioHorizontal",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"HorizontalFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["radioButton",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"ButtonFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["radioSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"SelectFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["radioCustom",function(e){var r=e.searchConfig,n=e.dataIndex,e=Components()["".concat(r.dictName,"CustomFormItem")];return a(e,{attrs:{value:o[n]},on:{change:function(e){return o.onSelectChange(n,e)}},props:_objectSpread({},__assign({},r.props||{}))},[function(e){var n,t;return(null==(t=null==(n=o.$scopedSlots)?void 0:n[null==r?void 0:r.renderChildren])?void 0:t.call(n,e))||(null==(t=null==r?void 0:r.renderChildren)?void 0:t.call(r,e))}])}],["checkBoxHorizontal",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"HorizontalFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["checkBoxCheckAllHorizontal",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"CheckAllHorizontalFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["checkboxSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"SelectFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["checkBoxCheckAllSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"CheckAllSelectFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["checkBoxCustom",function(e){var r=e.searchConfig,n=e.dataIndex,e=Components()["".concat(r.dictName,"CustomFormItem")];return a(e,{attrs:{value:o[n]},on:{change:function(e){return o.onSelectChange(n,e)}},props:_objectSpread({},__assign({},r.props||{}))},[function(e){var n,t;return(null==(t=null==(n=o.$scopedSlots)?void 0:n[null==r?void 0:r.renderChildren])?void 0:t.call(n,e))||(null==(t=null==r?void 0:r.renderChildren)?void 0:t.call(r,e))}])}],["checkBoxCheckAllCustom",function(e){var r=e.searchConfig,n=e.dataIndex,e=Components()["".concat(r.dictName,"CheckAllCustomFormItem")];return a(e,{attrs:{value:o[n]},on:{change:function(e){return o.onSelectChange(n,e)}},props:_objectSpread({},__assign({},r.props||{}))},[function(e){var n,t;return(null==(t=null==(n=o.$scopedSlots)?void 0:n[null==r?void 0:r.renderChildren])?void 0:t.call(n,e))||(null==(t=null==r?void 0:r.renderChildren)?void 0:t.call(r,e))}])}],["transferSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"SelectFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["tableSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"SelectFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["tableMultiSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"MulitSelectFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["tablePagingSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"PaginationSelectFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["tablePagingMultiSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"PaginationMulitSelectFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["listSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"SelectFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["listMultiSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"MulitSelectFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["listPagingSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"PaginationSelectFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["listPagingMultiSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"PaginationMulitSelectFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["treeSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"FormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["treeMultiSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"MulitFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["treeSelectLeaf",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"LeafFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["treeMultiSelectLeaf",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"LeafMulitFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["cascaderSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"FormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["cascaderMultiSelect",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"MulitFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["cascaderSelectLeaf",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"LeafFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["cascaderMultiSelectLeaf",function(e){var n=e.searchConfig,t=e.dataIndex,e=Components()["".concat(n.dictName,"LeafMulitFormItem")];return a(e,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["datePicker",function(e){var n=e.searchConfig,t=e.dataIndex;return a(DatePicker,{attrs:{value:o[t]},on:{change:function(e){var n;o.setState(((n={})[t]=e||null,n))}},props:_objectSpread({},__assign({},n.props||{}))})}],["timePicker",function(e){var n=e.searchConfig,t=e.dataIndex;return a(TimePicker,{attrs:{value:o[t]},on:{change:function(e){var n;o.setState(((n={})[t]=e||null,n))}},props:_objectSpread({},__assign({},n.props||{}))})}],["rangePicker",function(e){var e=e.searchConfig,n=e.startName,t=e.endName;return a(RangePicker,{attrs:{value:[o[n],o[t]]},on:{change:function(e){o.onDateTimeRangeChange([n,t],e)}},props:_objectSpread({},__assign({},e.props||{}))})}],["slider",function(e){var n=e.searchConfig,t=e.dataIndex;return a(Slider,{attrs:{value:o[t]},on:{change:function(e){return o.onSelectChange(t,e)}},props:_objectSpread({},__assign({},n.props||{}))})}],["sliderRange",function(e){e=e.searchConfig;return a(Slider,{attrs:{range:!0,value:o[i]},on:{change:function(e){return o.onSelectChange(i,e)}},props:_objectSpread({},__assign({},e.props||{}))})}],["rate",function(e){e=e.searchConfig;return a(Rate,{attrs:{value:o[i]},on:{change:function(e){return o.onSelectChange(i,e)}},props:_objectSpread({},__assign({},e.props||{}))})}],["switch",function(e){e=e.searchConfig;return a(Switch,{attrs:{value:o[i]},on:{change:function(e){return o.onSelectChange(i,e)}},props:_objectSpread({},__assign({},e.props||{}))})}],["custom",function(e){var n,t,r=e.searchConfig,a=e.column,e=e.dataIndex;return(null==(t=null==(n=o.$scopedSlots)?void 0:n[null==r?void 0:r.render])?void 0:t.call(n,{searchConfig:r,column:a,dataIndex:e}))||(null==(t=null==r?void 0:r.render)?void 0:t.call(r,{searchConfig:r,column:a,dataIndex:e}))}]]).get(e))?void 0:n({searchConfig:t,column:r,dataIndex:i})},renderGridSearchFormGroup:function(e,n,t,r){var a,o=this,t=merge({layout:"horizontal",density:"middle"},t||{}),i=(null!=(i=null==r?void 0:r.advancedSearch)&&i.onAfterClose&&(a=r.advancedSearch.onAfterClose,r.advancedSearch.onAfterClose=function(){a(),o.advancedSearchPanelCollapse=!1}),this.$data.$advancedSearchConfig=merge(this.$data.$advancedSearchConfig,r||{}),_renderGridSearchFormGroup(e,this,n,t));if("auto"!==this.$data.$advancedSearchConfig.rowCount){var r=TableGridLayout.getRenderDetail(e,this,n,t),s=r.rowCount,c=r.detail;if(s>this.$data.$advancedSearchConfig.rowCount){for(var u=[],l=[],d=this.$data.$advancedSearchConfig.rowCount,p=0;0!==d;){var m=n[p],h=c[p];h.rowCount<=d?(u.push(__assign({},m)),d-=h.rowCount):(h=h.detail.slice(0,d),u.push(__assign(__assign({},m),{data:m.data.slice(h[0].startIndex,h[h.length-1].endIndex+1)})),l.push(__assign(__assign({},m),{data:m.data.slice(h[h.length-1].endIndex+1)})),d=0),p+=1}for(var g=p;g<n.length;g++)l.push(__assign({},n[g]));return this.$data.$hasAdvancedSearchPanel=!0,this.$data.$advancedSearchConfig.advancedSearch.collapse=this.advancedSearchPanelCollapse,e("div",{class:"".concat(_selectorPrefix,"-gridsearchformgroupwrap")},[_renderGridSearchFormGroup(e,this,u,t),e(AdvancedSearchPanel,{attrs:{groupData:n,tableGridLayoutConfig:t,remainingGroupData:l,advancedSearchConfig:this.$data.$advancedSearchConfig,searchFn:function(){return new Promise(function(e){o.page=1,o.$nextTick(function(){this.onSearch().then(function(){return e()})})})},resetFn:function(){return o.onClear()},collapseFn:function(e){o.advancedSearchPanelCollapse=e}}})])}}return this.$data.$hasAdvancedSearchPanel=!1,e("div",{class:"".concat(_selectorPrefix,"-gridsearchformgroupwrap")},[i])},renderOptionColumn:function(e){return e.map(function(e){return e.value}).filter(function(e){return!!e})}}})}
//# sourceMappingURL=ProTableFactory.js.map
