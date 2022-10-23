import { Button, Empty, Input, Popover, Skeleton, Spin } from 'ant-design-vue';

import BackTopAnimation from '@baifendian/adherev-ui-backtopanimation';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import ScrollLoad from '@baifendian/adherev-ui-scrollload';
import Teleport from '@baifendian/adherev-ui-teleport';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import Comment from './Comment/index';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(Comment);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Button);
  Vue.use(Empty);
  Vue.use(Input);
  Vue.use(Popover);
  Vue.use(Skeleton);
  Vue.use(Spin);
  BackTopAnimation.isUse() && BackTopAnimation.use(Vue);
  FlexLayout.isUse() && FlexLayout.use(Vue);
  ScrollLoad.isUse() && ScrollLoad.use(Vue);
  Teleport.isUse() && Teleport.use(Vue);
  Intl.isUse() && Intl.use(Vue);

  Vue.use(Component);
  withVue(Vue, 'Comment', Component);
};

export default Component;
