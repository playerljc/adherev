import Util from '@baifendian/adherev-util';

import DateDisplay from './datedisplay';

const {
  _util: { withInstall, withVue },
} = Util;

DateDisplay.isUse = () => true;

DateDisplay.use = (Vue) => {
  Object.keys(DateDisplay).forEach((key) => {
    if (key === 'dayjs') return;

    const Com = withInstall(DateDisplay[key]);

    Vue.use(Com);
  });

  withVue(Vue, 'DateDisplay', DateDisplay);
};

export default DateDisplay;
