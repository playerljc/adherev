import JdCategoryTab from './jdcategorytab';
import JdCategoryTabItem from './item';
import { withInstall } from '../../_util/index';

withInstall(JdCategoryTab);
withInstall(JdCategoryTabItem);

JdCategoryTab.Item = JdCategoryTabItem;

JdCategoryTab.isUse = () => true;
JdCategoryTab.use = (Vue) => {
  Vue.use(JdCategoryTab);
  Vue.use(JdCategoryTabItem);
};

export default JdCategoryTab;
