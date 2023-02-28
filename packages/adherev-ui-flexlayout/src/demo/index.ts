import { Button, Select } from 'ant-design-vue';
import { createApp, h } from 'vue';

import Space from '@baifendian/adherev-ui-space';

import FlexLayout from '../index';
// @ts-ignore
import App from './index.vue';

import '../index.less';
import './index.less';

const app = createApp({
  render() {
    return h(App);
  },
});

FlexLayout.use(app);
Space.use(app);
app.use(Button);
app.use(Select);
app.mount('#app');
