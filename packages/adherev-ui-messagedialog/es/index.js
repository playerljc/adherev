import{Button,ConfigProvider}from"ant-design-vue";import Util from"@baifendian/adherev-util";import formCreate from"@form-create/ant-design-vue";import MessageDialog from"./messagedialog";var withVue=Util._util.withVue;MessageDialog.isUse=function(){return!0},MessageDialog.use=function(e){e.use(ConfigProvider),e.use(Button),e.use(formCreate),withVue(e,"MessageDialog",MessageDialog)};export default MessageDialog;
//# sourceMappingURL=index.js.map