import _ConfigProvider from"ant-design-vue/es/config-provider";import{createVNode as _createVNode}from"vue";import{createApp,h}from"vue";import store from"./store";import AntdvFormItem from"@baifendian/adherev-ui-antdvformitem";import AdherevConfigProvider from"@baifendian/adherev-ui-configprovider";import Util from"@baifendian/adherev-util";import Dict from"@baifendian/adherev-util-dict";import Resource from"@baifendian/adherev-util-resource";import SearchTable from"../index";import ProRowDragSortEditableTable from"./ProRowDragSortEditableTable";import TestDist from"./dict.test.config";import"ant-design-vue/dist/antd.less";import"../index.less";import"./index.less";Dict.init([TestDist],{isFunMemo:!1});var SearchTableImplementFactory=SearchTable.SearchTableImplementFactory,lang=Util.getLang(),app=createApp({data:function(){return{hasIntlInit:!1}},render:function(){var e=this,r=this;return _createVNode(_ConfigProvider,{locale:Resource.Dict.value.LocalsAntd.value[lang]},{default:function(){return[_createVNode(AdherevConfigProvider,{intl:{lang:lang,locales:{en_US:{},zh_CN:{},pt_PT:{}}},onIntlInit:function(){r.hasIntlInit=!0}},{default:function(){return[e.hasIntlInit?h(SearchTableImplementFactory(ProRowDragSortEditableTable)):null]}})]}})}});AntdvFormItem.FormItemGeneratorToDict.init(app),app.use(store).use(AdherevConfigProvider).use(Dict).use(AntdvFormItem).use(SearchTable).mount("#app");
//# sourceMappingURL=index-rowdragsorteditabletable.js.map
