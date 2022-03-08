import{defineComponent}from"vue";import{bool}from"vue-types";var props={conditional:bool().def(!0)};export default defineComponent({name:"adv-conditionalrender",props:props,slots:["default","noMatch"],setup:function(o,n){var t=n.slots;return function(){return o.conditional?t.default?t.default():null:t.noMatch?t.noMatch():null}}});
//# sourceMappingURL=conditionalrender.js.map
