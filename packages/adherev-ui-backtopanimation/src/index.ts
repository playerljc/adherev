import Util from '@baifendian/adherev-util';
import BackTopAnimation from './backtopanimation';
import { IComponent } from './types';


const {
  _util: { withInstall, withVue },
} = Util;

const Component: IComponent = withInstall(BackTopAnimation);

Component.isUse = () => true;

Component.use = (Vue:any) => {
  Vue.use(Component);
  withVue(Vue, 'BackTopAnimation', Component);
};

export default Component;
