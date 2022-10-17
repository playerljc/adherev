"use strict";var direction,_vue=require("vue"),tslib_1=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js"),Object.defineProperty(exports,"__esModule",{value:!0}),require("tslib")),classnames_1=tslib_1.__importDefault(require("classnames")),swiper_1=tslib_1.__importDefault(require("swiper")),vue_1=require("vue"),vue_types_1=require("vue-types"),selectorPrefix="adherev-ui-revolving",revolvingProps=(!function(e){e.top="top",e.right="right",e.bottom="bottom",e.left="left"}(direction=direction||{}),{classNameWrapper:(0,vue_types_1.string)().def(""),wrapperStyle:(0,vue_types_1.object)().def({}),speed:(0,vue_types_1.number)().def(1e3),delay:(0,vue_types_1.number)().def(1e3),direction:(0,vue_types_1.string)().def(direction.top),loop:(0,vue_types_1.bool)().def(!0),stopOnLastSlide:(0,vue_types_1.bool)().def(!1),listeners:(0,vue_types_1.object)().def({})});exports.default=(0,vue_1.defineComponent)({name:"adv-revolving",props:revolvingProps,setup:function(t,e){function r(){p&&("destory"in p&&p.destory instanceof Function&&p.destory(),p=null),p=new swiper_1.default(n.value,{allowTouchMove:!1,direction:o(t.direction),loop:t.loop,speed:t.speed,autoplay:{delay:t.delay,stopOnLastSlide:t.stopOnLastSlide,reverseDirection:"right"===t.direction||"bottom"===t.direction},on:t.listeners})}function o(e){return"left"===e||"right"===e?"horizontal":"vertical"}var s=e.expose,i=e.slots,n=(0,vue_1.ref)(),u=(0,vue_1.ref)(),l=(0,vue_1.computed)(function(){return(0,classnames_1.default)("".concat(selectorPrefix,"-wrapper"),"swiper-wrapper",(t.classNameWrapper||"").split(/\s+/))}),p=null;return(0,vue_1.onMounted)(function(){r()}),(0,vue_1.onUpdated)(function(){r()}),s({start:function(){return p.autoplay.start()},stop:function(){return p.autoplay.stop()},isRunning:function(){return p.autoplay.running}}),function(){var e;return(0,_vue.createVNode)("div",{class:(0,classnames_1.default)(selectorPrefix,"swiper-container"),ref:n},[(0,_vue.createVNode)("div",{class:l.value,style:t.wrapperStyle,ref:u},[null==(e=null==i?void 0:i.default)?void 0:e.call(i)])])}}});
//# sourceMappingURL=revolving.js.map
