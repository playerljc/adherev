"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.define-property.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++)for(var i in a=arguments[t])Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var adhere_ui_bmap_1=__importDefault(require("@baifendian/adhere-ui-bmap")),adherev_util_1=__importDefault(require("@baifendian/adherev-util")),bmap_1=__importDefault(require("./bmap")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue,BMap=__assign(__assign({},adhere_ui_bmap_1.default),{BMap:bmap_1.default});BMap.isUse=function(){return!0},BMap.use=function(e){e.use(bmap_1.default),withVue(e,"BMap",BMap)},withInstall(bmap_1.default),exports.default=BMap;
//# sourceMappingURL=index.js.map
