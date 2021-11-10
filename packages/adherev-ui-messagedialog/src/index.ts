import { ConfigProvider, Button } from 'ant-design-vue';
import formCreate from '@form-create/ant-design-vue';

import MessageDialog from './messagedialog';
import Util from '@baifendian/adherev-util';
const {
  _util: { withVue },
} = Util;

MessageDialog.isUse = () => true;
MessageDialog.use = (Vue) => {
  Vue.use(ConfigProvider);
  Vue.use(Button);
  Vue.use(formCreate);
  withVue(Vue, 'MessageDialog', MessageDialog);
};

export default MessageDialog;
