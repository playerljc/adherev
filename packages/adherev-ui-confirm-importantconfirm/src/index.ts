import MessageDialog from '@baifendian/adherev-ui-messagedialog';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';

import ImportantConfirm, { open } from './importantconfirm';
import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: IComponent = withInstall(ImportantConfirm);

Component.open = open;

Component.isUse = () => true;

Component.use = (Vue: any) => {
  (MessageDialog as any).isUse() && (MessageDialog as any).use(Vue);
  (Intl as any).isUse() && (Intl as any).use(Vue);
  (Resource as any).isUse() && (Resource as any).use(Vue);

  Vue.use(Component);
  withVue(Vue, 'ImportantConfirm', Component);
};

export default Component;
