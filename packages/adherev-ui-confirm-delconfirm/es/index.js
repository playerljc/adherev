import MessageDialog from"@baifendian/adherev-ui-messagedialog";import Util from"@baifendian/adherev-util";import Intl from"@baifendian/adherev-util-intl";import DelConfirm,{open}from"./delconfirm";var withVue=Util._util.withVue;DelConfirm.open=open,DelConfirm.install=function(e){e.use(MessageDialog),e.use(Intl),e.component(DelConfirm.name,DelConfirm),withVue(e,"DelConfirm",DelConfirm)};export default DelConfirm;
//# sourceMappingURL=index.js.map
