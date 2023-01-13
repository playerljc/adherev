import Vue from"vue";import Vuex from"vuex";import VuexGeneratorPlugin from"./plugin/VuexGeneratorPlugin";Vue.use(Vuex);var createStore=function(){return new Vuex.Store({plugins:[VuexGeneratorPlugin]})};export{createStore};
//# sourceMappingURL=index.js.map
