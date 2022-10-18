import{defineComponent,onMounted,ref,watch}from"vue";import{object}from"vue-types";import Hooks from"@baifendian/adherev-ui-hooks";import Intl from"@baifendian/adherev-util-intl";import Resource from"@baifendian/adherev-util-resource";var props={intl:object().def(function(){return{lang:"zh_CN",locales:{},prefix:"local"}})},ConfigProvider=defineComponent({name:"adv-configprovider",props:props,setup:function(n,e){function o(){return Intl.init({prefix:n.intl.prefix||"local",currentLocale:n.intl.lang,locales:n.intl.locales||{}},Intl.isInit()).then(function(){Resource.Dict.value.LocalsMoment.value[n.intl.lang](),r.value?i():r.value=!0})}var t=e.slots,r=ref(!1),i=Hooks.useForceUpdate;return watch([function(){return n.intl.lang},function(){return n.intl.locales},function(){return n.intl.prefix}],o),onMounted(o),function(){var n;return r.value?null==(n=null==t?void 0:t.default)?void 0:n.call(t):null}}});export default ConfigProvider;
//# sourceMappingURL=configprovider.js.map
