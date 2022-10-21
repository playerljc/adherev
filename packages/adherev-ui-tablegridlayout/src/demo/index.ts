import { Button, Card, DatePicker, Form, Input, Radio } from 'ant-design-vue';
import { createApp, h } from 'vue';

import Space from '@baifendian/adherev-ui-space';

import TableGridLayout from '../index';
// @ts-ignore
import App from './index.vue';

import '../index.less';
import './index.less';

const app = createApp({
  render() {
    return h(App);
  },
});

Space.use(app);
TableGridLayout.use(app);
app.use(Card);
app.use(Button);
app.use(Form);
app.use(DatePicker);
app.use(Input);
app.use(Radio);
app.mount('#app');
