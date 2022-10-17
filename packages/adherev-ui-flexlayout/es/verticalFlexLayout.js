import{createVNode as _createVNode,mergeProps as _mergeProps}from"vue";import{defineComponent}from"vue";import{object,string}from"vue-types";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import Auto from"./auto";import Fixed from"./fixed";import FlexLayout from"./flexlayout";var props={topClassName:string().def(""),topStyle:object().def({}),rightClassName:string().def(""),rightStyle:object().def({}),bottomClassName:string().def(""),bottomStyle:object().def({}),leftClassName:string().def(""),leftStyle:object().def({}),mainClassName:string().def(""),mainStyle:object().def({}),mainAutoWrapClassName:string().def(""),mainAutoStyle:object().def({}),mainWrapClassName:string().def(""),mainWrapStyle:object().def({}),topProps:object().def({}),rightProps:object().def({}),bottomProps:object().def({}),leftProps:object().def({}),mainProps:object().def({}),mainAutoWrapProps:object().def({})};export default defineComponent({name:"adv-flexlayout-vertical",props:props,slots:["renderLeft","renderMain","renderTop","renderBottom","renderRight"],setup:function(e,t){var o=t.slots;return function(){return _createVNode(FlexLayout,{direction:"vertical"},{default:function(){return[_createVNode(ConditionalRender,{conditional:!!o.renderTop},{default:function(){return[_createVNode(Fixed,_mergeProps({class:e.topClassName||"",style:e.topStyle,fit:!0},e.topProps||{}),{default:function(){return[o.renderTop]}})]}}),_createVNode(ConditionalRender,{conditional:!!o.renderMain},{default:function(){return[_createVNode(Auto,_mergeProps({class:e.mainAutoWrapClassName||"",style:e.mainAutoStyle,fit:!0,autoFixed:!0},e.mainAutoWrapProps||{}),{default:function(){return[_createVNode(FlexLayout,{direction:"horizontal",class:e.mainWrapClassName||"",style:e.mainWrapStyle},{default:function(){return[_createVNode(ConditionalRender,{conditional:!!o.renderLeft},{default:function(){return[_createVNode(Fixed,_mergeProps({class:e.leftClassName||"",style:e.leftStyle,fit:!0},e.leftProps||{}),{default:function(){return[o.renderLeft]}})]}}),_createVNode(Auto,_mergeProps({autoFixed:!0,fit:!0,class:e.mainClassName||"",style:e.mainStyle},e.mainProps||{}),{default:function(){return[o.renderMain]}}),_createVNode(ConditionalRender,{conditional:!!o.renderRight},{default:function(){return[_createVNode(Fixed,_mergeProps({class:e.rightClassName||"",style:e.rightStyle,fit:!0},e.rightProps||{}),{default:function(){return[o.renderRight]}})]}})]}})]}})]}}),_createVNode(ConditionalRender,{conditional:!!o.renderBottom},{default:function(){return[_createVNode(Fixed,_mergeProps({class:e.bottomClassName||"",style:e.bottomStyle,fit:!0},e.bottomProps||{}),{default:function(){return[o.renderBottom]}})]}})]}})}}});
//# sourceMappingURL=verticalFlexLayout.js.map
