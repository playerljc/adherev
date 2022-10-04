import Util from '@baifendian/adherev-util';

import {
  Label,
  TableGridLayout,
  Value,
  getRenderDetail,
  renderGridSearchFormGroup,
} from './tablegridlayout';
import { getRenderDetailFunction, renderGridSearchFormGroupFunction } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: {
  isUse?: () => boolean;
  use?: (vue) => void;
  getRenderDetail?: getRenderDetailFunction;
  renderGridSearchFormGroup?: renderGridSearchFormGroupFunction;
} = {};

withInstall(Label);
withInstall(Value);
withInstall(TableGridLayout);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Label);
  Vue.use(Value);
  Vue.use(TableGridLayout);
  withVue(Vue, Label.name, Label);
  withVue(Vue, Value.name, Value);
  withVue(Vue, TableGridLayout.name, TableGridLayout);
};

Component.getRenderDetail = getRenderDetail;
Component.renderGridSearchFormGroup = renderGridSearchFormGroup;

export default Component;
