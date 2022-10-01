import{Skeleton,Spin}from"ant-design-vue";import Vue from"vue";var selectorPrefix="adherev-ui-suspense";export default Vue.extend({props:{reset:{type:Boolean,default:!1}},data:function(){return{isFirst:!0,isFirstLoading:!1}},watch:{reset:function(i){i&&(this.isFirst=!0,this.isFirstLoading=!1,this.$forceUpdate())}},mounted:function(){this.fetchData()},methods:{renderNormalFirstLoading:function(i){for(var r=[],t=0;t<7;t++)r.push(i(Skeleton,{key:t+1,attrs:{loading:!0,active:!0,avatar:!0}}));return i("div",{class:selectorPrefix+"-loading"},[r])},renderFirstLoading:function(i){var r=this.$slots;return r.firstLoading||this.renderNormalFirstLoading(i)},renderNormal:function(i){return i(Spin,{attrs:{size:"large",spinning:this.showLoading()}},[this.renderInner(i)])},renderDispatch:function(i){var r=this.showLoading();return this.isFirst&&!this.isFirstLoading&&r&&(this.isFirstLoading=!0),this.isFirst&&this.isFirstLoading&&!r&&(this.isFirst=!1,this.isFirstLoading=!1),this.isFirst?this.renderFirstLoading(i):this.renderNormal(i)},renderSuspense:function(i){return i("div",{class:selectorPrefix},[this.renderDispatch(i)])}},render:function(i){return this.renderSuspense(i)}});
//# sourceMappingURL=suspense.js.map
