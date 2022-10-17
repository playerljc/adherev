"use strict";var _vue=require("vue"),vue_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("vue")),vue_types_1=require("vue-types"),selectorPrefix="adherev-ui-playground-simple-tabs",tabProps={defaultActiveKey:(0,vue_types_1.string)().def("")};exports.default=(0,vue_1.defineComponent)({name:"adv-playground-simple-tabs",props:tabProps,emits:["change"],setup:function(e,r){function u(e){var r=(e=e.props).index,e=e.title;return(0,_vue.createVNode)("li",{key:r,class:a.value===r?"active":"",onClick:function(){a.value=r,(0,vue_1.nextTick)(function(){l("change",r)})}},[e])}var t=r.slots,l=r.emit,a=(0,vue_1.ref)(e.defaultActiveKey);return(0,vue_1.watch)(function(){return e.defaultActiveKey},function(e){return a.value=e}),(0,vue_1.provide)("getActiveKey",function(){return a.value}),function(){var e;return(0,_vue.createVNode)("div",{class:selectorPrefix},[(0,_vue.createVNode)("ul",{class:"".concat(selectorPrefix,"-head")},[t.default&&Array.isArray(null==(e=null==t?void 0:t.default)?void 0:e.call(t))&&null!=(e=null==t?void 0:t.default)&&e.call(t).length&&Array.isArray(null==(e=null==t?void 0:t.default)?void 0:e.call(t)[0].children)?t.default()[0].children.map(u):[]]),(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-body")},[null==(e=null==t?void 0:t.default)?void 0:e.call(t)])])}}});
//# sourceMappingURL=index.js.map
