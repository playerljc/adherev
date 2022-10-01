import _defineProperty from"@babel/runtime/helpers/defineProperty";function ownKeys(r,e){var t,o=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),o.push.apply(o,t)),o}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}import"core-js/modules/es.array.map.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.split.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.define-properties.js";import"core-js/modules/es.object.define-property.js";import classNames from"classnames";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";var selectorPrefix="adherev-ui-playground-table";export default{name:"adv-playground-table",props:{tableClassName:{type:String,default:""},tableStyle:{type:String,default:""},columns:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}},rowKey:{type:String}},methods:{renderHeader:function(n){var e=this.columns;return n("thead",[n("tr",{class:selectorPrefix+"-header"},[e.map(function(e){var r=e.className,t=e.style,o=e.align,s={key:e.key};return e.width&&(s.width=e.width),n("th",{props:_objectSpread({},s),class:classNames(selectorPrefix+"-header-column",(r||"").split(/\s+/)),style:"text-align:"+(o||"left")+";"+t},[e.title||"-"])})])])},renderBody:function(i){var e=this,r=e.columns,t=e.dataSource,o=e.rowKey,c=e.$scopedSlots;return i("tbody",[t.map(function(l,a){return i("tr",{class:selectorPrefix+"-row",key:l[o]},[r.map(function(e,r){var t=e.dataIndex,o=e.slot,s=e.align,n=e.valign;return i("td",{class:selectorPrefix+"-cell",key:e.key,attrs:{valign:n||"top"},style:"text-align:"+(s||"left")+";"},[i(ConditionalRender,{attrs:{conditional:!!o}},[c[o]?c[o]({value:l[t],record:l,rowIndex:a,columnIndex:r}):null,i("span",{slot:"noMatch"},[l[t]||"-"])])])})])})])}},render:function(e){var r=this.tableClassName,t=this.tableStyle;return e("div",{class:selectorPrefix},[e("table",{class:classNames(selectorPrefix+"-inner",r.split(/\s+/)),style:t},[this.renderHeader(e),this.renderBody(e)])])}};
//# sourceMappingURL=Table.js.map
