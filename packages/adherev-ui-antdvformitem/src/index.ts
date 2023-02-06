import Antdv from 'ant-design-vue';
import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';
import Dict from '@baifendian/adherev-util-dict';
import Intl from '@baifendian/adherev-util-intl';
import WatchMemoized from '@baifendian/adherev-util-watchmemoized';

import AntdvFormItemNormalize, * as AntdvFormItemNormalizeDefault from './AntdvFormItemNormalize';
import FormItemGeneratorToDict, {
  DictFormItem,
  FunctionComponents,
} from './FormItemGeneratorToDict';

const {
  _util: { withVue },
} = Util;

const Components = {
  AntdvFormItemNormalize: AntdvFormItemNormalizeDefault,
  FormItemGeneratorToDict: DictFormItem,
  FormItemGeneratorToDictComponents: FunctionComponents,
};

const Wrap = {
  install: (app: App) => {
    app.use(Dict);
    app.use(Intl);
    app.use(WatchMemoized);
    app.use(Antdv);
    app.use(AntdvFormItemNormalize);
    app.use(FormItemGeneratorToDict);

    withVue(app, 'AntdvFormItem', Components);

    return app;
  },
  ...Components,
};

export default Wrap as typeof Wrap &
  Plugin & {
    readonly AntdvFormItemNormalize: typeof AntdvFormItemNormalizeDefault;
    readonly FormItemGeneratorToDict: typeof DictFormItem;
    readonly FormItemGeneratorToDictComponents: typeof FunctionComponents;
  };
