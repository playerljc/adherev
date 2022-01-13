"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_babelHelperVueJsxMergeProps=_interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var adherev_util_intl_1=__importDefault(require("@baifendian/adherev-util-intl")),Table_1=__importDefault(require("./Table")),Collapse_1=__importDefault(require("./Collapse")),types_1=require("./types"),selectPrefix="adherev-ui-playground-props";exports.default={name:"adv-playground-props",props:__assign(__assign({},types_1.propTypes),{data:{type:Array,default:function(){return[]}}}),computed:{columns:function(){return[{title:adherev_util_intl_1.default.tv("参数"),key:"params",dataIndex:"params",width:"20%"},{title:adherev_util_intl_1.default.tv("说明"),key:"desc",dataIndex:"desc",width:"50%"},{title:adherev_util_intl_1.default.tv("类型"),key:"type",dataIndex:"type",width:"15%",slot:"type"},{title:adherev_util_intl_1.default.tv("默认值"),key:"defaultVal",dataIndex:"defaultVal",width:"15%",slot:"defaultVal"}]}},components:{Table:Table_1.default,Collapse:Collapse_1.default},render:function(t){var e,r={type:function(e){e=e.value;return t("code",{class:selectPrefix+"-highlight"},[e])},defaultVal:function(e){e=e.value;return t("code",[e||"-"])}},a={};for(e in types_1.propTypes)a[e]=this[e];return t(Collapse_1.default,(0,_babelHelperVueJsxMergeProps.default)([{},{props:__assign({},a)}]),[t("div",{class:selectPrefix},[t(Table_1.default,{scopedSlots:r,attrs:{columns:this.columns,dataSource:this.data.map(function(e,t){return __assign(__assign({},e),{id:""+(t+1)})}),rowKey:"id"}})])])}};
//# sourceMappingURL=Props.js.map
