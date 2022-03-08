import Util from '@baifendian/adhere-util';
import * as _util from './_util';

type ComponentType = Partial<
  {
    isUse(): boolean;
    use(Vue: any): void;
  } & typeof Util
>;

const Component: ComponentType = Util;

Component.isUse = () => true;
Component.use = (Vue: any) => {
  _util.withVue(Vue, 'Util', Component);
};

export default { ...Component, _util: { ..._util } };
