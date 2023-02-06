import { Button, Empty, Input, Popover, Skeleton, Spin } from 'ant-design-vue';
import { App, Plugin } from 'vue';

import BackTopAnimation from '@baifendian/adherev-ui-backtopanimation';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import ScrollLoad from '@baifendian/adherev-ui-scrollload';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import Comment from './Comment/index';

const {
  _util: { withVue },
} = Util;

Comment.install = (app: App) => {
  app.component(Button.name, Button);
  app.component(Empty.name, Empty);
  app.component(Input.name, Input);
  app.component(Popover.name, Popover);
  app.component(Skeleton.name, Skeleton);
  app.component(Spin.name, Spin);

  app.component(BackTopAnimation.name, BackTopAnimation);
  app.component(FlexLayout.name, FlexLayout);
  app.component(ScrollLoad.name, ScrollLoad);
  app.use(Intl);
  app.component(Comment.name, Comment);

  withVue(app, 'Comment', Comment);
};

export default Comment as typeof Comment & Plugin;
