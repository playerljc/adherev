import _mergeJSXProps from"@vue/babel-helper-vue-jsx-merge-props";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.number.constructor.js";var selectorPrefix="adherev-ui-split",Split={name:"adv-split",props:{direction:{type:String,default:"vertical",validator:function(e){return-1!==["vertical","horizontal"].indexOf(e)}},size:{type:[String,Number],default:20}},methods:{getStyle:function(){var e=this.direction,r=this.size;return"horizontal"===e?{display:"inline-block",width:"1px",height:"100%",margin:"0 "+r+"px"}:{width:"100%",height:"1px",margin:r+"px 0"}}},render:function(e){var r=this.className;return e("div",{class:selectorPrefix+" "+r,style:this.getStyle()})}},SplitGroup={name:"adv-split-group",props:{direction:{type:String,default:"vertical",validator:function(e){return-1!==["vertical","horizontal"].indexOf(e)}},size:{type:[Number,String],required:!1,default:20},className:{type:String,required:!1,default:""}},render:function(e){var r=this,t=r.$slots,i=r.direction,s=r.size,o=r.className,l=[];if(t.default)for(var a,n=0;n<t.default.length;n++)0!==n&&(a={props:{direction:i,size:s},class:o},l.push(e(Split,_mergeJSXProps([{},a,{key:n}])))),l.push(t.default[n]);return e("div",{class:selectorPrefix+"-group "+i},[l])}};export default Split;export{SplitGroup};
//# sourceMappingURL=split.js.map