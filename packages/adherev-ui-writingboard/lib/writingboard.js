"use strict";var _vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.map.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/esnext.map.delete-all.js"),require("core-js/modules/esnext.map.every.js"),require("core-js/modules/esnext.map.filter.js"),require("core-js/modules/esnext.map.find.js"),require("core-js/modules/esnext.map.find-key.js"),require("core-js/modules/esnext.map.includes.js"),require("core-js/modules/esnext.map.key-of.js"),require("core-js/modules/esnext.map.map-keys.js"),require("core-js/modules/esnext.map.map-values.js"),require("core-js/modules/esnext.map.merge.js"),require("core-js/modules/esnext.map.reduce.js"),require("core-js/modules/esnext.map.some.js"),require("core-js/modules/esnext.map.update.js"),require("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),debounce_1=tslib_1.__importDefault(require("lodash/debounce")),vue_1=require("vue"),vue_types_1=require("vue-types"),resize_observer_1=require("@juggle/resize-observer"),types_1=require("./types"),selectorPrefix="adherev-ui-writingboard",props={defaultMode:(0,vue_types_1.string)().def(types_1.Mode.FREE),defaultStrokeStyle:(0,vue_types_1.string)().def("#000"),defaultLineWidth:(0,vue_types_1.number)().def(2),resizeTime:(0,vue_types_1.number)().def(300)};exports.default=(0,vue_1.defineComponent)({name:"adv-writingboard",props:props,setup:function(t,e){var e=e.expose,n=(0,vue_1.ref)(),l=(0,vue_1.ref)(),o=null,i=null,u=null,r=null,s=t.defaultMode,a=t.defaultLineWidth,d=t.defaultStrokeStyle,v=[],c=new Map([[types_1.Mode.FREE,{draw:function(e){var t=e.sourcePoint,e=e.targetPoint;null!=o&&o.beginPath(),null!=o&&o.moveTo(t.x,t.y),null!=o&&o.lineTo(e.x,e.y),v.push({shape:s,sourcePoint:t,targetPoint:e}),h({lineWidth:a,strokeStyle:d}),null!=o&&o.stroke()},drawStack:function(e){null!=o&&o.beginPath(),null!=o&&o.moveTo(e.sourcePoint.x,e.sourcePoint.y),null!=o&&o.lineTo(e.targetPoint.x,e.targetPoint.y),h({lineWidth:e.lineWidth,strokeStyle:e.strokeStyle}),null!=o&&o.stroke()},mouseup:function(e){P({sourcePoint:r,targetPoint:e})}}],[types_1.Mode.LINE,{draw:function(e){var t,e=e.targetPoint;null!=o&&o.clearRect(0,0,null==(t=l.value)?void 0:t.width,null==(t=l.value)?void 0:t.height),g(),null!=o&&o.beginPath(),null!=o&&o.moveTo(u.x,u.y),null!=o&&o.lineTo(e.x,e.y),h({lineWidth:a,strokeStyle:d}),null!=o&&o.stroke()},drawStack:function(e){null!=o&&o.beginPath(),null!=o&&o.moveTo(e.sourcePoint.x,e.sourcePoint.y),null!=o&&o.lineTo(e.targetPoint.x,e.targetPoint.y),h({lineWidth:e.lineWidth,strokeStyle:e.strokeStyle}),null!=o&&o.stroke()},mouseup:function(e){v.push({shape:s,lineWidth:null==o?void 0:o.lineWidth,strokeStyle:null==o?void 0:o.strokeStyle,sourcePoint:u,targetPoint:e})}}],[types_1.Mode.RECTANGLE,{draw:function(e){var e=e.targetPoint,t=(null!=o&&o.clearRect(0,0,null==(t=l.value)?void 0:t.width,null==(t=l.value)?void 0:t.height),g(),null!=o&&o.beginPath(),m({startPoint:u,targetPoint:e}));null!=o&&o.rect(t.x,t.y,Math.abs(e.x-u.x),Math.abs(e.y-u.y)),h({lineWidth:a,strokeStyle:d}),null!=o&&o.stroke()},drawStack:function(e){null!=o&&o.beginPath(),null!=o&&o.rect(e.x,e.y,e.width,e.height),h({lineWidth:e.lineWidth,strokeStyle:e.strokeStyle}),null!=o&&o.stroke()},mouseup:function(e){var t=m({startPoint:u,targetPoint:e});v.push({shape:s,lineWidth:null==o?void 0:o.lineWidth,strokeStyle:null==o?void 0:o.strokeStyle,x:t.x,y:t.y,width:Math.abs(e.x-(null==u?void 0:u.x)),height:Math.abs(e.y-(null==u?void 0:u.y))})}}],[types_1.Mode.CIRCLE,{draw:function(e){var e=e.targetPoint,t=(null!=o&&o.clearRect(0,0,null==(t=l.value)?void 0:t.width,null==(t=l.value)?void 0:t.height),g(),null!=o&&o.beginPath(),m({startPoint:u,targetPoint:e})),e=f({p2:e,p1:u});null!=o&&o.ellipse(t.x,t.y,e,e,45*Math.PI/180,0,2*Math.PI),h({lineWidth:a,strokeStyle:d}),null!=o&&o.stroke()},drawStack:function(e){null!=o&&o.beginPath(),null!=o&&o.ellipse(e.x,e.y,e.radiusX,e.radiusY,e.rotation,e.startAngle,e.endAngle),h({lineWidth:e.lineWidth,strokeStyle:e.strokeStyle}),null!=o&&o.stroke()},mouseup:function(e){var t=m({startPoint:u,targetPoint:e}),e=f({p2:e,p1:u});v.push({shape:s,lineWidth:null==o?void 0:o.lineWidth,strokeStyle:null==o?void 0:o.strokeStyle,x:t.x,y:t.y,radiusX:e,radiusY:e,rotation:45*Math.PI/180,startAngle:0,endAngle:2*Math.PI})}}],[types_1.Mode.TRIANGLE,{draw:function(e){var e=e.targetPoint,t=(null!=o&&o.clearRect(0,0,null==(t=l.value)?void 0:t.width,null==(t=l.value)?void 0:t.height),g(),null!=o&&o.beginPath(),y({startPoint:u,targetPoint:e}));null!=o&&o.moveTo(t[0].x,t[0].y),null!=o&&o.lineTo(t[1].x,t[1].y),null!=o&&o.lineTo(t[2].x,t[2].y),null!=o&&o.closePath(),h({lineWidth:a,strokeStyle:d}),null!=o&&o.stroke()},drawStack:function(e){null!=o&&o.beginPath(),null!=o&&o.moveTo(e.points[0].x,e.points[0].y),null!=o&&o.lineTo(e.points[1].x,e.points[1].y),null!=o&&o.lineTo(e.points[2].x,e.points[2].y),null!=o&&o.closePath(),h({lineWidth:e.lineWidth,strokeStyle:e.strokeStyle}),null!=o&&o.stroke()},mouseup:function(e){e=y({startPoint:u,targetPoint:e});v.push({shape:s,lineWidth:null==o?void 0:o.lineWidth,strokeStyle:null==o?void 0:o.strokeStyle,points:e})}}],[types_1.Mode.RUBBER,{draw:function(e){var t=e.sourcePoint,e=e.targetPoint;null!=o&&o.beginPath(),null!=o&&o.moveTo(t.x,t.y),null!=o&&o.lineTo(e.x,e.y),v.push({shape:s,sourcePoint:t,targetPoint:e}),o.lineWidth=15,o.strokeStyle="#fff",o.lineCap="round",o.lineJoin="round",null!=o&&o.stroke()},drawStack:function(e){null!=o&&o.beginPath(),null!=o&&o.moveTo(e.sourcePoint.x,e.sourcePoint.y),null!=o&&o.lineTo(e.targetPoint.x,e.targetPoint.y),o.lineWidth=15,o.strokeStyle="#fff",o.lineCap="round",o.lineJoin="round",null!=o&&o.stroke()},mouseup:function(e){P({sourcePoint:r,targetPoint:e})}}]]);function h(e){var t=e.lineWidth,e=e.strokeStyle;o.lineWidth=t,o.strokeStyle=e,o.lineCap="round",o.lineJoin="round"}function y(e){var t=e.startPoint,e=e.targetPoint,n=m({startPoint:t,targetPoint:e}),l=Math.abs(e.x-t.x),e=Math.abs(e.y-t.y);return[{x:n.x,y:n.y+e},{x:n.x+l/2,y:n.y},{x:n.x+l,y:n.y+e}]}function p(e){var t=e.clientX,e=e.clientY,n=null==(n=null==l?void 0:l.value)?void 0:n.getBoundingClientRect();return{x:t-n.x,y:e-n.y}}function f(e){var t=e.p1,e=e.p2,n=t.x,t=t.y,l=e.x,e=e.y;return Math.sqrt(Math.pow(l-n,2)+Math.pow(e-t,2))}function g(){for(var e=0;e<v.length;e++){var t=v[e];c.get(t.shape).drawStack(t)}}function m(e){var t=e.startPoint,e=e.targetPoint;return e.x<=t.x&&e.y<=t.y?e:e.x<=t.x&&e.y>=t.y?{x:e.x,y:t.y}:e.x>=t.x&&e.y<=t.y?{x:t.x,y:e.y}:e.x>=t.x&&e.y>=t.y?t:void 0}function P(e){var t=e.sourcePoint,e=e.targetPoint;(null==c?void 0:c.get(s)).draw({sourcePoint:t,targetPoint:e})}function x(e){W(e)}function _(e){W(tslib_1.__assign(tslib_1.__assign({},e),{clientX:e.targetTouches[0].clientX,clientY:e.targetTouches[0].clientY}))}function k(e){T(e)}function b(e){T(tslib_1.__assign(tslib_1.__assign({},e),{clientX:e.changedTouches[0].clientX,clientY:e.changedTouches[0].clientY}))}function j(e){w(e)}function S(e){w(tslib_1.__assign(tslib_1.__assign({},e),{clientX:e.targetTouches[0].clientX,clientY:e.targetTouches[0].clientY}))}function w(e){var t=e.clientX,e=e.clientY;u=r=p({clientX:t,clientY:e}),null!=(t=null==n?void 0:n.value)&&t.addEventListener("mousemove",x),null!=(e=null==n?void 0:n.value)&&e.addEventListener("mouseup",k),null!=(t=null==n?void 0:n.value)&&t.addEventListener("touchmove",_),null!=(e=null==n?void 0:n.value)&&e.addEventListener("touchend",b)}function W(e){e=p({clientX:e.clientX,clientY:e.clientY});P({sourcePoint:r,targetPoint:e}),r=e}function T(e){var t,e=p({clientX:e.clientX,clientY:e.clientY});null!=(t=c.get(s))&&t.mouseup(e),(r=u=null)!=(t=null==n?void 0:n.value)&&t.removeEventListener("mousemove",x),null!=(e=null==n?void 0:n.value)&&e.removeEventListener("mouseup",k),null!=(t=null==n?void 0:n.value)&&t.removeEventListener("touchmove",_),null!=(e=null==n?void 0:n.value)&&e.removeEventListener("touchend",b)}return e({setMode:function(e){s=e},setStrokeStyle:function(e){d=e},setLineWidth:function(e){a=e},clear:function(){var e;null!=o&&o.clearRect(0,0,null==(e=null==l?void 0:l.value)?void 0:e.width,null==(e=null==l?void 0:l.value)?void 0:e.height),r=u=null,v=[]},toDataURL:function(){var e;return null==(e=null==l?void 0:l.value)?void 0:e.toDataURL("image/png",1)}}),(0,vue_1.onMounted)(function(){o=null==(e=null==l?void 0:l.value)?void 0:e.getContext("2d");var e=(0,debounce_1.default)(function(){var e;l.value.width=null==(e=null==n?void 0:n.value)?void 0:e.offsetWidth,l.value.height=null==(e=null==n?void 0:n.value)?void 0:e.offsetHeight,null!=o&&o.clearRect(0,0,null==(e=null==l?void 0:l.value)?void 0:e.width,null==(e=null==l?void 0:l.value)?void 0:e.height),g()},t.resizeTime);null!=(e=null==(i=new resize_observer_1.ResizeObserver(e))?void 0:i.observe)&&e.call(i,document.body)}),(0,vue_1.onMounted)(function(){var e;null!=(e=null==n?void 0:n.value)&&e.addEventListener("mousedown",j),null!=(e=null==n?void 0:n.value)&&e.addEventListener("touchstart",S)}),(0,vue_1.onBeforeUnmount)(function(){var e;null!=(e=null==i?void 0:i.current)&&e.disconnect()}),(0,vue_1.onBeforeUnmount)(function(){var e;null!=(e=null==n?void 0:n.value)&&e.removeEventListener("mousedown",j),null!=(e=null==n?void 0:n.value)&&e.removeEventListener("touchstart",S)}),function(){return(0,_vue.createVNode)("div",{ref:n,class:selectorPrefix},[(0,_vue.createVNode)("canvas",{ref:l},null)])}}});
//# sourceMappingURL=writingboard.js.map
