module.exports=function(n){var u={};function i(e){if(u[e])return u[e].exports;var t=u[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=u,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)i.d(n,u,function(e){return t[e]}.bind(null,u));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=3)}([function(e,t){e.exports=require("@baifendian/adherev-util-resource")},function(e,t){e.exports=require("@baifendian/adherev-util-intl")},function(e,t){e.exports=require("@baifendian/adherev-ui-messagedialog")},function(e,t,n){"use strict";n.r(t);var u=n(0),i=n.n(u),u=n(2),r=n.n(u),u=n(1),o=n.n(u);function a(n,e){r.a.Confirm({title:o.a.tv("提示"),text:o.a.tv("真的要执行此操作码")+"?",zIndex:e,icon:function(e){return e("img",{attrs:{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjEwNDIzMTA1Mjk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyLjMgOTI4LjRDMjgzIDkyOC40IDk3LjIgNzQyLjUgOTcuMiA1MTMuM1MyODMgOTguMiA1MTIuMyA5OC4yIDkyNy40IDI4NCA5MjcuNCA1MTMuMyA3NDEuNSA5MjguNCA1MTIuMyA5MjguNHogbTAtNjc0LjVjLTI4LjQgMC01MS4xIDIzLjUtNTAuMiA1MS45bDguMiAyNDguNWMwLjggMjIuNiAxOS4zIDQwLjYgNDEuOSA0MC42IDIyLjYgMCA0MS4yLTE3LjkgNDEuOS00MC42bDguMi0yNDguNWMxLjEtMjguNC0yMS42LTUxLjktNTAtNTEuOXogbTAgNDE1LjFjLTEzLjctMC4yLTI2LjkgNS4yLTM2LjYgMTQuOS0xMCA5LjQtMTUuNSAyMi41LTE1LjMgMzYuMiAwIDE0LjUgNS4xIDI2LjYgMTUuMyAzNi40IDkuNyA5LjYgMjIuOSAxNC45IDM2LjYgMTQuNyAxMy43IDAuMiAyNi44LTUuMSAzNi42LTE0LjcgMTAtOS40IDE1LjYtMjIuNyAxNS4zLTM2LjQgMC4yLTEzLjctNS4zLTI2LjgtMTUuMy0zNi4yLTkuNy05LjgtMjIuOS0xNS4xLTM2LjYtMTQuOXoiIHAtaWQ9IjIxMjQiIGZpbGw9IiNkODFlMDYiPjwvcGF0aD48L3N2Zz4=",alt:"",width:32}})},onSuccess:function(){return new Promise(function(e,t){n?n().then(function(){e()}).catch(function(){t()}):e()})}})}var c,M,u={name:"adv-importantconfirm",props:{zIndex:{type:Number,require:!1,default:i.a.Dict.value.ResourceNormalMaxZIndex.value},className:{type:String,require:!1,default:""},success:{type:Function,require:!1,default:function(){}}},methods:{onClick:function(e){e.stopPropagation();var t=this.success,e=this.zIndex;a(t,(void 0===e?i.a.Dict.value.ResourceNormalMaxZIndex.value:e)||i.a.Dict.value.ResourceNormalMaxZIndex.value)}},render:function(e){var t=this.$slots;return e("div",{class:"adherev-ui-importantconfirm "+this.className,on:{click:this.onClick}},[t.default])}},l=((M=c=u).install=function(e){e.component(M.displayName||M.name,c)},c);l.open=a,l.isUse=function(){return!0},l.use=function(e){return e.use(l)},t.default=l}]).default;
//# sourceMappingURL=index.js.map
