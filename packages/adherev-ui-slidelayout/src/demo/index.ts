import { Button } from 'ant-design-vue';
import { createApp, h } from 'vue';

import SlideLayout from '../index';
// @ts-ignore
import App from './index.vue';

import '../index.less';
import './index.less';

const app = createApp({
  render() {
    return h(App);
  },
});

SlideLayout.use(app);

app.use(Button);
app.mount('#app');
