"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.array.fill.js"),require("core-js/modules/es.array.from.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.map.js"),require("core-js/modules/esnext.map.delete-all.js"),require("core-js/modules/esnext.map.every.js"),require("core-js/modules/esnext.map.filter.js"),require("core-js/modules/esnext.map.find.js"),require("core-js/modules/esnext.map.find-key.js"),require("core-js/modules/esnext.map.includes.js"),require("core-js/modules/esnext.map.key-of.js"),require("core-js/modules/esnext.map.map-keys.js"),require("core-js/modules/esnext.map.map-values.js"),require("core-js/modules/esnext.map.merge.js"),require("core-js/modules/esnext.map.reduce.js"),require("core-js/modules/esnext.map.some.js"),require("core-js/modules/esnext.map.update.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.function.name.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.Value=exports.Label=exports.getRenderDetail=exports.renderGridSearchFormGroup=exports.TableGridLayout=void 0;var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),vue_fragment_1=require("vue-fragment"),vue_hoc_1=require("vue-hoc"),adherev_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-conditionalrender")),selectorPrefix="adherev-ui-tablegridlayout",renderHorizontal=function(l,e){var r=e.data,a=r.columnCount,r=r.data,n=e.rowCountRef;var u=[],i=2*a,d=[];(r||[]).forEach(function(e){var r=e.label;"require"in e&&e.require&&(r=vue_hoc_1.createHOC(r,null,{class:function(e){return classnames_1.default(selectorPrefix+"-table-row-label","require",e||"")}})),d.push(r),d.push(e.value)});var c=0,m=[];return function e(){for(var r=c,a=[],t=0;c<d.length;){var s=d[c];if(t===i)break;s.data&&s.data.props&&"colSpan"in s.data.props&&"number"==typeof s.data.props.colSpan?t+=s.data.props.colSpan:t+=1,a.push(s),c++}t<i&&Array.from({length:i-t}).fill(0).forEach(function(){a.push(l("td",{class:selectorPrefix+"-table-noborder"}))});var o=l("tr",{class:classnames_1.default(selectorPrefix+"-table-row",n.current%2==0?"odd":"even")},[a]);n.current++,m.push(o);o=c-1;u.push({startIndex:r/2,endIndex:(o-1)/2}),c<d.length&&e()}(),{element:m,detail:u}},renderVertical=function(u,e,i){var r=e.columnCount,d=e.data;var c=[],m=r;(d||[]).forEach(function(e){var r=e.label;"require"in e&&e.require&&(e.label=vue_hoc_1.createHOC(r,null,{class:function(e){return classnames_1.default(selectorPrefix+"-table-row-label","require",e)}}))});var f=0,p=[];return function e(){for(var r=[],a=[],t=0,s=f;f<(d||[]).length;){var o=(d||[])[f];if(t===m)break;"colSpan"in o.value.props&&"number"==typeof o.value.props.colSpan?t+=o.value.props.colSpan:t+=1,r.push(o.label),a.push(o.value),f++}t<m&&Array.from({length:m-t}).fill(0).forEach(function(){r.push(u("td",{class:selectorPrefix+"-table-noborder"})),a.push(u("td",{class:selectorPrefix+"-table-noborder"}))});var l=u("tr",{class:classnames_1.default(selectorPrefix+"-table-row","even")},[r]),n=u("tr",{class:classnames_1.default(selectorPrefix+"-table-row","odd")},[a]);p.push(l,n),i.current+=2;n=f-1;c.push({startIndex:s,endIndex:n}),f<(d||[]).length&&e()}(),{element:p,detail:c}},renderGridSearchForm=function(e,r){for(var a=r.data,t=a.className,s=a.style,o=a.width,l=a.colgroup,n=a.defaultLabelWidth,u=void 0===n?120:n,i=r.layout,d=r.density,c=r.parity,a=void 0!==c&&c,n=r.rowCountRef,c=new Map([["default","densitydefault"],["middle","densitymiddle"],["small","densitysmall"]]),m=[],f=0;f<(l||[]).length;f++){var p=(l||[])[f];m.push(e(adherev_ui_conditionalrender_1.default,{key:f,attrs:{conditional:"auto"!==p}},[e("col",{attrs:{width:p||u}}),e("col",{slot:"noMatch"})]))}return e("table",{class:classnames_1.default(selectorPrefix+"-table",c.get(d||"default"),a?"parity":"",t||""),style:"width:"+o+"px"+(";"+s||"")},[e("colgroup",[m]),e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:"horizontal"===i}},[renderHorizontal(e,r).element,e(vue_fragment_1.Fragment,{slot:"noMatch"},[renderVertical(e,r.data,n).element])])])},renderGridSearchFormGroup=function(a,e,r){var t={current:0},s=r||{},o=s.bordered,l=void 0!==o&&o,r=s.innerClassName,o=s.innerStyle,n=tslib_1.__rest(s,["bordered","innerClassName","innerStyle"]);return a("div",{class:classnames_1.default(l?selectorPrefix+"-border":null,selectorPrefix+"-inner-wrap",r||""),style:o||""},[(e||[]).map(function(e,r){return a(adherev_ui_conditionalrender_1.default,{key:e.name||r,attrs:{conditional:0!==r}},[a("div",[renderGridSearchForm(a,tslib_1.__assign({data:e,rowCountRef:t},n))]),a(vue_fragment_1.Fragment,{slot:"noMatch"},[renderGridSearchForm(a,tslib_1.__assign({data:e,rowCountRef:t},n))])])})])};exports.renderGridSearchFormGroup=renderGridSearchFormGroup;var getRenderDetail=function(s,e,o){var r=o||{},l=(r.bordered,r.innerClassName,r.innerStyle,tslib_1.__rest(r,["bordered","innerClassName","innerStyle"])),n={rowCount:0,layout:o.layout,detail:[]};return e.forEach(function(e){var r={current:0},a=tslib_1.__assign({data:e,rowCountRef:r},l),t=[],t=("horizontal"===o.layout?renderHorizontal(s,a):renderVertical(s,a.data,r)).detail;n.rowCount+=r.current,n.detail.push({name:e.name,rowCount:"horizontal"===o.layout?r.current:r.current/2,detail:t})}),n};exports.getRenderDetail=getRenderDetail;var Label={name:"adv-tablegridlayout-label",render:function(e){return e("td",{class:classnames_1.default(selectorPrefix+"-table-row-label")},[this.$slots.default])}};exports.Label=Label;var Value={name:"adv-tablegridlayout-value",render:function(e){return e("td",{class:classnames_1.default(selectorPrefix+"-table-row-value")},[this.$slots.default])}};exports.Value=Value;var TableGridLayout={name:"adv-tablegridlayout",props:{bordered:{type:Boolean,default:!1},innerClassName:{type:String,default:""},innerStyle:{type:String,default:""},layout:{type:String,default:"horizontal"},density:{type:String,default:"default"},parity:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}}},computed:{otherProps:function(){var e,r={};for(e in this.$props)"data"!==e&&(r[e]=this[e]);return r}},render:function(e){var r=this.data;return e("div",{class:classnames_1.default(selectorPrefix)},[renderGridSearchFormGroup(e,r,this.otherProps)])}};exports.TableGridLayout=TableGridLayout;
//# sourceMappingURL=tablegridlayout.js.map
