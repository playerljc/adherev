import BfdUtil from '@baifendian/adherev-util';
import Resource from './resource';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
Resource.isUse = () => true;
// @ts-ignore
Resource.use = (Vue: any) => {
  withVue(Vue, 'Resource', Resource);
};

export default Resource;
