import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.keys.js";import{__assign}from"tslib";import Util from"@baifendian/adherev-util";import DateDisplay from"./datedisplay";var _a=Util._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(__assign({name:"adv-datedisplay"},DateDisplay));Object.keys(DateDisplay).forEach(function(t){"dayjs"!==t&&withInstall(DateDisplay[t])}),Component.isUse=function(){return!0},Component.use=function(e){Object.keys(DateDisplay).forEach(function(t){"dayjs"!==t&&e.use(DateDisplay[t])}),withVue(e,"DateDisplay",DateDisplay)};export default Component;
//# sourceMappingURL=index.js.map