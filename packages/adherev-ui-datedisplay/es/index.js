import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.keys.js";import Util from"@baifendian/adherev-util";import DateDisplay from"./datedisplay";var _a=Util._util,withInstall=_a.withInstall,withVue=_a.withVue;DateDisplay.isUse=function(){return!0},DateDisplay.use=function(e){Object.keys(DateDisplay).forEach(function(t){"dayjs"!==t&&(t=withInstall(DateDisplay[t]),e.use(t))}),withVue(e,"DateDisplay",DateDisplay)};export default DateDisplay;
//# sourceMappingURL=index.js.map
