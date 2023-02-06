"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.backTopAnimationProps=void 0,require("tslib")),vue_1=require("vue"),vue_types_1=require("vue-types"),adherev_util_resource_1=tslib_1.__importDefault(require("@baifendian/adherev-util-resource")),selectorPrefix="adherev-ui-backtopanimation";exports.backTopAnimationProps={className:(0,vue_types_1.string)().def(""),zIndex:(0,vue_types_1.oneOfType)([(0,vue_types_1.string)(),(0,vue_types_1.number)()]).def(adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value),duration:(0,vue_types_1.integer)().def(300)},exports.default=(0,vue_1.defineComponent)({name:"adv-backtopanimation",props:exports.backTopAnimationProps,emits:["trigger","scrollTop","target"],setup:function(e,t){function r(){a||i("trigger",function(){var r,o,n;l&&u&&(a=!0,l.style.display="block",r=u.scrollTop,o=0,n=u.scrollHeight/(e.duration/(screen.updateInterval||16.7)+(e.duration%(screen.updateInterval||16.7)!=0?1:0)),window.requestAnimationFrame(function e(){function t(){l&&u&&(l.style.display="none",a=!1)}l&&u&&(u&&u.scrollTop<o?o<r+n?r=o:r+=n:r-n<o?r=o:r-=n,u&&(u.scrollTop=r),i("scrollTop",r),u.scrollTop<o?o<=r?t():window.requestAnimationFrame(e):r<=o?t():window.requestAnimationFrame(e))}))})}var i=t.emit,o=(0,vue_1.ref)(),u=null,l=null,a=!1,n=((0,vue_1.onMounted)(function(){s(),n()}),(0,vue_1.onBeforeUnmount)(function(){var e;if(l)try{null!=(e=null==l?void 0:l.parentElement)&&e.removeChild(l)}catch(e){}}),function(){i("target",function(e){u=e,l&&u&&u.addEventListener("scroll",function(){l&&u&&o.value&&(0!==u.scrollTop?o.value&&(o.value.style.display="block"):o.value&&(o.value.style.display="none"))},!1)})}),s=function(){(l=document.body.querySelector(".".concat(selectorPrefix,"-mask")))||((l=document.createElement("div")).className="".concat(selectorPrefix,"-mask"),document.body.appendChild(l))};return function(){return(0,_vue.createVNode)("div",{ref:o,class:selectorPrefix,onClick:function(){r()}},null)}}});
//# sourceMappingURL=backtopanimation.js.map
