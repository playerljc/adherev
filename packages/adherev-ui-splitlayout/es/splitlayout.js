import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.replace.js";import"core-js/modules/es.number.parse-int.js";import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.string.split.js";import classNames from"classnames";import FlexLayout from"@baifendian/adherev-ui-flexlayout";var flexlayoutSelectorPrefix=FlexLayout.selectorPrefix,selectorPrefix="adherev-ui-splitlayout",directionProp={horizontal:{page:"pageX",dimension:"width",offset:"offsetWidth"},vertical:{page:"pageY",dimension:"height",offset:"offsetHeight"}};function toPoint(e){e=e.replace("%","");return Number.parseInt(e)/100}var SplitLayout={name:"adv-splitlayout",props:{className:{type:String,default:""},maxSize:{type:[String,Number],default:"100%"},minSize:{type:[String,Number],default:10}},emits:["canDrag","dragStarted","dragFinished","dragFinished","change"],data:function(){return{$fixedEl:null,$autoEl:null,$containerEl:null,$isEnter:!1,$isOut:!1,$isDown:!1,$isMove:!1,$startVal:0,$changeVal:0,$changeBaseVal:0,$fixedValue:0,$maxDimension:0,$situation:new Map([[flexlayoutSelectorPrefix+"-fixed_"+flexlayoutSelectorPrefix+"-auto",!0],[flexlayoutSelectorPrefix+"-auto_"+flexlayoutSelectorPrefix+"-fixed",!0]])}},mounted:function(){var e;this.checked()&&((e=this.$data).$fixedEl=this.getFixedEl(),e.$autoEl=this.getAutoEl(),e.$containerEl=this.$refs.ref.parentElement,null!==(e=e.$containerEl)&&void 0!==e&&e.classList.add(selectorPrefix+"-noSelect"),this.initEvents())},created:function(){},updated:function(){var e;this.checked()&&((e=this.$data).$isEnter=!1,e.$isOut=!1,e.$isDown=!1,e.$isMove=!1,e.$startVal=0,e.$changeVal=0,e.$changeBaseVal=0,e.$fixedValue=0,e.$maxDimension=0,e.$fixedEl=this.getFixedEl(),e.$autoEl=this.getAutoEl(),this.initEvents())},inject:["getDirection"],methods:{checked:function(){var e=this.$refs,t=this.$data,e=e.ref,s=e.previousElementSibling,i=e.nextElementSibling;return Array.from(t.$situation.keys()).some(function(e){var t=e.split("_"),e=t[0],t=t[1];return s.classList.contains(e)&&i.classList.contains(t)})},initEvents:function(){var e=this.$data,t=e.$fixedEl,s=e.$autoEl,i=e.$containerEl,e=this.$refs.ref;e.removeEventListener("mouseenter",this.onMouseenter),e.removeEventListener("mousedown",this.onMousedown),e.removeEventListener("mouseout",this.onMouseout),e.removeEventListener("mousemove",this.onMousemove),e.removeEventListener("mouseup",this.onMouseup),t.removeEventListener("mousemove",this.onMousemove),t.removeEventListener("mouseout",this.onMouseout),t.removeEventListener("mouseup",this.onMouseup),s.removeEventListener("mouseout",this.onMouseout),s.removeEventListener("mousemove",this.onMousemove),s.removeEventListener("mouseup",this.onMouseup),i.removeEventListener("mouseleave",this.onMouseleave),e.addEventListener("mouseenter",this.onMouseenter),e.addEventListener("mousedown",this.onMousedown),e.addEventListener("mousemove",this.onMousemove),e.addEventListener("mouseout",this.onMouseout),e.addEventListener("mouseup",this.onMouseup),t.addEventListener("mousemove",this.onMousemove),t.addEventListener("mouseout",this.onMouseout),t.addEventListener("mouseup",this.onMouseup),s.addEventListener("mousemove",this.onMousemove),s.addEventListener("mouseout",this.onMouseout),s.addEventListener("mouseup",this.onMouseup),i.addEventListener("mouseleave",this.onMouseleave)},getFixedEl:function(){var e=this.$refs.ref,t=e.previousElementSibling,e=e.nextElementSibling;return t.classList.contains(flexlayoutSelectorPrefix+"-fixed")?t:e},getAutoEl:function(){var e=this.$refs.ref,t=e.previousElementSibling,e=e.nextElementSibling;return t.classList.contains(flexlayoutSelectorPrefix+"-auto")?t:e},getFixedElPosition:function(){return this.$refs.ref.previousElementSibling.classList.contains(flexlayoutSelectorPrefix+"-fixed")?"prev":"next"},getMaxDimension:function(){var e=this.$data;if(e.$maxDimension)return e.$maxDimension;var t=this.getFixedEl(),s=this.getAutoEl(),i=this.getProps().offset;return e.$maxDimension=t[i]+s[i],e.$maxDimension},getResizeClass:function(){return"vertical"===(0,this.getDirection)()?"rowResize":"colResize"},getProps:function(){var e=this.getDirection;return directionProp[e()]},getMaxSize:function(){var e=this.maxSize,t=0,s=this.getMaxDimension();return"string"==typeof e?t=s*toPoint(e):"number"==typeof e&&(t=e),s<t?s:t},getMinSize:function(){var e=this.minSize,t=0,s=this.getMaxDimension(),i=this.getProps().offset,i=this.$refs.ref[i];return"string"==typeof e?t=s*toPoint(e):"number"==typeof e&&(t=e),t<i?i:t},onMouseenter:function(e){var t=this.$data;this.$refs.ref.classList.add(selectorPrefix+"-"+this.getResizeClass()),t.$isOut=!1,t.$isEnter=!0,this.$emit("canDrag",e)},onMousedown:function(e){var t=this.$refs.ref,s=this.$data,i=s.$fixedEl,o=s.$isEnter;t.classList.remove(selectorPrefix+"-"+this.getResizeClass()),o&&(s.$isDown=!0,s.$startVal=e[this.getProps().page],s.$fixedValue=i[this.getProps().offset],this.$emit("dragStarted",e))},onMouseup:function(e){var t=this.$data;this.$refs.ref.classList.add(selectorPrefix+"-"+this.getResizeClass()),t.$isDown&&(t.$isDown=!1,t.$isMove=!1,t.$isEnter=!t.$isOut,t.$startVal=0,t.$changeBaseVal+=t.$changeVal,this.$emit("dragFinished",e))},onMouseleave:function(e){var t=this.$data;t.$isDown&&(t.$isDown=!1,t.$isMove=!1,t.$isEnter=!1,t.$startVal=0,t.$changeBaseVal+=t.$changeVal,this.$emit("dragFinished",e))},onMousemove:function(e){var t,s,i,o,n=this.$data;n.$isEnter&&n.$isDown&&(n.$isMove=!0,o=e[this.getProps().page],n.$changeVal=o-n.$startVal,t="prev"===this.getFixedElPosition()?n.$fixedValue+n.$changeVal:n.$fixedValue-n.$changeVal,s=void 0,i=this.getMaxSize(),o=this.getMinSize(),i<=t||t<=o?i<=t?s=i:t<=o&&(s=o):s=t,n.$fixedEl.style[this.getProps().dimension]=s+"px",this.$emit("change",e))},onMouseout:function(e){var t=this.$data;t.$isOut=!0,t.$isDown||(t.$isEnter=!1,this.$emit("change",e))}},render:function(e){var t=this.className,s=this.getDirection;return e("div",{ref:"ref",class:classNames(selectorPrefix,selectorPrefix+"-"+s(),t||"")})}};export default SplitLayout;
//# sourceMappingURL=splitlayout.js.map
