import"core-js/modules/es.number.constructor.js";import debounce from"lodash/debounce";import Vue from"vue";import Util from"@baifendian/adherev-util";var Teleport={name:"adv-teleport",props:{to:{type:[String,HTMLElement,Function]},isWrap:{type:Boolean,default:!0},wrapTag:{type:String,default:"div"},wrapClassName:{type:String,default:""},wrapStyle:{type:String,default:""},rate:{type:Number,default:100}},data:function(){var t=this;return{$mountEl:null,$vm:null,$debounceRender:debounce(function(){if(t.toEl){t.$data.$mountEl||(t.$data.$mountEl=t.createMountEl());var e=t;if(t.$data.$vm)try{t.$data.$vm.$forceUpdate()}catch(t){}else t.$data.$vm=new Vue({el:t.$data.$mountEl,render:function(t){return e.$slots.default}})}},this.rate)}},computed:{toEl:function(){var t=this.to;return Util.isString(this.to)&&(t=document.querySelector(this.to)),t=Util.isFunction(this.to)?this.to():t}},methods:{createMountEl:function(){var t,e;return this.isWrap?(t=this.wrapTag||"div",t=document.createElement(t),this.wrapClassName&&(t.className=this.wrapClassName),this.wrapStyle&&(t.style.cssText=this.wrapStyle),e=document.createElement("div"),t.appendChild(e),this.toEl.appendChild(t),e):(t=document.createElement("div"),this.toEl.appendChild(t),t)}},render:function(t){return this.$data.$debounceRender(),null}};export default Teleport;
//# sourceMappingURL=teleport.js.map
