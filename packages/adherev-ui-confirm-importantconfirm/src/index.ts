import MessageDialog from '@baifendian/adherev-ui-messagedialog';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';

import ImportantConfirm, { open } from './importantconfirm';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(ImportantConfirm);

Component.open = open;

Component.isUse = () => true;

Component.use = (Vue) => {
  (MessageDialog as any).isUse() && (MessageDialog as any).use(Vue);
  Intl.isUse() && Intl.use(Vue);
  (Resource as any).isUse() && (Resource as any).use(Vue);

  Vue.use(Component);
  withVue(Vue, 'ImportantConfirm', Component);
};

export default Component;
