"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var vue_1=require("vue"),vue_types_1=require("vue-types"),props={conditional:(0,vue_types_1.bool)().def(!0)};exports.default=(0,vue_1.defineComponent)({name:"adv-conditionalrender",props:props,slots:["default","noMatch"],setup:function(e,t){var o=t.slots;return function(){return e.conditional?o.default?o.default():null:o.noMatch?o.noMatch():null}}});
//# sourceMappingURL=conditionalrender.js.map
