import{createVNode as _createVNode,Fragment as _Fragment}from"vue";import{defineComponent}from"vue";import{bool}from"vue-types";import{deal}from"./util";var visibilityProps={conditional:bool().def(!0)};export default defineComponent({name:"adv-conditionalrender-visibility",props:visibilityProps,slots:["default","noMatch"],setup:function(o,e){var t=e.slots;return function(){var e=deal({conditional:o.conditional,rule:"visibility",ruleVisibleValue:"visible",ruleHideValue:"hidden",slots:t}),i=e.defaultVNodes,e=e.noMatchVNodes;return _createVNode(_Fragment,null,[i,e])}}});export{visibilityProps};
//# sourceMappingURL=visibility.js.map
