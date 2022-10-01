import{Skeleton,Spin}from"ant-design-vue";import BfdUtil from"@baifendian/adherev-util";import Suspense from"./suspense";var withVue=BfdUtil._util.withVue;Suspense.isUse=function(){return!0},Suspense.use=function(e){e.use(Spin),e.use(Skeleton),withVue(e,"Suspense",Suspense)};export default Suspense;
//# sourceMappingURL=index.js.map
