import Intl,{extend,getLocal}from"./intl";Intl.install=function(t){console.log("intlInstall"),extend(t)},Intl.isUse=function(){return!0},Intl.use=function(t){t.use(Intl)},Intl.getLocal=getLocal;export default Intl;
//# sourceMappingURL=index.js.map
