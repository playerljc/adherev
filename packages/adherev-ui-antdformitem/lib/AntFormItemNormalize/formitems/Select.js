"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.includes.js"),require("core-js/modules/es.string.includes.js"),Object.defineProperty(exports,"__esModule",{value:!0});var ant_design_vue_1=require("ant-design-vue"),util_1=require("../util"),Wrap=(0,util_1.extend)(ant_design_vue_1.Select,{functional:!0,inject:["getEl"],render:function(e,r){return(0,util_1.assignAttrs)(ant_design_vue_1.Select,r,Wrap.defaultProps),e(ant_design_vue_1.Select,r.data,r.children)}});Wrap.defaultProps={allowClear:!0,showSearch:!0,filterOption:function(e,r){return r.componentOptions.children[0].text.toLowerCase().includes(e.toLowerCase())}},exports.default=Wrap;
//# sourceMappingURL=Select.js.map
