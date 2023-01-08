"use strict";require("core-js/modules/es.object.keys.js"),require("core-js/modules/es.symbol.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.object.get-own-property-descriptor.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.object.get-own-property-descriptors.js"),require("core-js/modules/es.object.define-properties.js");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));function ownKeys(t,e){var r,o=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)),o}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach(function(e){(0,_defineProperty2.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.PlaygroundMixinsProps=void 0;var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),copy_to_clipboard_1=tslib_1.__importDefault(require("copy-to-clipboard")),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),Card_1=tslib_1.__importDefault(require("./Card")),Message_1=tslib_1.__importDefault(require("./Message")),constant_1=tslib_1.__importDefault(require("./constant")),selectPrefix="adherev-ui-playground",PlayGroundMixins=(exports.PlaygroundMixinsProps={cardProps:{type:Object,default:function(){return null}},isActive:{type:Boolean,default:!1},defaultExpand:{type:Boolean,default:!1}},{props:exports.PlaygroundMixinsProps,data:function(){return{expand:this.defaultExpand}},computed:{expandIcon:function(){return this.expand?constant_1.default.DownSquareOutlined:constant_1.default.UpSquareOutlined},expandAlt:function(){return this.expand?adherev_util_intl_1.default.tv("收起"):adherev_util_intl_1.default.tv("展开")}},watch:{defaultExpand:function(e){this.expand=e}},methods:{copy:function(e){this.getClipboardText(e).then(function(e){(0,copy_to_clipboard_1.default)(e),Message_1.default.success(adherev_util_intl_1.default.tv("复制成功"))})}},render:function(e){var t=this,r=this,o=r.$slots,s=r.cardProps,r=r.isActive;return e("div",{class:(0,classnames_1.default)(selectPrefix,r?"".concat(selectPrefix,"-active"):"")},[e(Card_1.default,{attrs:{actions:["copy","expand"]},props:_objectSpread({},s||{})},[e("img",{class:"".concat(selectPrefix,"-action-btn"),attrs:{src:constant_1.default.CopyOutlined,alt:adherev_util_intl_1.default.tv("复制")},slot:"copy",on:{click:function(e){t.copy(e)}}}),e("img",{class:"".concat(selectPrefix,"-action-btn"),attrs:{src:this.expandIcon,alt:this.expandAlt},slot:"expand",on:{click:function(){t.expand=!t.expand}}}),o.default]),this.renderCodeView(e)])}});exports.default=PlayGroundMixins;
//# sourceMappingURL=PlayGroundMixins.js.map
