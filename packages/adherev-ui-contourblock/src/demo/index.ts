import Vue from 'vue';

import ContourBlock from '../index';
import App from './index.vue';

import '../index.less';

Vue.use(ContourBlock);

new Vue({
  el: '#app',
  render(h) {
    return h(App);
  },
});
