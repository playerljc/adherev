import Notification from './notification';
import Util from '@baifendian/adherev-util';
const {
  _util: { withVue },
} = Util;

Notification.isUse = () => true;
Notification.use = (Vue) => {
  withVue(Vue, 'Notification', Notification);
};

export default Notification;
