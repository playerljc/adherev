import{createVNode as _createVNode,mergeProps as _mergeProps}from"vue";import{defineComponent}from"vue";import{object,string}from"vue-types";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import Auto from"./auto";import Fixed from"./fixed";import FlexLayout from"./flexlayout";var verticalFlexLayoutProps={topClassName:string().def(""),topStyle:object().def({}),rightClassName:string().def(""),rightStyle:object().def({}),bottomClassName:string().def(""),bottomStyle:object().def({}),leftClassName:string().def(""),leftStyle:object().def({}),mainClassName:string().def(""),mainStyle:object().def({}),mainAutoWrapClassName:string().def(""),mainAutoStyle:object().def({}),mainWrapClassName:string().def(""),mainWrapStyle:object().def({}),topProps:object().def({}),rightProps:object().def({}),bottomProps:object().def({}),leftProps:object().def({}),mainProps:object().def({}),mainAutoWrapProps:object().def({})};export default defineComponent({name:"adv-flexlayout-vertical",props:verticalFlexLayoutProps,slots:["renderLeft","renderMain","renderTop","renderBottom","renderRight"],setup:function(n,e){var i=e.slots;return function(){var e,t,o,r,a;return _createVNode(FlexLayout,{direction:"vertical"},{default:function(){return[_createVNode(ConditionalRender,{conditional:!!i.renderTop},{default:function(){return[_createVNode(Fixed,_mergeProps({class:n.topClassName||"",style:n.topStyle,fit:!0},n.topProps||{}),{default:function(){return[null==(e=i.renderTop)?void 0:e.call(i)]}})]}}),_createVNode(ConditionalRender,{conditional:!!i.renderMain},{default:function(){return[_createVNode(Auto,_mergeProps({class:n.mainAutoWrapClassName||"",style:n.mainAutoStyle,fit:!0,autoFixed:!0},n.mainAutoWrapProps||{}),{default:function(){return[_createVNode(FlexLayout,{direction:"horizontal",class:n.mainWrapClassName||"",style:n.mainWrapStyle},{default:function(){return[_createVNode(ConditionalRender,{conditional:!!i.renderLeft},{default:function(){return[_createVNode(Fixed,_mergeProps({class:n.leftClassName||"",style:n.leftStyle,fit:!0},n.leftProps||{}),{default:function(){return[null==(t=i.renderLeft)?void 0:t.call(i)]}})]}}),_createVNode(Auto,_mergeProps({autoFixed:!0,fit:!0,class:n.mainClassName||"",style:n.mainStyle},n.mainProps||{}),{default:function(){return[null==(o=i.renderMain)?void 0:o.call(i)]}}),_createVNode(ConditionalRender,{conditional:!!i.renderRight},{default:function(){return[_createVNode(Fixed,_mergeProps({class:n.rightClassName||"",style:n.rightStyle,fit:!0},n.rightProps||{}),{default:function(){return[null==(r=i.renderRight)?void 0:r.call(i)]}})]}})]}})]}})]}}),_createVNode(ConditionalRender,{conditional:!!i.renderBottom},{default:function(){return[_createVNode(Fixed,_mergeProps({class:n.bottomClassName||"",style:n.bottomStyle,fit:!0},n.bottomProps||{}),{default:function(){return[null==(a=i.renderBottom)?void 0:a.call(i)]}})]}})]}})}}});export{verticalFlexLayoutProps};
//# sourceMappingURL=verticalFlexLayout.js.map
