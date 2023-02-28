import { createApp, h } from 'vue';

import ContourBlock from '../index';
// @ts-ignore
import App from './index.vue';

import '../index.less';

const app = createApp({
  render() {
    return h(App);
  },
});

ContourBlock.use(app);
app.mount('#app');
