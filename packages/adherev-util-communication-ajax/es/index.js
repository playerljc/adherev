import GlobalIndicator from"@baifendian/adherev-ui-globalindicator";import BfdUtil from"@baifendian/adherev-util";import Intl from"@baifendian/adherev-util-intl";import Ajax from"./ajax";var withVue=BfdUtil._util.withVue;Ajax.install=function(i){return i.use(GlobalIndicator),i.use(Intl),withVue(i,"Ajax",Ajax),i};export default Ajax;
//# sourceMappingURL=index.js.map
