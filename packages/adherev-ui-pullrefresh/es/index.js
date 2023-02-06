import BfdUtil from"@baifendian/adherev-util";import Intl from"@baifendian/adherev-util-intl";import PullRefresh from"./pullrefresh";var withVue=BfdUtil._util.withVue;PullRefresh.install=function(e){return e.component(Intl.name,Intl),e.component(PullRefresh.name,PullRefresh),withVue(e,"PullRefresh",PullRefresh),e};export default PullRefresh;
//# sourceMappingURL=index.js.map
