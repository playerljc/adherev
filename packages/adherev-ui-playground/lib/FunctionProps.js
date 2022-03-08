"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.function.name.js"),require("core-js/modules/es.array.join.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.functionPropsProps=void 0,require("tslib")),adherev_ui_conditionalrender_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender")),adherev_util_intl_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-util-intl")),vue_1=require("vue"),vue_types_1=require("vue-types"),Collapse_1=(0,tslib_1.__importStar)(require("./Collapse")),selectorPrefix="adherev-ui-playground-functionprops";exports.functionPropsProps=(0,tslib_1.__assign)((0,tslib_1.__assign)({},Collapse_1.collapseProps),{data:(0,vue_types_1.array)().def([])}),exports.default=(0,vue_1.defineComponent)({name:"adv-playground-functionprops",props:exports.functionPropsProps,setup:function(i,e){return function(){var e,t={};for(e in Collapse_1.collapseProps)t[e]=i[e];return(0,_vue.createVNode)(Collapse_1.default,t,{default:function(){return[(0,_vue.createVNode)("div",{class:selectorPrefix},[(0,_vue.createVNode)("table",{class:"".concat(selectorPrefix,"-inner")},[i.data.map(function(e,t){var r=e.name,a=e.desc,c=e.modifier,l=e.params,o=e.returnType,e=e.returnDesc;return(0,_vue.createVNode)(_vue.Fragment,null,[(0,_vue.createVNode)("tr",{key:"".concat(t),class:"".concat(selectorPrefix,"-item")},[(0,_vue.createVNode)("td",{valign:"top",class:"".concat(selectorPrefix,"-item-name")},[(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:!!c},{default:function(){return[(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-modifier")},[c||"public",(0,_vue.createTextVNode)(" -")," "])]}}),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-functionName")},[r,(0,_vue.createTextVNode)("("),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-highlight")},[(l||[]).map(function(e){return e.name}).join(" , ")]),(0,_vue.createTextVNode)(")")])]),(0,_vue.createVNode)("td",{valign:"top",class:"".concat(selectorPrefix,"-item-info")},[(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-item-desc")},[a]),(0,_vue.createVNode)("dl",null,[(0,_vue.createVNode)("dt",{class:"".concat(selectorPrefix,"-")},[adherev_util_intl_1.default.tv("参数说明"),(0,_vue.createTextVNode)("：")]),(0,_vue.createVNode)("dd",null,[(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:!!l&&0!==l.length},{default:function(){return[(0,_vue.createVNode)("ul",{class:"".concat(selectorPrefix,"-level1")},[l.map(function(e,t){return(0,_vue.createVNode)("li",{key:"".concat(t+1)},[(0,_vue.createVNode)("div",{style:{marginBottom:10}},[(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-highlight")},[e.name])," ",(0,_vue.createTextVNode)("- "),e.desc||"-"]),(0,_vue.createVNode)("ul",{class:"".concat(selectorPrefix,"-level2"),style:{marginBottom:10}},[(0,_vue.createVNode)("li",null,[adherev_util_intl_1.default.tv("类型"),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-split")},[(0,_vue.createTextVNode)("-")]),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-highlight")},[e.type||"-"])]),(0,_vue.createVNode)("li",null,[adherev_util_intl_1.default.tv("默认值"),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-split")},[(0,_vue.createTextVNode)("-")]),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-highlight")},[e.defaultVal||"-"])]),(0,_vue.createVNode)("li",null,[adherev_util_intl_1.default.tv("是否必填"),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-split")},[(0,_vue.createTextVNode)("-")]),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-highlight")},[e.required?adherev_util_intl_1.default.tv("是"):adherev_util_intl_1.default.tv("否")])])])])})])]}})])]),(0,_vue.createVNode)("dl",null,[(0,_vue.createVNode)("dt",null,[adherev_util_intl_1.default.tv("返回值"),(0,_vue.createTextVNode)("：")]),(0,_vue.createVNode)("dd",null,[(0,_vue.createVNode)("ul",{class:"".concat(selectorPrefix,"-level1")},[(0,_vue.createVNode)("li",null,[adherev_util_intl_1.default.tv("类型"),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-split")},[(0,_vue.createTextVNode)("-")]),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-highlight")},[o||"-"])]),(0,_vue.createVNode)("li",null,[adherev_util_intl_1.default.tv("说明"),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-split")},[(0,_vue.createTextVNode)("-")]),(0,_vue.createVNode)("span",{class:"".concat(selectorPrefix,"-highlight")},[e||"-"])])])])])])]),(0,_vue.createVNode)(adherev_ui_conditionalrender_1.default,{conditional:t!==i.data.length-1},{default:function(){return[(0,_vue.createVNode)("div",{class:"".concat(selectorPrefix,"-dividing")},null)]}})])})])])]}})}}});
//# sourceMappingURL=FunctionProps.js.map
