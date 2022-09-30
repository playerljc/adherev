import Util from '@baifendian/adherev-util';

import ImportantConfirm, { open } from './importantconfirm';
import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: IComponent = withInstall(ImportantConfirm);

Component.open = open;

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Component);
  withVue(Vue, 'ImportantConfirm', Component);
};

export default Component;
