import JdCategoryTab from './jdcategorytab';
import JdCategoryTabItem from './item';
import Util from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = Util;

withInstall(JdCategoryTab);
withInstall(JdCategoryTabItem);

JdCategoryTab.Item = JdCategoryTabItem;

JdCategoryTab.isUse = () => true;
JdCategoryTab.use = (Vue) => {
  Vue.use(JdCategoryTab);
  Vue.use(JdCategoryTabItem);
  withVue(Vue, 'JdCategoryTab', JdCategoryTab);
};

export default JdCategoryTab;
