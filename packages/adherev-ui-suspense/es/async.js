import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import{Empty}from"ant-design-vue";import Suspense from"./suspense";var SuspenseAsync={name:"adv-suspense-async",mixins:[Suspense],props:{isEmpty:{type:Function,default:function(){return!0}},renderEmpty:{type:Function,default:function(){return null}},fetchAsyncData:{type:Function,default:function(){return null}}},slots:["empty"],data:function(){return{loading:!1}},methods:{showLoading:function(){return this.loading},renderInner:function(n){return this.isEmpty()?this.$slots.empty||this.renderEmpty||n(Empty):this.$slots.default},resetAsync:function(){var t=this;return new Promise(function(n){t.isFirst=!0,t.isFirstLoading=!1,t.fetchData().then(function(){return n()}).catch(function(){return n()})})},fetchData:function(){var e=this;return new Promise(function(n){var t;return console.log("async",e.fetchAsyncData),e.fetchAsyncData?(e.loading=!0,null===(t=null===(t=null===(t=null==e?void 0:e.fetchAsyncData)||void 0===t?void 0:t.call(e))||void 0===t?void 0:t.then(function(){e.loading=!1,e.$nextTick(function(){n()})}))||void 0===t?void 0:t.catch(function(){e.loading=!1,e.$nextTick(function(){n()})})):(e.loading=!1,void n())})}}};export default SuspenseAsync;
//# sourceMappingURL=async.js.map
