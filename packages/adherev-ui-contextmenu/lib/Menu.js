"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),classnames_1=tslib_1.__importDefault(require("classnames")),vue_1=require("vue"),vue_types_1=require("vue-types"),MenuItem_1=tslib_1.__importDefault(require("./MenuItem")),selectorPrefix="adherev-ui-contextmenu-submenu",props={data:(0,vue_types_1.array)().def([]),className:(0,vue_types_1.string)().def(""),style:(0,vue_types_1.object)().def({})};exports.default=(0,vue_1.defineComponent)({props:props,setup:function(e,t){var t=t.expose,o=(0,vue_1.ref)(null),i=(0,vue_1.inject)("context"),u=(0,vue_1.computed)(function(){return tslib_1.__assign(tslib_1.__assign({},e.style),{width:"".concat(i.config.width,"px"),zIndex:199999})}),s=(0,vue_1.computed)(function(){return(0,classnames_1.default)(selectorPrefix,(e.className||"").split(/\s+/))});return t({mount:function(){var e=i.config.x,t=i.config.y,u=null==(u=o.value)?void 0:u.offsetWidth,s=null==(s=o.value)?void 0:s.offsetHeight,r=document.body.clientWidth||document.documentElement.clientWidth,n=document.body.clientHeight||document.documentElement.clientHeight;n-t<s&&(t=n-s),o.value.style.left="".concat(e=r-e<u?r-u:e,"px"),o.value.style.top="".concat(t,"px")}}),function(){return(0,_vue.createVNode)("ul",{class:s.value,style:u.value,ref:o},[e.data.map(function(e){return(0,_vue.createVNode)(MenuItem_1.default,{key:e.id,data:e},null)})])}}});
//# sourceMappingURL=Menu.js.map
