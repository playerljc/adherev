import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';

import ConfigProvider from './configprovider';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(ConfigProvider);

Component.isUse = () => true;

Component.use = (Vue) => {
  Intl.isUse() && Intl.use(Vue);
  (Resource as any).isUse() && (Resource as any).use(Vue);

  Vue.use(Component);
  withVue(Vue, 'ConfigProvider', Component);
};

export default Component;
