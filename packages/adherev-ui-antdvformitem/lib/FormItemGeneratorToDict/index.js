"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.object.keys.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.FunctionComponents=exports.DictFormItem=void 0;var tslib_1=require("tslib"),omit_js_1=tslib_1.__importDefault(require("omit.js")),FormItemGeneratorToDict=tslib_1.__importStar(require("./FormItemGeneratorToDict")),validatorMulti=FormItemGeneratorToDict.validatorMulti,validatorNormal=FormItemGeneratorToDict.validatorNormal,OtherFormItemComponents=tslib_1.__rest(FormItemGeneratorToDict,["validatorMulti","validatorNormal"]),DictFormItem=OtherFormItemComponents.default,FunctionComponents=(exports.DictFormItem=DictFormItem,(0,omit_js_1.default)(OtherFormItemComponents,["default"]));exports.FunctionComponents=FunctionComponents,exports.default={install:function(e){Object.keys(FunctionComponents).forEach(function(t){e.component("adv-formitemgeneratortodict-".concat(t.toLowerCase()),FunctionComponents[t])})}};
//# sourceMappingURL=index.js.map
