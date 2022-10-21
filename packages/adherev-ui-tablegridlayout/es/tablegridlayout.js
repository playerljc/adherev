import _typeof from"@babel/runtime/helpers/typeof";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.parse-int.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.array.fill.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.function.name.js";import{__assign,__rest}from"tslib";import classNames from"classnames";import{Fragment}from"vue-fragment";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";var selectorPrefix="adherev-ui-tablegridlayout",renderHorizontal=function(l,a,e){var r=e.data,t=r.columnCount,r=r.data,n=e.rowCountRef;var i=[],d=2*t,u=[];(r||[]).forEach(function(e){var r=a.$slots[e.label],t=a.$slots[e.value],r=Array.isArray(r)&&r.length?r[0]:r,t=Array.isArray(t)&&t.length?t[0]:t;"require"in e&&e.require&&r&&(r.data.class=classNames(selectorPrefix+"-table-row-label","require",(null===(e=null==r?void 0:r.data)||void 0===e?void 0:e.class)||"")),u.push(r),u.push(t)});var c=0,m=[];return function e(){for(var r=c,t=[],a=0;c<u.length;){var o=u[c];if(a===d)break;o&&o.data&&o.data.attrs&&"colspan"in o.data.attrs&&["number","string"].includes(_typeof(o.data.attrs.colspan))?a+=parseInt(""+o.data.attrs.colspan):a+=1,t.push(o),c++}a<d&&Array.from({length:d-a}).fill(0).forEach(function(){t.push(l("td",{class:selectorPrefix+"-table-noborder"}))});var s=l("tr",{class:classNames(selectorPrefix+"-table-row",n.current%2==0?"odd":"even")},[t]);n.current++,m.push(s);s=c-1;i.push({startIndex:r/2,endIndex:(s-1)/2}),c<u.length&&e()}(),{element:l(Fragment,[m]),detail:i}},renderVertical=function(c,m,e,p){var r=e.columnCount,f=e.data;var y=[],h=r;(f||[]).forEach(function(e){var r=m.$slots[e.label],r=Array.isArray(r)&&r.length?r[0]:r;"require"in e&&e.require&&r&&(r.data.class=classNames(selectorPrefix+"-table-row-label","require",(null===(r=null==r?void 0:r.data)||void 0===r?void 0:r.class)||""))});var v=0,j=[];return function e(){for(var r,t=[],a=[],o=0,s=v;v<(f||[]).length;){var l=(f||[])[v],n="string"==typeof l.label?m.$slots[l.label]:l.label,i=m.$slots[l.value],n=Array.isArray(n)&&n.length?n[0]:n,i=Array.isArray(i)&&i.length?i[0]:i;if(o===h)break;"colspan"in((null===(l=null==i?void 0:i.data)||void 0===l?void 0:l.attrs)||{})&&["number","string"].includes(_typeof(null===(r=null===(r=null==i?void 0:i.data)||void 0===r?void 0:r.attrs)||void 0===r?void 0:r.colspan))?o+=parseInt(""+(null===(r=null===(r=null==i?void 0:i.data)||void 0===r?void 0:r.attrs)||void 0===r?void 0:r.colspan)):o+=1,t.push(n),a.push(i),v++}o<h&&Array.from({length:h-o}).fill(0).forEach(function(){t.push(c("td",{class:selectorPrefix+"-table-noborder"})),a.push(c("td",{class:selectorPrefix+"-table-noborder"}))});var d=c("tr",{class:classNames(selectorPrefix+"-table-row","even")},[t]),u=c("tr",{class:classNames(selectorPrefix+"-table-row","odd")},[a]);j.push(d,u),p.current+=2;u=v-1;y.push({startIndex:s,endIndex:u}),v<(f||[]).length&&e()}(),{element:c(Fragment,[j]),detail:y}},renderGridSearchForm=function(e,r,t){for(var a=t.data,o=a.className,s=a.style,l=a.width,n=a.colgroup,i=a.defaultLabelWidth,d=void 0===i?120:i,u=t.layout,c=t.density,m=t.parity,a=void 0!==m&&m,i=t.rowCountRef,m=new Map([["default","densitydefault"],["middle","densitymiddle"],["small","densitysmall"]]),p=[],f=0;f<(n||[]).length;f++){var y=(n||[])[f];p.push(e(ConditionalRender,{key:f,attrs:{conditional:"auto"!==y}},[e("col",{attrs:{width:y||d}}),e("col",{slot:"noMatch"})]))}return e("table",{class:classNames(selectorPrefix+"-table",m.get(c||"default"),a?"parity":"",o||""),style:"width:"+l+"px"+(";"+s||"")},[e("colgroup",[p]),e(ConditionalRender,{attrs:{conditional:"horizontal"===u}},[renderHorizontal(e,r,t).element,e(Fragment,{slot:"noMatch"},[renderVertical(e,r,t.data,i).element])])])},renderGridSearchFormGroup=function(t,a,e,r){var o={current:0},s=r||{},l=s.bordered,n=void 0!==l&&l,r=s.innerClassName,l=s.innerStyle,i=__rest(s,["bordered","innerClassName","innerStyle"]);return t("div",{class:classNames(n?selectorPrefix+"-border":null,selectorPrefix+"-inner-wrap",r||""),style:l||""},[(e||[]).map(function(e,r){return t(ConditionalRender,{key:e.name||r,attrs:{conditional:0!==r}},[t("div",[renderGridSearchForm(t,a,__assign({data:e,rowCountRef:o},i))]),t(Fragment,{slot:"noMatch"},[renderGridSearchForm(t,a,__assign({data:e,rowCountRef:o},i))])])})])},getRenderDetail=function(o,s,e,l){var r=l||{},n=(r.bordered,r.innerClassName,r.innerStyle,__rest(r,["bordered","innerClassName","innerStyle"])),i={rowCount:0,layout:l.layout,detail:[]};return e.forEach(function(e){var r={current:0},t=__assign({data:e,rowCountRef:r},n),a=[],a=("horizontal"===l.layout?renderHorizontal(o,s,t):renderVertical(o,s,t.data,r)).detail;i.rowCount+=r.current,i.detail.push({name:e.name,rowCount:"horizontal"===l.layout?r.current:r.current/2,detail:a})}),i},Label={name:"adv-tablegridlayout-label",render:function(e){return e("td",{class:classNames(selectorPrefix+"-table-row-label")},[this.$slots.default])}},Value={name:"adv-tablegridlayout-value",render:function(e){return e("td",{class:classNames(selectorPrefix+"-table-row-value")},[this.$slots.default])}},TableGridLayout={name:"adv-tablegridlayout",props:{bordered:{type:Boolean,default:!1},innerClassName:{type:String,default:""},innerStyle:{type:String,default:""},layout:{type:String,default:"horizontal"},density:{type:String,default:"default"},parity:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}}},computed:{otherProps:function(){var e,r={};for(e in this.$props)"data"!==e&&(r[e]=this[e]);return r}},render:function(e){var r=this.data;return e("div",{class:classNames(selectorPrefix)},[renderGridSearchFormGroup(e,{$slots:this.$slots},r,this.otherProps)])}};export{TableGridLayout,renderGridSearchFormGroup,getRenderDetail,Label,Value};
//# sourceMappingURL=tablegridlayout.js.map