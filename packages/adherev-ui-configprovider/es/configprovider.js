import debounce from"lodash.debounce";import Intl from"@baifendian/adherev-util-intl";import Resource from"@baifendian/adherev-util-resource";var ConfigProvider={name:"adv-configprovider",props:{intl:{type:Object,default:function(){return{}}}},emits:["intlInit","propsChange"],data:function(){return{isIntlInit:!1,$propsChangeHandler:null}},provide:function(){return{}},watch:{"intl.lang":function(){this.$init()},"intl.locales":function(){this.$init()},"intl.prefix":function(){this.$init()}},created:function(){var n=this;this.$data.$propsChangeHandler=debounce(function(){n.$emit("propsChange")},200)},methods:{$init:function(){var n=this;Intl.init({prefix:this.intl.prefix||"local",currentLocale:this.intl.lang,locales:this.intl.locales||{}},Intl.isInit()).then(function(){Resource.Dict.value.LocalsMoment.value[n.intl.lang](),n.isIntlInit?(n.$forceUpdate(),n.$nextTick(n.$data.$propsChangeHandler)):(n.isIntlInit=!0,n.$nextTick(function(){this.$emit("intlInit")}))})}},mounted:function(){this.$init()},render:function(n){var t;return this.isIntlInit?null===(t=null==this?void 0:this.$slots)||void 0===t?void 0:t.default:null}};export default ConfigProvider;
//# sourceMappingURL=configprovider.js.map
