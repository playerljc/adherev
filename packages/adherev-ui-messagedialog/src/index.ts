import { Button, ConfigProvider } from 'ant-design-vue';

// import VueI18n from 'vue-i18n';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';
import formCreate from '@form-create/ant-design-vue';

import MessageDialog from './messagedialog';

const {
  _util: { withVue },
} = Util;

MessageDialog.isUse = () => true;

MessageDialog.use = (Vue) => {
  (Resource as any).isUse() && (Resource as any).use(Vue);
  Intl.isUse() && Intl.use(Vue);
  // Vue.use(VueI18n);
  Vue.use(ConfigProvider);
  Vue.use(Button);
  Vue.use(formCreate);
  withVue(Vue, 'MessageDialog', MessageDialog);
};

export default MessageDialog;
