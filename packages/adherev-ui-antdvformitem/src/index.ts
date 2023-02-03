import Antdv from 'ant-design-vue';

import Util from '@baifendian/adherev-util';
import Dict from '@baifendian/adherev-util-dict';
import Intl from '@baifendian/adherev-util-intl';
import WatchMemoized from '@baifendian/adherev-util-watchmemoized';

import AntdvFormItemNormalize, * as AntdvFormItemNormalizeDefault from './AntdvFormItemNormalize';
import FormItemGeneratorToDict, {
  DictFormItem,
  FunctionComponents,
} from './FormItemGeneratorToDict';
import { IComponent } from './types';

const {
  _util: { withVue },
} = Util;

const Components = {
  AntdvFormItemNormalize: {
    ...AntdvFormItemNormalizeDefault,
  },
  FormItemGeneratorToDict: DictFormItem,
  FormItemGeneratorToDictComponents: FunctionComponents,
};

const Component: IComponent = {
  isUse: () => true,
  use: (Vue) => {
    if ((Dict as any).isUse()) {
      (Dict as any).use(Vue);
    }
    if ((Intl as any).isUse()) {
      (Intl as any).use(Vue);
    }
    if ((WatchMemoized as any).isUse()) {
      (WatchMemoized as any).use(Vue);
    }

    Vue.use(Antdv);

    Vue.use(AntdvFormItemNormalize);
    Vue.use(FormItemGeneratorToDict);
    withVue(Vue, 'AntdvFormItem', {
      ...Components,
    });
  },
  ...Components,
};

export default Component;
