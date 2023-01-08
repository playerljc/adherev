import"core-js/modules/es.object.keys.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.define-properties.js";import"core-js/modules/es.object.define-property.js";import _defineProperty from"@babel/runtime/helpers/defineProperty";function ownKeys(o,e){var t,n=Object.keys(o);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(o),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})),n.push.apply(n,t)),n}function _objectSpread(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(o,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))})}return o}import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.fill.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.map.js";import{__assign,__rest}from"tslib";import{Fragment}from"vue-fragment";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import PlayGround from"./PlayGround";import PlayGroundMulit from"./PlayGroundMulit";import PlayGroundTab from"./PlayGroundTab";import Constant from"./constant";var selectPrefix="adherev-ui-playground-code-box",CodeBoxPanelPropTypes={title:{type:[String,Object],default:""},extra:{type:Object,default:function(){return null}},isShowExpandAllBtn:{type:Boolean,default:!0},columnCount:{type:Number,default:1},defaultExpandAll:{type:Boolean,default:!1},config:{type:Array,default:function(){return[]}}},CodeBoxPanel={name:"adv-playground-code-box-panel",props:__assign({},CodeBoxPanelPropTypes),data:function(){return{activeAnchor:"",expandAll:this.defaultExpandAll,$expandLock:!1}},computed:{column:function(){var e=this.columnCount,o=[];return null!=e&&(o.length=e),o.fill(void 0),o},renderMap:function(){return new Map([["PlayGroundMulit",this.renderPlayGroundMulit],["PlayGround",this.renderPlayGround],["PlayGroundTab",this.renderPlayGroundTab]])}},mounted:function(){"undefined"!=typeof window&&window.addEventListener("hashchange",this.onHashChange)},beforeDestroy:function(){"undefined"!=typeof window&&window.removeEventListener("hashchange",this.onHashChange)},watch:{expandAll:function(){this.$data.$expandLock=!1},defaultExpandAll:function(e){this.expandAll=e}},methods:{onHashChange:function(){this.activeAnchor=window.location.hash.substring(1)},renderPlayGround:function(e,o,t){var n=this,r=n.$scopedSlots,i=n.config,a=n.activeAnchor,n=n.expandAll,l=i[t],s=(l.type,l.childrenSlot),d=l.wrapSlot,c=l.id,l=__rest(l,["type","childrenSlot","wrapSlot","id"]),a=e(PlayGround,{props:_objectSpread({},l),attrs:_objectSpread(_objectSpread({},{id:c}),{},{isActive:a===c,defaultExpand:n})},[e(ConditionalRender,{attrs:{conditional:!!r[s]}},[null==(l=r[s])?void 0:l.call(r,{columnIndex:o,index:t,config:i})])]);return e(ConditionalRender,{attrs:{conditional:!!r[d]}},[null==(c=r[d])?void 0:c.call(r,{columnIndex:o,index:t,config:i,children:a}),e(Fragment,{slot:"noMatch"},[a])])},renderPlayGroundTab:function(e,o,t){var n=this,r=n.$scopedSlots,i=n.config,a=n.activeAnchor,n=n.expandAll,l=i[t],s=(l.type,l.childrenSlot),d=l.wrapSlot,c=l.id,l=__rest(l,["type","childrenSlot","wrapSlot","id"]),a=e(PlayGroundTab,{props:_objectSpread({},l),attrs:_objectSpread(_objectSpread({},{id:c}),{},{isActive:a===c,defaultExpand:n})},[e(ConditionalRender,{attrs:{conditional:!!r[s]}},[null==(l=r[s])?void 0:l.call(r,{columnIndex:o,index:t,config:i})])]);return e(ConditionalRender,{attrs:{conditional:!!r[d]}},[null==(c=r[d])?void 0:c.call(r,{columnIndex:o,index:t,config:i,children:a}),e(Fragment,{slot:"noMatch"},[a])])},renderPlayGroundMulit:function(e,o,t){var n=this.$scopedSlots,r=this.config,i=this.activeAnchor,a=this.expandAll,l=r[t],s=(l.type,l.childrenSlot),d=l.wrapSlot,c=l.id,l=__rest(l,["type","childrenSlot","wrapSlot","id"]),i=e(PlayGroundMulit,{props:_objectSpread({},l),attrs:_objectSpread(_objectSpread({},{id:c}),{},{isActive:i===c,defaultExpand:a})},[e(ConditionalRender,{attrs:{conditional:!!n[s]}},[null==(l=n[s])?void 0:l.call(n,{columnIndex:o,index:t,config:r})])]);return e(ConditionalRender,{attrs:{conditional:!!n[d]}},[null==(c=n[d])?void 0:c.call(n,{columnIndex:o,index:t,config:r,children:i}),e(Fragment,{slot:"noMatch"},[i])])}},render:function(n){var e=this,o=this,t=o.title,r=o.isShowExpandAllBtn,i=o.extra,a=o.expandAll,l=o.config,s=o.columnCount,d=o.column,c=o.renderMap,p=o.$data.$expandLock;return n("div",{class:selectPrefix},[n("div",{class:"".concat(selectPrefix,"-header")},[n(ConditionalRender,{attrs:{conditional:!!t}},[n("div",{class:"".concat(selectPrefix,"-header-title")},[t])]),n("div",{class:"".concat(selectPrefix,"-header-extra")},[n(ConditionalRender,{attrs:{conditional:r}},[n(ConditionalRender,{attrs:{conditional:a}},[n("img",{class:"".concat(selectPrefix,"-expand-code"),attrs:{src:Constant.CloseCodeAll,alt:""},on:{click:function(){p||(e.$data.$expandLock=!0,e.expandAll=!1)}}}),n("img",{slot:"noMatch",class:"".concat(selectPrefix,"-expand-code"),attrs:{src:Constant.ExpandCodeAll,alt:""},on:{click:function(){p||(e.$data.$expandLock=!0,e.expandAll=!0)}}})])]),n(ConditionalRender,{attrs:{conditional:!!i}},[i])])]),n("div",{class:"".concat(selectPrefix,"-main")},[d.map(function(e,t){return n("div",{class:"".concat(selectPrefix,"-column")},[l.map(function(e,o){return o%s===t?n("div",{class:"".concat(selectPrefix,"-item"),key:e.id},[c.get(e.type)(n,t,o)]):null})])})])])}};export default CodeBoxPanel;export{CodeBoxPanelPropTypes};
//# sourceMappingURL=CodeBoxPanel.js.map
