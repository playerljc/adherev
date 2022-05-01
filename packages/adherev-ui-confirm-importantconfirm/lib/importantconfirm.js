"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.number.constructor.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.open=void 0;var tslib_1=require("tslib"),adherev_util_resource_1=tslib_1.__importDefault(require("@baifendian/adherev-util-resource")),adherev_ui_messagedialog_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-messagedialog")),adherev_util_intl_1=tslib_1.__importDefault(require("@baifendian/adherev-util-intl")),selectorPrefix="adherev-ui-importantconfirm",_icon="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjEwNDIzMTA1Mjk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyLjMgOTI4LjRDMjgzIDkyOC40IDk3LjIgNzQyLjUgOTcuMiA1MTMuM1MyODMgOTguMiA1MTIuMyA5OC4yIDkyNy40IDI4NCA5MjcuNCA1MTMuMyA3NDEuNSA5MjguNCA1MTIuMyA5MjguNHogbTAtNjc0LjVjLTI4LjQgMC01MS4xIDIzLjUtNTAuMiA1MS45bDguMiAyNDguNWMwLjggMjIuNiAxOS4zIDQwLjYgNDEuOSA0MC42IDIyLjYgMCA0MS4yLTE3LjkgNDEuOS00MC42bDguMi0yNDguNWMxLjEtMjguNC0yMS42LTUxLjktNTAtNTEuOXogbTAgNDE1LjFjLTEzLjctMC4yLTI2LjkgNS4yLTM2LjYgMTQuOS0xMCA5LjQtMTUuNSAyMi41LTE1LjMgMzYuMiAwIDE0LjUgNS4xIDI2LjYgMTUuMyAzNi40IDkuNyA5LjYgMjIuOSAxNC45IDM2LjYgMTQuNyAxMy43IDAuMiAyNi44LTUuMSAzNi42LTE0LjcgMTAtOS40IDE1LjYtMjIuNyAxNS4zLTM2LjQgMC4yLTEzLjctNS4zLTI2LjgtMTUuMy0zNi4yLTkuNy05LjgtMjIuOS0xNS4xLTM2LjYtMTQuOXoiIHAtaWQ9IjIxMjQiIGZpbGw9IiNkODFlMDYiPjwvcGF0aD48L3N2Zz4=";function open(e){var i=e.success,t=tslib_1.__rest(e,["success"]);adherev_ui_messagedialog_1.default.Confirm(tslib_1.__assign(tslib_1.__assign({},t),{title:t.title||adherev_util_intl_1.default.tv("提示"),text:t.text||adherev_util_intl_1.default.tv("真的要执行此操作码")+"?",zIndex:"zIndex"in t?t.zIndex:adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,icon:function(e){return e("img",{attrs:{src:t.icon||_icon,alt:"",width:32}})},onSuccess:function(){return new Promise(function(e,t){i?i().then(function(){e()}).catch(function(){t()}):e()})}}))}exports.open=open,exports.default={name:"adv-importantconfirm",props:{zIndex:{type:Number,required:!1,default:adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value},success:{type:Function,required:!1,default:function(){}},title:{type:String,required:!1,default:adherev_util_intl_1.default.tv("提示")},text:{type:String,required:!1,default:adherev_util_intl_1.default.v("真的要执行此操作码")+"?"},icon:{type:String,required:!1,default:_icon}},methods:{onClick:function(e){e.stopPropagation();e=this;open({success:e.success,title:e.title,text:e.text,zIndex:e.zIndex,icon:e.icon})}},render:function(e){var t=this.$slots;return e("div",{class:selectorPrefix,on:{click:this.onClick}},[t.default])}};
//# sourceMappingURL=importantconfirm.js.map
