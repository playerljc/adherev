"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.fill.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.map.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/esnext.map.delete-all.js"),require("core-js/modules/esnext.map.every.js"),require("core-js/modules/esnext.map.filter.js"),require("core-js/modules/esnext.map.find.js"),require("core-js/modules/esnext.map.find-key.js"),require("core-js/modules/esnext.map.includes.js"),require("core-js/modules/esnext.map.key-of.js"),require("core-js/modules/esnext.map.map-keys.js"),require("core-js/modules/esnext.map.map-values.js"),require("core-js/modules/esnext.map.merge.js"),require("core-js/modules/esnext.map.reduce.js"),require("core-js/modules/esnext.map.some.js"),require("core-js/modules/esnext.map.update.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),vue_1=require("vue"),vue_types_1=require("vue-types"),adherev_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-conditionalrender")),PlayGround_1=tslib_1.__importDefault(require("./PlayGround")),PlayGroundMulit_1=tslib_1.__importDefault(require("./PlayGroundMulit")),PlayGroundTab_1=tslib_1.__importDefault(require("./PlayGroundTab")),constant_1=tslib_1.__importDefault(require("./constant")),selectPrefix="adherev-ui-playground-code-box",codeBoxPanelProps={title:(0,vue_types_1.oneOfType)([(0,vue_types_1.string)(),(0,vue_types_1.object)()]),extra:(0,vue_types_1.object)(),isShowExpandAllBtn:(0,vue_types_1.bool)().def(!0),columnCount:(0,vue_types_1.number)().def(1),defaultExpandAll:(0,vue_types_1.bool)().def(!1),config:(0,vue_types_1.array)().def([])};exports.default=(0,vue_1.defineComponent)({name:"adv-playground-code-box-panel",props:codeBoxPanelProps,setup:function(a,e){function n(){c.value=window.location.hash.substring(1)}var d=e.slots,c=(0,vue_1.ref)(""),s=(0,vue_1.ref)(a.defaultExpandAll),t=!1,r=(0,vue_1.computed)(function(){var e=[];return null!=a.columnCount&&(e.length=a.columnCount),e.fill(0),e}),o=new Map([["PlayGround",function(n,t){var e,r=a.config[t],o=(r.type,r.childrenSlot),u=r.wrapSlot,l=r.id,r=tslib_1.__rest(r,["type","childrenSlot","wrapSlot","id"]),i=(0,_vue.createVNode)(PlayGround_1.default,(0,_vue.mergeProps)(r,{id:l,isActive:c.value===l,defaultExpand:s.value}),{default:function(){return[(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:!!d[o]},{default:function(){return[null==(e=d[o])?void 0:e.call(d,{columnIndex:n,index:t,config:a.config})]}})]}});return(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:!!d[u]},{default:function(){var e;return null==(e=d[u])?void 0:e.call(d,{columnIndex:n,index:t,config:a.config,children:i})},noMatch:function(){return i}})}],["PlayGroundMulit",function(n,t){var e,r=a.config[t],o=(r.type,r.childrenSlot),u=r.wrapSlot,l=r.id,r=tslib_1.__rest(r,["type","childrenSlot","wrapSlot","id"]),i=(0,_vue.createVNode)(PlayGroundMulit_1.default,(0,_vue.mergeProps)(r,{id:l,isActive:c.value===l,defaultExpand:s.value}),{default:function(){return[(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:!!d[o]},{default:function(){return[null==(e=d[o])?void 0:e.call(d,{columnIndex:n,index:t,config:a.config})]}})]}});return(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:!!d[u]},{default:function(){var e;return null==(e=d[u])?void 0:e.call(d,{columnIndex:n,index:t,config:a.config,children:i})},noMatch:function(){return i}})}],["PlayGroundTab",function(n,t){var e,r=a.config[t],o=(r.type,r.childrenSlot),u=r.wrapSlot,l=r.id,r=tslib_1.__rest(r,["type","childrenSlot","wrapSlot","id"]),i=(0,_vue.createVNode)(PlayGroundTab_1.default,(0,_vue.mergeProps)(r,{id:l,isActive:c.value===l,defaultExpand:s.value}),{default:function(){return[(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:!!d[o]},{default:function(){return[null==(e=d[o])?void 0:e.call(d,{columnIndex:n,index:t,config:a.config})]}})]}});return(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:!!d[u]},{default:function(){var e;return null==(e=d[u])?void 0:e.call(d,{columnIndex:n,index:t,config:a.config,children:i})},noMatch:function(){return i}})}]]);return(0,vue_1.watch)(s,function(){t=!1}),(0,vue_1.watch)(function(){return a.defaultExpandAll},function(e){return s.value=e}),(0,vue_1.onMounted)(function(){"undefined"!=typeof window&&window.addEventListener("hashchange",n)}),(0,vue_1.onBeforeMount)(function(){"undefined"!=typeof window&&window.removeEventListener("hashchange",n)}),function(){return(0,_vue.createVNode)("div",{class:selectPrefix},[(0,_vue.createVNode)("div",{class:"".concat(selectPrefix,"-header")},[(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:!!a.title},{default:function(){return[(0,_vue.createVNode)("div",{class:"".concat(selectPrefix,"-header-title")},[a.title])]}}),(0,_vue.createVNode)("div",{class:"".concat(selectPrefix,"-header-extra")},[(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:a.isShowExpandAllBtn},{default:function(){return[(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:s.value},{default:function(){return(0,_vue.createVNode)("img",{class:"".concat(selectPrefix,"-expand-code"),src:constant_1.default.CloseCodeAll,alt:"",onClick:function(){t||(t=!0,s.value=!1)}},null)},noMatch:function(){return(0,_vue.createVNode)("img",{class:"".concat(selectPrefix,"-expand-code"),src:constant_1.default.ExpandCodeAll,alt:"",onClick:function(){t||(t=!0,s.value=!0)}},null)}})]}}),(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:!!a.extra},{default:function(){return[a.extra]}})])]),(0,_vue.createVNode)("div",{class:"".concat(selectPrefix,"-main")},[r.value.map(function(e,t){return(0,_vue.createVNode)("div",{class:"".concat(selectPrefix,"-column")},[a.config.map(function(e,n){return n%a.columnCount===t?(0,_vue.createVNode)("div",{class:"".concat(selectPrefix,"-item"),key:e.id},[null==(e=null==o?void 0:o.get(e.type))?void 0:e(t,n)]):null})])})])])}}});
//# sourceMappingURL=CodeBoxPanel.js.map
