"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_babelHelperVueJsxMergeProps=_interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.number.constructor.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.SplitGroup=void 0;var selectorPrefix="adherev-ui-split",Split={name:"adv-split",props:{direction:{type:String,default:"vertical",validator:function(e){return-1!==["vertical","horizontal"].indexOf(e)}},size:{type:[String,Number],default:20}},methods:{getStyle:function(){var e=this.direction,r=this.size;return"horizontal"===e?{display:"inline-block",width:"1px",height:"100%",margin:"0 "+r+"px"}:{width:"100%",height:"1px",margin:r+"px 0"}}},render:function(e){var r=this.className;return e("div",{class:selectorPrefix+" "+r,style:this.getStyle()})}};exports.SplitGroup={name:"adv-split-group",props:{direction:{type:String,default:"vertical",validator:function(e){return-1!==["vertical","horizontal"].indexOf(e)}},size:{type:[Number,String],required:!1,default:20},className:{type:String,required:!1,default:""}},render:function(e){var r=this,t=r.$slots,i=r.direction,s=r.size,l=r.className,o=[];if(t.default)for(var u=0;u<t.default.length;u++)0!==u&&o.push(e(Split,(0,_babelHelperVueJsxMergeProps.default)([{},{props:{direction:i,size:s},class:l},{key:u}]))),o.push(t.default[u]);return e("div",{class:selectorPrefix+"-group "+i},[o])}},exports.default=Split;
//# sourceMappingURL=split.js.map
