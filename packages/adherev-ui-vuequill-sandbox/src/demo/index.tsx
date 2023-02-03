import { createApp, h } from 'vue';

import VueQuillSandbox from '../index';
// @ts-ignore
import Quill from './quill';

import '../index.less';

const app = createApp({
  render() {
    return h(Quill);
  },
});

VueQuillSandbox.use(app);

app.mount('#app');
