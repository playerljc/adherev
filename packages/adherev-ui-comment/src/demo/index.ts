import Antd from 'ant-design-vue';
import { createApp, h } from 'vue';

import DateDisplay from '@baifendian/adherev-ui-datedisplay';
import GlobalIndicator from '@baifendian/adherev-ui-globalindicator';
import Intl from '@baifendian/adherev-util-intl';

import Comment from '../index';
// @ts-ignore
import App from './index.vue';

import '../index.less';
import './index.less';

const app = createApp({
  render() {
    return h(App);
  },
});

app.use(Antd);
Intl.use(app);
(GlobalIndicator as any).use(app);
DateDisplay.use(app);
Comment.use(app);

Intl.init({
  prefix: 'local',
}).then(() => {
  app.mount('#app');
});
