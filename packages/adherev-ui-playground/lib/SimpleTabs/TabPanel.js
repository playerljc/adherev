"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.tabPanelProps=void 0,require("tslib")),classnames_1=(0,tslib_1.__importDefault)(require("classnames")),vue_1=require("vue"),vue_types_1=require("vue-types"),selectorPrefix="adherev-ui-playground-simple-tabs-panel";exports.tabPanelProps={title:(0,vue_types_1.string)().def(""),index:(0,vue_types_1.string)().def("")},exports.default=(0,vue_1.defineComponent)({name:"adv-playground-simple-tabs-tab-panel",props:exports.tabPanelProps,setup:function(t,e){var r=e.slots;return function(){var e=(0,vue_1.inject)("getActiveKey")();return(0,_vue.createVNode)("div",{class:(0,classnames_1.default)(selectorPrefix,e===t.index?"active":"")},[null===(e=null==r?void 0:r.default)||void 0===e?void 0:e.call(r)])}}});
//# sourceMappingURL=TabPanel.js.map
