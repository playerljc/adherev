import Vue from"vue";import Dict from"@baifendian/adherev-util-dict";import FlexLayout from"@baifendian/adherev-ui-flexlayout";import AntdFormItem from"../index";import Index from"./antdformitem";import TestDist from"./dict.test.config";import"../index.less";AntdFormItem.use(Vue),Dict.use(Vue),FlexLayout.use(Vue),Dict.init([TestDist],{isFunMemo:!1}),new Vue({el:"#app",render:function(e){return e(Index)}});
//# sourceMappingURL=index.js.map
