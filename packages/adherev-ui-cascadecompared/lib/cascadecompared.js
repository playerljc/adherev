"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js"),require("core-js/modules/es.array.find.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.array.filter.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),iscroll_probe_1=tslib_1.__importDefault(require("iscroll/build/iscroll-probe")),vue_fragment_1=require("vue-fragment"),adherev_ui_stickuplayout_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-stickuplayout")),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),selectorPrefix="adherev-ui-cascadecompared",defaultCellWidth=120;function initTouch(){document.addEventListener("touchmove",function(e){e.preventDefault()},!!function(){var e=!1;try{addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(e){}return e}()&&{capture:!1,passive:!1})}initTouch();var CascadeCompared={name:"adv-cascadecompared",props:{className:{type:String,default:""},indicatorClassName:{type:String,default:""},indicatorStyle:{type:String,default:""},indicatorFixedWrapClassName:{type:String,default:""},indicatorFixedWrapStyle:{type:String,default:""},indicatorAutoWrapClassName:{type:String,default:""},indicatorAutoWrapStyle:{type:String,default:""},masterClassName:{type:String,default:""},masterStyle:{type:String,default:""},masterInnerClassName:{type:String,default:""},masterInnerStyle:{type:String,default:""},masterStickFixedClassName:{type:String,default:""},masterStickFixedStyle:{type:String,default:""},masterStickInnerClassName:{type:String,default:""},masterStickInnerStyle:{type:String,default:""},indicator:{type:Object,default:function(){return{columns:[],dataSource:[]}}},master:{type:Array,default:function(){return[]},validator:function(e){return Array.isArray(e)}},defaultCellWidth:{type:[Number,String],default:defaultCellWidth}},data:function(){return{$scrolls:[]}},computed:{getIndicatorClassName:function(){var e=this.indicatorClassName,e=void 0===e?"":e;return classnames_1.default(selectorPrefix+"-indicator",(e||"").split(/\s+/))},getFixedWrapClassName:function(){return function(e){return classnames_1.default(selectorPrefix+"-fixedWrap",(e||"").split(/\s+/))}},getFixedWrapStyle:function(){return function(e,t){return e+";width:"+(t||defaultCellWidth)+"px"}},getCellClassName:function(){return function(e){return classnames_1.default(selectorPrefix+"-cell",(e.className||"").split(/\s+/))}},getAutoWrapClassName:function(){return function(e){return classnames_1.default(selectorPrefix+"-autoWrap",(e||"").split(/\s+/))}},getAutoInnerClassName:function(){return function(e){return classnames_1.default(selectorPrefix+"-autoInner",(e||"").split(/\s+/))}},getMasterClassName:function(){var e=this.masterClassName,e=void 0===e?"":e;return classnames_1.default(selectorPrefix+"-master",(e||"").split(/\s+/))},getMasterInnerClassName:function(){var e=this.masterInnerClassName,e=void 0===e?"":e;return classnames_1.default(selectorPrefix+"-master-inner",(e||"").split(/\s+/))},getFixedClassName:function(){var e=this.masterStickFixedClassName,e=void 0===e?"":e;return classnames_1.default((e||"").split(/\s+/))},getInnerClassName:function(){var e=this.masterStickInnerClassName,e=void 0===e?"":e;return classnames_1.default((e||"").split(/\s+/))}},methods:{initScroll:function(){for(var e=this.$refs.el,r=this.$data,s=e.querySelectorAll("."+selectorPrefix+"-autoWrap"),t=0;t<r.$scrolls.length;t++)r.$scrolls[t].destroy();r.$scrolls=[];for(t=0;t<s.length;t++)!function(e){var t=new iscroll_probe_1.default(s[e],{probeType:3,eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1});r.$scrolls.push(t),t.on("scroll",function(){for(var e=0;e<r.$scrolls.length;e++)r.$scrolls[e]!==t&&r.$scrolls[e].scrollTo(t.x,t.y)})}(t)},getFixedColumnConfig:function(e){var t=e.find(function(e){return e.isFixed});return t||(e.length?e[0]:null)},renderCell:function(e,t,r){return t.render?t.render(e,r[t.dataIndex],r):r[t.dataIndex]},renderMasterGroupTitle:function(e,t){return adherev_util_1.default.isObject(t)?e("div",{slot:"title"},[e(t)]):adherev_util_1.default.isFunction(t)?e("div",{slot:"title"},[t(e)]):e("span",{slot:"title"},[t])},renderMasterGroupContent:function(r,e){var t=e.dataSource,s=void 0===t?[]:t,a=e.columns,i=void 0===a?[]:a,l=e.fixedWrapClassName,n=void 0===l?"":l,o=e.fixedWrapStyle,u=void 0===o?"":o,d=e.autoWrapClassName,c=void 0===d?"":d,f=e.autoWrapStyle,m=void 0===f?"":f,t=e.autoInnerClassName,a=void 0===t?"":t,l=e.autoInnerStyle,o=void 0===l?"":l,d=this,f=d.getFixedColumnConfig,t=d.getFixedWrapClassName,p=d.getFixedWrapStyle,v=d.getCellClassName,e=d.getAutoWrapClassName,l=d.getAutoInnerClassName,y=d.renderCell,C=f(i);return r(vue_fragment_1.Fragment,[r("div",{class:t(n),style:p(u,null==C?void 0:C.width)},[s.map(function(e,t){return r("div",{key:t,class:selectorPrefix+"-item"},[r("div",{class:v(C),style:C.style},[y(r,C,e)])])})]),r("div",{class:e(c),style:m},[r("div",{class:l(a),style:o},[s.map(function(t,e){return r("div",{key:e,class:selectorPrefix+"-item"},[i.filter(function(e){return e!==C}).map(function(e){return r("div",{key:e.dataIndex,class:v(e),style:p(e.style,null==e?void 0:e.width)},[y(r,e,t)])})])})])])])},renderMasterGroup:function(e,t,r){var s=t.title,a=void 0===s?null:s,i=t.className,l=void 0===i?"":i,n=t.style,s=void 0===n?"":n,i=this.renderMasterGroupTitle,n=this.renderMasterGroupContent;return e(adherev_ui_stickuplayout_1.default.Item,{key:r,class:classnames_1.default((l||"").split(/\s+/)),style:s},[i(e,a),n(e,t)])},renderIndicator:function(t){var e=this,r=e.indicatorAutoWrapClassName,s=void 0===r?"":r,a=e.indicatorFixedWrapClassName,i=void 0===a?"":a,l=e.indicatorFixedWrapStyle,n=void 0===l?"":l,o=e.indicatorStyle,u=void 0===o?"":o,d=e.indicatorAutoWrapStyle,c=void 0===d?"":d,r=e.indicator,a=r.columns,l=void 0===a?[]:a,o=r.dataSource,f=void 0===o?{}:o,d=e.getFixedColumnConfig,a=e.getIndicatorClassName,r=e.getFixedWrapClassName,m=e.getFixedWrapStyle,p=e.getCellClassName,o=e.getAutoWrapClassName,v=e.renderCell,y=d(l);return t("div",{class:a,style:u},[t("div",{class:r(i),style:m(n,null==y?void 0:y.width)},[t("div",{class:selectorPrefix+"-item"},[t("div",{class:p(y),style:y.style},[v(t,y,f)])])]),t("div",{class:o(s),style:c},[t("div",{class:selectorPrefix+"-item"},[l.filter(function(e){return e!==y}).map(function(e){return t("div",{key:e.dataIndex,class:p(e),style:m(e.style,e.width)},[v(t,e,f)])})])])])},renderMaster:function(r){var e=this,t=this,s=t.masterStyle,a=t.masterInnerStyle,i=t.masterStickFixedStyle,l=t.masterStickInnerStyle,n=t.master,o=void 0===n?[]:n,u=t.getMasterClassName,d=t.getMasterInnerClassName,c=t.getFixedClassName,n=t.getInnerClassName,f=t.renderMasterGroup;return r("div",{class:u,style:void 0===s?"":s},[r(adherev_ui_stickuplayout_1.default,{ref:"stickup",class:d,style:void 0===a?"":a,attrs:{fixedClassName:c,fixedStyle:void 0===i?"":i,innerClassName:n,innerStyle:void 0===l?"":l},on:{change:function(){e.$emit("stick-change")}}},[o.map(function(e,t){return f(r,e,t)})])])},scrollToByIndex:function(e,t){this.$refs.stickup.scrollToByIndex(e,t=void 0===t?300:t)},scrollToByHeaderEl:function(e,t){this.$refs.stickup.scrollToByHeaderEl(e,t=void 0===t?300:t)},scrollToByColumn:function(e){var t=this.$data.$scrolls[0],e=t.wrapper.querySelector("."+selectorPrefix+"-item ."+selectorPrefix+"-cell:nth-of-type("+e+")");t.scrollToElement(e)}},mounted:function(){this.$refs.stickup.refresh(),this.initScroll()},updated:function(){this.$refs.stickup.refresh(),this.initScroll()},render:function(e){return e("div",{class:selectorPrefix,ref:"el"},[this.renderIndicator(e),this.renderMaster(e)])}};exports.default=CascadeCompared;
//# sourceMappingURL=cascadecompared.js.map
