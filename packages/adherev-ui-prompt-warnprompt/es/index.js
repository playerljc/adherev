import _Modal from"ant-design-vue/es/modal";import _message from"ant-design-vue/es/message";import BfdUtil from"@baifendian/adherev-util";import Intl from"@baifendian/adherev-util-intl";import{openWarnDialog,openWarnMessage}from"./warnprompt";var withVue=BfdUtil._util.withVue,WarnPrompt={openWarnMessage:openWarnMessage,openWarnDialog:openWarnDialog,isUse:function(){return!0},use:function(e){Intl.isUse()&&Intl.use(e),e.use(_message),e.use(_Modal),withVue(e,"WarnPrompt",WarnPrompt)}};export default WarnPrompt;
//# sourceMappingURL=index.js.map
