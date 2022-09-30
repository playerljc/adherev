import { Button, ConfigProvider } from 'ant-design-vue';

import Util from '@baifendian/adherev-util';
import formCreate from '@form-create/ant-design-vue';

import MessageDialog from './messagedialog';

const {
  _util: { withVue },
} = Util;

MessageDialog.isUse = () => true;
MessageDialog.use = (Vue: any) => {
  Vue.use(ConfigProvider);
  Vue.use(Button);
  Vue.use(formCreate);
  withVue(Vue, 'MessageDialog', MessageDialog);
};

export default MessageDialog;
