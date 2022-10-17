import{createVNode as _createVNode}from"vue";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import{__assign,__rest}from"tslib";import{defineComponent}from"vue";import{func,number,string}from"vue-types";import MessageDialog from"@baifendian/adherev-ui-messagedialog";import intl from"@baifendian/adherev-util-intl";import Resource from"@baifendian/adherev-util-resource";var selectorPrefix="adherev-ui-delconfirm";function open(e){var n=e.success,e=__rest(e,["success"]);MessageDialog.Confirm(__assign(__assign({},e),{title:e.title||intl.tv("提示"),text:e.text||"".concat(intl.tv("确定删除吗"),"?"),zIndex:"zIndex"in e?e.zIndex:Resource.Dict.value.ResourceNormalMaxZIndex.value,onSuccess:function(){return new Promise(function(e,t){n?n().then(function(){e()}).catch(function(){t()}):e()})}}))}var props={zIndex:number().def(Resource.Dict.value.ResourceNormalMaxZIndex.value),success:func(),title:string().def(intl.tv("提示")),text:string().def(intl.tv("确定删除吗"))};export default defineComponent({name:"adv-delconfirm",props:props,setup:function(e,t){function n(){return open({success:e.success,title:e.title,text:e.text,zIndex:e.zIndex})}var r=t.slots;return function(){return _createVNode("div",{class:selectorPrefix,onClick:n},[r.default?r.default():null])}}});export{open};
//# sourceMappingURL=delconfirm.js.map
