"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.object.keys.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),datedisplay_1=tslib_1.__importDefault(require("./datedisplay")),withVue=adherev_util_1.default._util.withVue,Component=tslib_1.__assign(tslib_1.__assign({name:"adv-datedisplay"},datedisplay_1.default),{install:function(t){return Object.keys(datedisplay_1.default).forEach(function(e){"dayjs"!==e&&t.component(datedisplay_1.default[e].name,datedisplay_1.default[e])}),withVue(t,"DateDisplay",datedisplay_1.default),t}});exports.default=Component;
//# sourceMappingURL=index.js.map
