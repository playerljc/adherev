import { ConfigProvider, Button } from 'ant-design-vue';
import formCreate from '@form-create/ant-design-vue';
// @ts-ignore
import MessageDialog from './messagedialog';

MessageDialog.isUse = () => true;
MessageDialog.use = (Vue) => {
  Vue.use(ConfigProvider);
  Vue.use(Button);
  Vue.use(formCreate);
};

export default MessageDialog;
