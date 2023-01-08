"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.array.reduce.js"),require("core-js/modules/es.object.keys.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),react_1=require("react"),react_dom_1=tslib_1.__importDefault(require("react-dom")),adhere_ui_reactquill_sandbox_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-reactquill-sandbox")),selectorPrefix="adherev-ui-vuequillsandbox",propsDefine={wrapClassName:{type:String,default:""},wrapStyle:{type:Object},quillStyle:{type:String,default:""},bounds:{type:[String,HTMLElement]},className:{type:String,default:""},defaultValue:{type:Object},formats:{type:Object},id:{type:String},modules:{type:Object},placeholder:{type:String},preserveWhitespace:{type:Boolean},readOnly:{type:Boolean},scrollingContainer:{type:[String,HTMLElement]},style:{type:Object},tabIndex:{type:Number},theme:{type:String},value:{type:Object},onChange:{type:Function},onChangeSelection:{type:Function},onFocus:{type:Function},onBlur:{type:Function},onKeyDown:{type:Object},onKeyPress:{type:Object},onKeyUp:{type:Object}},VueQuillSandbox={name:"adv-vuequillsandbox",props:propsDefine,emits:[],data:{$reactQuillRef:(0,react_1.createRef)()},mounted:function(){this.$renderQuill()},updated:function(){this.$renderQuill()},beforeDestroy:function(){react_dom_1.default.unmountComponentAtNode(this.$refs.wrapRef)},methods:{$renderQuill:function(){var r=this;return new Promise(function(e){var t=Object.keys(propsDefine).reduce(function(e,t){return e[t]=r[t],e},{ref:r.$data.$reactQuillRef});react_dom_1.default.render((0,react_1.createElement)(adhere_ui_reactquill_sandbox_1.default,t),r.$refs.wrapRef,function(){return e()})})},focus:function(){var e,t;null!=(t=null==(e=null==(e=this.$data.$reactQuillRef)?void 0:e.current)?void 0:e.focus)&&t.call(e)},blur:function(){var e,t;null!=(t=null==(e=null==(e=this.$data.$reactQuillRef)?void 0:e.current)?void 0:e.blur)&&t.call(e)},getEditor:function(){var e,t;return null==(t=null==(e=null==(e=this.$data.$reactQuillRef)?void 0:e.current)?void 0:e.getEditor)?void 0:t.call(e)},getQuill:function(){var e,t;return null==(t=null==(e=null==(e=this.$data.$reactQuillRef)?void 0:e.current)?void 0:e.getQuill)?void 0:t.call(e)}},render:function(e){return e("div",{class:(0,classnames_1.default)(selectorPrefix,this.wrapClassName||""),ref:"wrapRef",style:this.wrapStyle||{}})}};exports.default=VueQuillSandbox;
//# sourceMappingURL=vueQuillSandbox.js.map
