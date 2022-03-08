import{onBeforeUnmount,onMounted,ref,watch}from"vue";import{bool,number,oneOfType,string}from"vue-types";import{createMask}from"./slidelayout";!function(e){e.top="top",e.bottom="bottom",e.left="left",e.right="right"}(direction=direction||{});var direction,slideProps={width:oneOfType([string(),number()]).def("80%"),height:oneOfType([string(),number()]).def("40%"),mask:bool().def(!0),zIndex:number().def(9999),time:number().def(300),direction:string().def(direction.left),defaultCollapse:bool().def(!1)};export default function useSlide(o,e){var t=e.emit,n=ref(o.defaultCollapse),i=ref(),r={},l=null;return watch(function(){return o.defaultCollapse},function(e,t){e!==t&&(n.value=e,(n.value?r.show:r.close)[o.direction]())}),onMounted(function(){var e;o.mask&&(l=createMask(o.zIndex,function(){t("before-close"),n.value=!1,r.close[o.direction]()}),null!==(e=null===(e=i.value)||void 0===e?void 0:e.parentElement)&&void 0!==e&&e.insertBefore(l,i.value)),e=i.value,"left"===o.direction||"right"===o.direction?(e.style.height="100%",o.width?e.style.width=o.width:e.style.width="".concat(.9*e.parentElement.offsetWidth,"px")):(e.style.width="100%",o.height?e.style.height=o.height:e.style.height="".concat(.3*e.parentElement.offsetHeight,"px")),r.init[o.direction](),n.value&&r.show[o.direction](0)}),onBeforeUnmount(function(){var e;l&&null!==(e=null===l||void 0===l?void 0:l.parentElement)&&void 0!==e&&e.removeChild(l)}),{setPositionConfig:function(e){r=e({el:i,maskEl:l})},getDuration:function(e){return null!=e?e:o.time},getElRef:function(){return i}}}export{direction,slideProps};
//# sourceMappingURL=slide.js.map
