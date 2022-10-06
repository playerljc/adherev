import Util from '@baifendian/adherev-util';

import {
  Label,
  TableGridLayout,
  Value,
  getRenderDetail,
  renderGridSearchFormGroup,
} from './tablegridlayout';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(TableGridLayout);
withInstall(Label);
withInstall(Value);

Component.getRenderDetail = getRenderDetail;
Component.renderGridSearchFormGroup = renderGridSearchFormGroup;
Component.Label = Label;
Component.Value = Value;

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(TableGridLayout);
  Vue.use(Label);
  Vue.use(Value);
  withVue(Vue, 'TableGridLayout', Component);
};

export default Component;
