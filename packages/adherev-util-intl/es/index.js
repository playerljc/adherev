import VueI18n from"vue-i18n";import IntlV,{extend}from"./intl";IntlV.install=function(n){extend(n)},IntlV.isUse=function(){return!0},IntlV.use=function(n){n.use(IntlV),n.use(VueI18n)};export default IntlV;
//# sourceMappingURL=index.js.map
