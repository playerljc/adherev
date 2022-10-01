import VueI18n from"vue-i18n";import Intl,{extend,getLocal}from"./intl";Intl.install=function(t){extend(t)},Intl.use=function(t){t.use(VueI18n),t.use(Intl)},Intl.isUse=function(){return!0},Intl.getLocal=getLocal;export default Intl;
//# sourceMappingURL=index.js.map
