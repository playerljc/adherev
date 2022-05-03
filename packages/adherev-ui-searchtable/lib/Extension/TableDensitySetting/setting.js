"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),vue_1=require("vue"),adherev_util_intl_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-util-intl")),searchtable_1=require("../../searchtable"),types_1=require("../../types");exports.default=(0,vue_1.defineComponent)({props:{density:{type:String,default:types_1.TableDensity.DEFAULT}},emits:["reset","change"],data:function(){return{$config:[{label:adherev_util_intl_1.default.tv("缺省"),value:types_1.TableDensity.DEFAULT},{label:adherev_util_intl_1.default.tv("中等"),value:types_1.TableDensity.MIDDLE},{label:adherev_util_intl_1.default.tv("紧凑"),value:types_1.TableDensity.SMALL}]}},render:function(){var t=this;return(0,_vue.createVNode)("div",{class:"".concat(searchtable_1.selectorPrefix,"-table-density-setting")},[(0,_vue.createVNode)("div",{class:"".concat(searchtable_1.selectorPrefix,"-table-density-setting-header")},[(0,_vue.createVNode)("a",{onClick:function(){t.$emit("reset")}},[adherev_util_intl_1.default.tv("重置")])]),(0,_vue.createVNode)("div",{class:"".concat(searchtable_1.selectorPrefix,"-table-density-setting-body")},[(0,_vue.createVNode)("ul",null,[this.$data.$config.map(function(e){return(0,_vue.createVNode)("li",{key:e.value,class:t.density===e.value?"active":"",onClick:function(){t.$emit("change",e.value)}},[e.label])})])])])}});
//# sourceMappingURL=setting.js.map
