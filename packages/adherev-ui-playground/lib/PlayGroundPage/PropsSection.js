"use strict";require("core-js/modules/es.object.keys.js"),require("core-js/modules/es.symbol.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.object.get-own-property-descriptor.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.object.get-own-property-descriptors.js"),require("core-js/modules/es.object.define-properties.js");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));function ownKeys(r,e){var t,o=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),o.push.apply(o,t)),o}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){(0,_defineProperty2.default)(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_ui_space_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-space")),Props_1=tslib_1.__importDefault(require("../Props")),Section_1=tslib_1.__importStar(require("./Section")),PropsSection={name:"adv-playground-page-props-section",props:tslib_1.__assign(tslib_1.__assign({},Section_1.SectionPropTypes),{config:{type:Array,default:function(){return[]}}}),render:function(t){var e=this,r=e.title,o=e.extra,e=e.config;return t(Section_1.default,{attrs:{title:r,extra:o}},[t(adherev_ui_space_1.default.Group,{attrs:{direction:"vertical"}},[(e||[]).map(function(e,r){return t(Props_1.default,{key:r+1,props:_objectSpread({},e)})})])])}};exports.default=PropsSection;
//# sourceMappingURL=PropsSection.js.map
