"use strict";require("core-js/modules/es.object.define-property.js");var __createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var delconfirm_1=__importStar(require("./delconfirm")),adherev_util_1=__importDefault(require("@baifendian/adherev-util")),_a=adherev_util_1.default._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(delconfirm_1.default);Component.open=delconfirm_1.open,Component.isUse=function(){return!0},Component.use=function(e){e.use(Component),withVue(e,"DelConfirm",Component)},exports.default=Component;
//# sourceMappingURL=index.js.map
