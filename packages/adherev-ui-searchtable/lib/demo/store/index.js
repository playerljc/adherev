import Vue from 'vue';
import Vuex from 'vuex';
import VuexGeneratorPlugin from './plugin/VuexGeneratorPlugin';
Vue.use(Vuex);
/**
 * createStore
 * @description 创建store
 */
export const createStore = () => {
    return new Vuex.Store({
        // 使用VuexGeneratorPlugin插件
        plugins: [VuexGeneratorPlugin],
    });
};
//# sourceMappingURL=index.js.map