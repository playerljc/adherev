import Util from '@baifendian/adherev-util';

import _JdCategoryTab from './jdcategorytab';
import JdCategoryTabItem from './item';

const {
  _util: { withInstall, withVue },
} = Util;

type JdCategoryTabType = {
  isUse(): boolean;
  use(Vue: any): void;
  Item: any;
  [prop: string]: any;
};

// @ts-ignore
const JdCategoryTab: JdCategoryTabType = _JdCategoryTab;

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
