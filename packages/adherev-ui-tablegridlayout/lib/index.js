"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),tablegridlayout_1=require("./tablegridlayout"),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(tablegridlayout_1.TableGridLayout);withInstall(tablegridlayout_1.Label),withInstall(tablegridlayout_1.Value),Component.getRenderDetail=tablegridlayout_1.getRenderDetail,Component.renderGridSearchFormGroup=tablegridlayout_1.renderGridSearchFormGroup,Component.Label=tablegridlayout_1.Label,Component.Value=tablegridlayout_1.Value,Component.isUse=function(){return!0},Component.use=function(e){e.use(tablegridlayout_1.TableGridLayout),e.use(tablegridlayout_1.Label),e.use(tablegridlayout_1.Value),withVue(e,"TableGridLayout",Component)},exports.default=Component;
//# sourceMappingURL=index.js.map