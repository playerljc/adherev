"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.match.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),conditionalrender_1=tslib_1.__importDefault(require("./conditionalrender")),show_1=tslib_1.__importDefault(require("./show")),visibility_1=tslib_1.__importDefault(require("./visibility")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(conditionalrender_1.default);withInstall(show_1.default),withInstall(visibility_1.default),Component.isUse=function(){return!0},Component.use=function(e){e.use(Component),e.use(show_1.default),e.use(visibility_1.default),withVue(e,"ConditionalRender",conditionalrender_1.default),withVue(e,"ConditionalRenderShow",show_1.default),withVue(e,"ConditionalRenderVisibility",visibility_1.default)},Component.Show=show_1.default,Component.Visibility=visibility_1.default,Component.conditionalRender=function(e){var t=e.conditional,i=e.match,e=e.noMatch;return t?i:e||null},Component.conditionalArr=function(e){return e.filter(function(e){var t;return!(e.data.props&&"conditional"in e.data.props&&!e.data.props.conditional)||!(!e.data.props.noMatch||null===(null===(e=(t=e.data.props).noMatch)||void 0===e?void 0:e.call(t)))})},Component.conditionalNotEmptyArr=function(e){return e.filter(function(e){return!(null==e)})},exports.default=Component;
//# sourceMappingURL=index.js.map
