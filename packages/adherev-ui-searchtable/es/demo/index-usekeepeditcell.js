import Vue from"vue";import{createStore}from"./store";import SearchTable from"../index";import ProEditableCellUseKeepEditTable from"./ProEditableCellUseKeepEditTable";import"../index.less";import"./index.less";SearchTable.use(Vue);var SearchTableImplementFactory=SearchTable.SearchTableImplementFactory;new Vue({el:"#app",store:createStore(),render:function(e){return e(SearchTableImplementFactory(ProEditableCellUseKeepEditTable))}});
//# sourceMappingURL=index-usekeepeditcell.js.map
