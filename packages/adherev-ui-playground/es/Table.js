import{createVNode as _createVNode,mergeProps as _mergeProps}from"vue";import"core-js/modules/es.array.map.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.split.js";import{__assign}from"tslib";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import classNames from"classnames";import{defineComponent}from"vue";import{array,object,string}from"vue-types";var selectorPrefix="adherev-ui-playground-table",tableProps={tableClassName:string().def(""),tableStyle:object().def({}),columns:array().def([]),dataSource:array().def([]),rowKey:string().def("")};export default defineComponent({name:"adv-playground-table",props:tableProps,setup:function(e,t){var c=t.slots;return function(){return _createVNode("div",{class:selectorPrefix},[_createVNode("table",{class:classNames("".concat(selectorPrefix,"-inner"),(e.tableClassName||"").split(/\s+/)),style:e.tableStyle},[_createVNode("thead",null,[_createVNode("tr",{class:"".concat(selectorPrefix,"-header")},[e.columns.map(function(e){var t=e.className,r=e.style,a=e.align,o={key:e.key};return e.width&&(o.width=e.width),_createVNode("th",_mergeProps(o,{class:classNames("".concat(selectorPrefix,"-header-column"),(t||"").split(/\s+/)),style:__assign(__assign({},r),{textAlign:a||"left"})}),[e.title||"-"])})])]),_createVNode("tbody",null,[e.dataSource.map(function(n,l){return _createVNode("tr",{class:"".concat(selectorPrefix,"-row"),key:n[e.rowKey]},[e.columns.map(function(e,t){var r=e.dataIndex,a=e.slot,o=e.align,s=e.valign;return _createVNode("td",{class:"".concat(selectorPrefix,"-cell"),key:e.key,valign:s||"top",style:{textAlign:o||"left"}},[_createVNode(ConditionalRender,{conditional:!!a},{default:function(){return a&&c[a]?c[a]({value:n[r],record:n,rowIndex:l,columnIndex:t}):null},noMatch:function(){return _createVNode("span",null,[n[r]||"-"])}})])})])})])])])}}});
//# sourceMappingURL=Table.js.map
