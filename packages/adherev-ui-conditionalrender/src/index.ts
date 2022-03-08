import ConditionalRender from './conditionalrender';
import ConditionalRenderShow from './show';
import ConditionalRenderVisibility from './visibility';
import ConditionalRenderWrap from './wrap';
import Util from '@baifendian/adherev-util';

import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: IComponent = withInstall(ConditionalRender);

withInstall(ConditionalRenderShow);
withInstall(ConditionalRenderVisibility);
withInstall(ConditionalRenderWrap);

Component.isUse = () => true;
Component.use = (Vue: any) => {
  Vue.use(Component);
  Vue.use(ConditionalRenderShow);
  Vue.use(ConditionalRenderVisibility);
  Vue.use(ConditionalRenderWrap);

  withVue(Vue, 'ConditionalRender', ConditionalRender);
  withVue(Vue, 'ConditionalRenderShow', ConditionalRenderShow);
  withVue(Vue, 'ConditionalRenderVisibility', ConditionalRenderVisibility);
  withVue(Vue, 'ConditionalRenderWrap', ConditionalRenderWrap);
};
Component.Show = ConditionalRenderShow;
Component.Visibility = ConditionalRenderVisibility;
Component.Wrap = ConditionalRenderWrap;

export default Component;
