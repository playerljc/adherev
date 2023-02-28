import { createStore } from 'vuex';

import VuexGeneratorPlugin from './plugin/VuexGeneratorPlugin';

export default createStore({
  // 使用VuexGeneratorPlugin插件
  plugins: [VuexGeneratorPlugin],
});
