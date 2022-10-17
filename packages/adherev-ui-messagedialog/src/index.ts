import { Button, ConfigProvider } from 'ant-design-vue';

import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';
import formCreate from '@form-create/ant-design-vue';

import MessageDialog from './messagedialog';

const {
  _util: { withVue },
} = Util;

MessageDialog.isUse = () => true;
MessageDialog.use = (Vue: any) => {
  (Resource as any).isUse() && (Resource as any).use(Vue);
  (Intl as any).isUse() && (Intl as any).use(Vue);

  Vue.use(ConfigProvider);
  Vue.use(Button);
  Vue.use(formCreate);
  withVue(Vue, 'MessageDialog', MessageDialog);
};

export default MessageDialog;
