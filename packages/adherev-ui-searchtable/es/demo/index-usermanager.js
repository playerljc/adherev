import{createApp,h}from"vue";import store from"./store";import SearchTable from"../index";import Index from"./UserManager/List/index";import"../index.less";import"./index.less";createApp({render:function(){return h(Index)}}).use(store).use(SearchTable).mount("#app");
//# sourceMappingURL=index-usermanager.js.map
