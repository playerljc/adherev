import { Button, Card, Radio, Select, Space } from 'ant-design-vue';
import { createApp, h } from 'vue';

import FlexLayout from '@baifendian/adherev-ui-flexlayout';

import WritingBoard from '../index';
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
WritingBoard.use(app);
app.use(Button);
app.use(Card);
app.use(Radio);
app.use(Select);
app.use(Space);
app.mount('#app');
