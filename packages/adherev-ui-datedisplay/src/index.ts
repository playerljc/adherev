import Util from '@baifendian/adherev-util';

import DateDisplay from './datedisplay';

const {
  _util: { withInstall, withVue },
} = Util;

DateDisplay.isUse = () => true;

DateDisplay.use = (Vue) => {
  Object.keys(DateDisplay).forEach((key) => {
    const Com = withInstall(DateDisplay[key]);

    Vue.use(Com);

    withVue(Vue, Com.name, Com);
  });
};

export default DateDisplay;
