"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.function.name.js"),require("core-js/modules/es.array.flat.js"),require("core-js/modules/es.array.unscopables.flat.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),adherev_ui_space_1=(0,tslib_1.__importDefault)(require("@baifendian/adherev-ui-space")),vue_1=require("vue"),AnchorNavigation_1=(0,tslib_1.__importStar)(require("../AnchorNavigation")),adherev_1=require("@baifendian/adherev"),selectPrefix="adherev-ui-playground-page",playGroundPageProps=(0,tslib_1.__assign)({},AnchorNavigation_1.anchorNavigationProps);exports.default=(0,vue_1.defineComponent)({name:"adv-playground-page",props:playGroundPageProps,setup:function(r,e){var o=e.slots,a=(0,vue_1.computed)(function(){var e;return null===(e=null===(e=o.default)||void 0===e?void 0:e.call(o).filter(function(o){return["CodeBoxSection","adv-playground-page-code-box-section"].some(function(e){var r;return!!o.type&&(!(null===(r=adherev_1.Util.isObject)||void 0===r||!r.call(adherev_1.Util,o.type)||!o.type.name)&&o.type.name===e)})}).map(function(e){var r;return null===(r=null===(e=null===(e=null==e?void 0:e.props)||void 0===e?void 0:e.config)||void 0===e?void 0:e.map)||void 0===r?void 0:r.call(e,function(e){return{name:e.name,anchor:e.id}})}))||void 0===e?void 0:e.flat()});return function(){var e;return(0,_vue.createVNode)("div",{class:selectPrefix},[(0,_vue.createVNode)(AnchorNavigation_1.default,{anchors:a.value,defaultActiveAnchor:r.defaultActiveAnchor,anchorPosition:r.anchorPosition,scrollEl:r.scrollEl},{default:function(){return[(0,_vue.createVNode)(adherev_ui_space_1.default.Group,{direction:"vertical"},{default:function(){return[null===(e=null==o?void 0:o.default)||void 0===e?void 0:e.call(o)]}})]}})])}}});
//# sourceMappingURL=index.js.map
