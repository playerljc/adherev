import{ConfigProvider}from"ant-design-vue";import Vue from"vue";import{createStore}from"./store";import AntdvFormItem from"@baifendian/adherev-ui-antdvformitem";import AdherevConfigProvider from"@baifendian/adherev-ui-configprovider";import Util from"@baifendian/adherev-util";import Dict from"@baifendian/adherev-util-dict";import Resource from"@baifendian/adherev-util-resource";import SearchTable from"../index";import ProTable from"./ProTable";import TestDist from"./dict.test.config";import"../index.less";import"./index.less";AntdvFormItem.use(Vue),Dict.use(Vue),SearchTable.use(Vue),Dict.init([TestDist],{isFunMemo:!1}),AntdvFormItem.FormItemGeneratorToDict.init(Vue);var SearchTableImplementFactory=SearchTable.SearchTableImplementFactory,lang=Util.getLang();new Vue({el:"#app",store:createStore(),data:function(){return{hasIntlInit:!1}},render:function(e){var r=this;return e(ConfigProvider,{attrs:{locale:Resource.Dict.value.LocalsAntd.value[lang]}},[e(AdherevConfigProvider,{attrs:{intl:{lang:lang,locales:{en_US:{},zh_CN:{},pt_PT:{}}}},on:{intlInit:function(){r.hasIntlInit=!0}}},[this.hasIntlInit?e(SearchTableImplementFactory(ProTable)):null])])}});
//# sourceMappingURL=index-protable.js.map
