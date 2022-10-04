import Util from '@baifendian/adherev-util';

import JdCategoryTabItem from './item';
import JdCategoryTab from './jdcategorytab';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(JdCategoryTab);

withInstall(JdCategoryTabItem);

Component.Item = JdCategoryTabItem;

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(JdCategoryTab);
  Vue.use(JdCategoryTabItem);
  withVue(Vue, 'JdCategoryTab', JdCategoryTab);
};

export default Component;
