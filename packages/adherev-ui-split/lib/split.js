"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_babelHelperVueJsxMergeProps=_interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props")),selectorPrefix=(require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.number.constructor.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.SplitGroup=void 0,"adherev-ui-split"),Split={name:"adv-split",props:{direction:{type:String,default:"vertical",validator:function(e){return-1!==["vertical","horizontal"].indexOf(e)}},size:{type:[String,Number],default:20}},methods:{getStyle:function(){var e=this.direction,r=this.size;return"horizontal"===e?{display:"inline-block",width:"1px",height:"100%",margin:"0 ".concat(r,"px")}:{width:"100%",height:"1px",margin:"".concat(r,"px 0")}}},render:function(e){var r=this.className;return e("div",{class:"".concat(selectorPrefix," ").concat(r),style:this.getStyle()})}};exports.SplitGroup={name:"adv-split-group",props:{direction:{type:String,default:"vertical",validator:function(e){return-1!==["vertical","horizontal"].indexOf(e)}},size:{type:[Number,String],required:!1,default:20},className:{type:String,required:!1,default:""}},render:function(e){var r=this,t=r.$slots,i=r.direction,s=r.size,o=r.className,l=[];if(t.default)for(var a=0;a<t.default.length;a++)0!==a&&l.push(e(Split,(0,_babelHelperVueJsxMergeProps.default)([{},{props:{direction:i,size:s},class:o},{key:a}]))),l.push(t.default[a]);return e("div",{class:"".concat(selectorPrefix,"-group ").concat(i)},[l])}},exports.default=Split;
//# sourceMappingURL=split.js.map
