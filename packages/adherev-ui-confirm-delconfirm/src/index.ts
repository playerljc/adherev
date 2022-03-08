import Util from '@baifendian/adherev-util';

import DelConfirm, { open } from './delconfirm';

import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: IComponent = withInstall(DelConfirm);

Component.open = open;

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Component);
  withVue(Vue, 'DelConfirm', Component);
};

export default Component;
