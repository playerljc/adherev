import formCreate from '@form-create/ant-design-vue';
// @ts-ignore
import MessageDialog from './messagedialog';

MessageDialog.isUse = () => true;
MessageDialog.use = (Vue) => {
  Vue.use(formCreate);
};

export default MessageDialog;
