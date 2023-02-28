import { App, ExtractPropTypes, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';

import {
  Label,
  TableGridLayout,
  Value,
  getRenderDetail,
  renderGridSearchFormGroup,
} from './tablegridlayout';

const {
  _util: { withVue },
} = Util;

TableGridLayout.getRenderDetail = getRenderDetail;
TableGridLayout.renderGridSearchFormGroup = renderGridSearchFormGroup;
TableGridLayout.Label = Label;
TableGridLayout.Value = Value;

TableGridLayout.install = function (app: App) {
  app.component(Label.name, Label);
  app.component(Value.name, Value);
  app.component(TableGridLayout.name, TableGridLayout);
  withVue(app, 'TableGridLayout', TableGridLayout);

  return app;
};

export default TableGridLayout as typeof TableGridLayout &
  Plugin & {
    readonly Label: typeof Label;
    readonly Value: typeof Value;
    readonly getRenderDetail: Partial<ExtractPropTypes<ReturnType<typeof getRenderDetail>>>;
    readonly renderGridSearchFormGroup: Partial<
      ExtractPropTypes<ReturnType<typeof renderGridSearchFormGroup>>
    >;
  };
