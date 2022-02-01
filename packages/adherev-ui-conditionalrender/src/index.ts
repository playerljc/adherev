import ConditionalRender from './conditionalrender';
import ConditionalRenderShow from './show';
import ConditionalRenderVisibility from './visibility';
import Util from '@baifendian/adherev-util';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(ConditionalRender);
withInstall(ConditionalRenderShow);
withInstall(ConditionalRenderVisibility);

Component.isUse = () => true;
Component.use = (Vue) => {
  Vue.use(Component);
  Vue.use(ConditionalRenderShow);
  Vue.use(ConditionalRenderVisibility);

  withVue(Vue, 'ConditionalRender', ConditionalRender);
  withVue(Vue, 'ConditionalRenderShow', ConditionalRenderShow);
  withVue(Vue, 'ConditionalRenderVisibility', ConditionalRenderVisibility);
};
Component.Show = ConditionalRenderShow;
Component.Visibility = ConditionalRenderVisibility;

export default Component;
