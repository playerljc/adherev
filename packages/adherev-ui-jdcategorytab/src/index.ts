import Util from '@baifendian/adherev-util';

import JdCategoryTab from './jdcategorytab';
import JdCategoryTabItem from './item';

const {
  _util: { withInstall, withVue },
} = Util;

withInstall(JdCategoryTab);
withInstall(JdCategoryTabItem);

JdCategoryTab.Item = JdCategoryTabItem;

JdCategoryTab.isUse = () => true;

JdCategoryTab.use = (Vue: any) => {
  Vue.use(JdCategoryTab);
  Vue.use(JdCategoryTabItem);
  withVue(Vue, 'JdCategoryTab', JdCategoryTab);
};

export default JdCategoryTab;
