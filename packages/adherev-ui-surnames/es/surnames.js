import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.array.find-index.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.map.js";import classNames from"classnames";import Util from"@baifendian/adherev-util";var selectorPrefix="adherev-ui-surnames",DURATION=100,Surnames={name:"adv-surnames",props:{position:{type:String,default:"right",validator:function(e){return-1!==["top","right","bottom","left"].indexOf(e)}},indexes:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}}},emits:["scroll","before-scroll"],data:function(){return{$key:!1,$isMouseClicked:!1,$isMouseMoved:!1,$startY:null,$startX:null,$curIndexName:null,$indexPositionMap:null,$maskEl:null}},computed:{getClassName:function(){var e=this.position;return classNames(selectorPrefix,"".concat(selectorPrefix,"-config-position-").concat(e))}},mounted:function(){this.initEvent(),this.createMask(),this.adapterDimension(),this.createIndexPosition()},updated:function(){this.adapterDimension(),this.createIndexPosition()},beforeDestroy:function(){var e=this.$data.$maskEl;e&&e.parentElement.removeChild(e)},methods:{onClick:function(e){e.preventDefault(),e.stopPropagation(),this.clickDetail(e)},onTouchmove:function(e){e.preventDefault();var t=e.changedTouches[0].pageY,i=e.changedTouches[0].pageX,e=e.target,e=Util.getTopDom(e,"".concat(selectorPrefix,"-index-item"));this.$data.$curIndexName=null==e?void 0:e.dataset.name,this.moveDetail(i,t)},onTouchend:function(){var e=this.$refs.highlightedEl;e.style.display="none",e.innerText="",e.style.transform="translate3d(0,0,0)"},onMousedown:function(e){e.preventDefault(),this.$data.$startY=e.pageY,this.$data.$startX=e.pageX;e=e.target,e=Util.getTopDom(e,"".concat(selectorPrefix,"-index-item"));this.$data.$curIndexName=null==e?void 0:e.dataset.name,this.$data.$isMouseClicked=!0},onMousemove:function(e){if(!this.$data.$isMouseClicked)return!1;this.$data.$isMouseMoved=!0,e.preventDefault();var t=e.pageY,e=e.pageX;this.moveDetail(e,t)},onMouseleave:function(){var e=this.$refs.highlightedEl;this.$data.$isMouseClicked=!1,this.$data.$isMouseMoved=!1,e.style.display="none",e.innerText="",e.style.transform="translate3d(0,0,0)"},onMouseup:function(e){var t=this.$refs.highlightedEl,i=this.$data;if(i.$isMouseMoved)return i.$isMouseClicked=!1,i.$isMouseMoved=!1,t.style.display="none",t.innerText="",!(t.style.transform="translate3d(0,0,0)");e.preventDefault(),this.clickDetail(e)},onResize:function(){this.update()},clickDetail:function(e){var t=e.target,e=(e.preventDefault(),this.$data);if(e.$key)return!1;e.$key=!0,e.$maskEl.style.display="block";e=Util.getTopDom(t,"".concat(selectorPrefix,"-index-item"));this.scrollToAnimation(null==(t=null==e?void 0:e.dataset)?void 0:t.name)},moveDetail:function(e,t){var i,e=this.findIndex(e,t);e&&((t=this.$refs.highlightedEl).innerText=e.name,t.style.display="block","vertical"===this.getDirection()?(i=e.offsetTop+Math.floor(e.height/2),t.style.transform="translate3d(0,".concat(i,"px,0)")):(i=e.offsetLeft+e.width,t.style.transform="translate3d(".concat(i,"px,0,0)")),this.scrollTo(e.name))},initEvent:function(){var e=this.$refs.indexInnerEl;Util.isTouch()?(e.addEventListener("click",this.onClick),e.addEventListener("touchmove",this.onTouchmove),e.addEventListener("touchend",this.onTouchend)):(e.addEventListener("mousedown",this.onMousedown),e.addEventListener("mousemove",this.onMousemove),e.addEventListener("mouseleave",this.onMouseleave),e.addEventListener("mouseup",this.onMouseup),window.addEventListener("resize",this.onResize))},adapterDimension:function(){var e=this.$refs,t=e.el,e=e.indexInnerEl;"vertical"===this.getDirection()?(t.style.height="".concat((null==e?void 0:e.offsetHeight)+50,"px"),t.style.width="100%"):t.style.height="100%"},createIndexPosition:function(){var e=this.$refs.indexInnerEl,t=this.$data,i=e.querySelectorAll(".".concat(selectorPrefix,"-index-item"));t.$indexPositionMap=[];for(var n=0;n<i.length;n++){var o=i[n],s=o.dataset.name,a=o.getBoundingClientRect();t.$indexPositionMap.push({name:s,top:a.top,bottom:a.bottom,left:a.left,right:a.right,offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,width:o.offsetWidth,height:o.offsetHeight})}},createMask:function(){var e=document.createElement("div");e.innerHTML="<div class='".concat(selectorPrefix,"-mask'></div>"),this.$data.$maskEl=e.firstElementChild,document.body.appendChild(this.$data.$maskEl)},scrollToAnimation:function(i,e){void 0===e&&(e=100);var n=this,t=this.$refs,o=t.contentEl,t=t.el,s=this.$data,a=o.querySelector(".".concat(selectorPrefix,"-group-title[data-name='").concat(i,"']")),r=o.scrollTop,l=a.offsetTop,a=screen.updateInterval,c=t.scrollHeight/((DURATION|e)/(a||16.7)+((DURATION|e)%(a||16.7)!=0?1:0));this.$emit("before-scroll",i),window.requestAnimationFrame(function e(){function t(){s.$key=!1,s.$isMouseClicked=!1,s.$maskEl.style.display="none",n.$emit("scroll",i)}o.scrollTop<l?l<r+c?r=l:r+=c:r-c<l?r=l:r-=c,o.scrollTop=r,o.scrollTop<l?l<=r?t():window.requestAnimationFrame(e):r<=l?t():window.requestAnimationFrame(e)})},scrollTo:function(e){var t=this.$refs.contentEl;t.scrollTop=t.querySelector(".".concat(selectorPrefix,"-group-title[data-name='").concat(e,"']")).offsetTop,this.$emit("scroll",e)},getDirection:function(){var e=this.position;return"left"===e||"right"===e?"vertical":"horizontal"},findIndex:function(e,t){for(var i,n=this.getDirection(),o=this.$data,s=o.$startX,a=o.$startY,r=o.$curIndexName,l=o.$indexPositionMap,c="vertical"===n?t-a:e-s,d=l.find(function(e){return e.name===r}),u=0,f=l.length-1;u<=f&&u<=l.length-1&&f<=l.length-1;){var h,m=l[h=f+u>>1],p=void 0,v=void 0,$=void 0,$="vertical"===n?(p=d.top+c,d.bottom,v=m.top,m.bottom):(p=d.left+c,d.right,v=m.left,m.right);if(v<=p&&p<=$){i=m;break}p<v?f=h-1:u=1+h}return i||null},update:function(){this.adapterDimension(),this.createIndexPosition()},renderIndex:function(t){var i=this.$scopedSlots;return this.indexes.map(function(e){return t("a",{key:e.index,class:"".concat(selectorPrefix,"-index-item"),attrs:{"data-name":e.index}},[i.index(e)])})},renderContent:function(t){var i=this.$scopedSlots;return this.dataSource.map(function(e){return t("div",{key:e.index,class:"".concat(selectorPrefix,"-group")},[t("a",{class:"".concat(selectorPrefix,"-group-title"),attrs:{"data-name":e.index}},[i.title(e)]),t("div",{class:"".concat(selectorPrefix,"-group-inner")},[i.content(e)])])})}},render:function(e){return e("div",{class:this.getClassName,ref:"el"},[e("div",{class:"".concat(selectorPrefix,"-highlighted"),ref:"highlightedEl"}),e("div",{class:"".concat(selectorPrefix,"-content"),ref:"contentEl"},[this.renderContent(e)]),e("div",{class:"".concat(selectorPrefix,"-index"),ref:"indexEl"},[e("div",{class:"".concat(selectorPrefix,"-index-inner"),ref:"indexInnerEl"},[this.renderIndex(e)])])])}};export default Surnames;
//# sourceMappingURL=surnames.js.map
