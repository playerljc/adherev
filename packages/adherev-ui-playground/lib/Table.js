"use strict";require("core-js/modules/es.object.keys.js"),require("core-js/modules/es.symbol.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.object.get-own-property-descriptor.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.object.get-own-property-descriptors.js"),require("core-js/modules/es.object.define-properties.js");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));function ownKeys(r,e){var t,o=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),o.push.apply(o,t)),o}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){(0,_defineProperty2.default)(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.array.concat.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),adherev_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-conditionalrender")),selectorPrefix="adherev-ui-playground-table",Table={name:"adv-playground-table",props:{tableClassName:{type:String,default:""},tableStyle:{type:String,default:""},columns:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}},rowKey:{type:String}},methods:{renderHeader:function(n){var e=this.columns;return n("thead",[n("tr",{class:"".concat(selectorPrefix,"-header")},[e.map(function(e){var r=e.className,t=e.style,o=e.align,s={key:e.key};return e.width&&(s.width=e.width),n("th",{props:_objectSpread({},s),class:(0,classnames_1.default)("".concat(selectorPrefix,"-header-column"),r||""),style:"text-align:".concat(o||"left",";").concat(t)},[e.title||"-"])})])])},renderBody:function(c){var e=this,r=e.columns,t=e.dataSource,o=e.rowKey,i=e.$scopedSlots;return c("tbody",[t.map(function(a,l){return c("tr",{class:"".concat(selectorPrefix,"-row"),key:a[o]},[r.map(function(e,r){var t=e.dataIndex,o=e.slot,s=e.align,n=e.valign;return c("td",{class:"".concat(selectorPrefix,"-cell"),key:e.key,attrs:{valign:n||"top"},style:"text-align:".concat(s||"left",";")},[c(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!!o}},[i[o]?i[o]({value:a[t],record:a,rowIndex:l,columnIndex:r}):null,c("span",{slot:"noMatch"},[a[t]||"-"])])])})])})])}},render:function(e){var r=this.tableClassName,t=this.tableStyle;return e("div",{class:selectorPrefix},[e("table",{class:(0,classnames_1.default)("".concat(selectorPrefix,"-inner"),r||""),style:t},[this.renderHeader(e),this.renderBody(e)])])}};exports.default=Table;
//# sourceMappingURL=Table.js.map
