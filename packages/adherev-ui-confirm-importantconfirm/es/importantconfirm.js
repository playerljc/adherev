import{createVNode as _createVNode}from"vue";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import{__assign,__rest}from"tslib";import{defineComponent}from"vue";import{func,number,string}from"vue-types";import MessageDialog from"@baifendian/adherev-ui-messagedialog";import intl from"@baifendian/adherev-util-intl";import Resource from"@baifendian/adherev-util-resource";var selectorPrefix="adherev-ui-importantconfirm",_icon="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjEwNDIzMTA1Mjk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyLjMgOTI4LjRDMjgzIDkyOC40IDk3LjIgNzQyLjUgOTcuMiA1MTMuM1MyODMgOTguMiA1MTIuMyA5OC4yIDkyNy40IDI4NCA5MjcuNCA1MTMuMyA3NDEuNSA5MjguNCA1MTIuMyA5MjguNHogbTAtNjc0LjVjLTI4LjQgMC01MS4xIDIzLjUtNTAuMiA1MS45bDguMiAyNDguNWMwLjggMjIuNiAxOS4zIDQwLjYgNDEuOSA0MC42IDIyLjYgMCA0MS4yLTE3LjkgNDEuOS00MC42bDguMi0yNDguNWMxLjEtMjguNC0yMS42LTUxLjktNTAtNTEuOXogbTAgNDE1LjFjLTEzLjctMC4yLTI2LjkgNS4yLTM2LjYgMTQuOS0xMCA5LjQtMTUuNSAyMi41LTE1LjMgMzYuMiAwIDE0LjUgNS4xIDI2LjYgMTUuMyAzNi40IDkuNyA5LjYgMjIuOSAxNC45IDM2LjYgMTQuNyAxMy43IDAuMiAyNi44LTUuMSAzNi42LTE0LjcgMTAtOS40IDE1LjYtMjIuNyAxNS4zLTM2LjQgMC4yLTEzLjctNS4zLTI2LjgtMTUuMy0zNi4yLTkuNy05LjgtMjIuOS0xNS4xLTM2LjYtMTQuOXoiIHAtaWQ9IjIxMjQiIGZpbGw9IiNkODFlMDYiPjwvcGF0aD48L3N2Zz4=";function open(e){var t=e.success,i=__rest(e,["success"]);MessageDialog.Confirm(__assign(__assign({},i),{title:i.title||intl.tv("提示"),text:i.text||"".concat(intl.tv("真的要执行此操作码"),"?"),zIndex:"zIndex"in i?i.zIndex:Resource.Dict.value.ResourceNormalMaxZIndex.value,icon:function(){return _createVNode("img",{src:i.icon||_icon,alt:"",width:32},null)},onSuccess:function(){return new Promise(function(e,i){t?t().then(function(){e()}).catch(function(){i()}):e()})}}))}var props={zIndex:number().def(Resource.Dict.value.ResourceNormalMaxZIndex.value),success:func(),title:string().def(intl.tv("提示")),text:string().def(intl.tv("确定删除吗")),icon:string().def(_icon)};export default defineComponent({name:"adv-importantconfirm",props:props,setup:function(e,i){function t(){return open({success:e.success,title:e.title,text:e.text,zIndex:e.zIndex,icon:e.icon})}var n=i.slots;return function(){return _createVNode("div",{class:selectorPrefix,onClick:t},[n.default?n.default():null])}}});export{open};
//# sourceMappingURL=importantconfirm.js.map
