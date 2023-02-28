import _typeof from"@babel/runtime/helpers/typeof";import{createVNode as _createVNode}from"vue";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.parse-int.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.array.fill.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.map.js";import{__assign,__rest}from"tslib";import classNames from"classnames";import{defineComponent,toRaw}from"vue";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import{tableGridLayoutProps}from"./types";var selectorPrefix="adherev-ui-tablegridlayout",renderHorizontal=function(t,e){var r=e.data,o=r.columnCount,r=r.data,s=e.rowCountRef;var n=[],i=2*o,c=[],d=((r||[]).forEach(function(e){var r="string"==typeof e.label?null==(r=t[e.label])?void 0:r.call(t):e.label,o="string"==typeof e.value?null==(o=t[e.value])?void 0:o.call(t):e.value,r=Array.isArray(r)&&r.length?r[0]:r,o=Array.isArray(o)&&o.length?o[0]:o;"require"in e&&e.require&&r&&(r.props||(r.props={}),r.props.class=classNames("".concat(selectorPrefix,"-table-row-label"),"require",(null==(e=null==r?void 0:r.props)?void 0:e.class)||"")),c.push(r),c.push(o)}),0),u=[];return function e(){for(var r=d,o=[],t=0;d<c.length;){var a=c[d];if(t===i)break;a&&a.props&&"colspan"in a.props&&["number","string"].includes(_typeof(a.props.colspan))?t+=parseInt("".concat(a.props.colspan)):t+=1,o.push(a),d++}t<i&&Array.from({length:i-t}).fill(0).forEach(function(){o.push(_createVNode("td",{class:"".concat(selectorPrefix,"-table-noborder")},null))});var l=_createVNode("tr",{class:classNames("".concat(selectorPrefix,"-table-row"),s.current%2==0?"odd":"even")},[o]),l=(s.current++,u.push(l),d-1);n.push({startIndex:r/2,endIndex:(l-1)/2}),d<c.length&&e()}(),{element:u,detail:n}},renderVertical=function(c,e,d){var r=e.columnCount,u=e.data;var p=[],m=r,f=((u||[]).forEach(function(e){var r,o="string"==typeof e.label?null==(o=c[e.label])?void 0:o.call(c):e.label,o=Array.isArray(o)&&o.length?o[0]:o;"require"in e&&e.require&&o&&(o.props||(o.props={}),o.props.class=classNames("".concat(selectorPrefix,"-table-row-label"),"require",(null==(r=null==o?void 0:o.props)?void 0:r.class)||""),e.label=o)}),0),y=[];return function e(){for(var r=[],o=[],t=0,a=f;f<(u||[]).length;){var l="string"==typeof(s=(u||[])[f]).label?null==(l=c[s.label])?void 0:l.call(c):s.label,s=null==(s=c[s.value])?void 0:s.call(c),l=Array.isArray(l)&&l.length?l[0]:l,s=Array.isArray(s)&&s.length?s[0]:s;if(t===m)break;s&&"props"in s&&s.props&&"colspan"in s.props&&["number","string"].includes(_typeof(s.props.colspan))?t+=parseInt("".concat(s.props.colspan)):t+=1,r.push(l),o.push(s),f++}t<m&&Array.from({length:m-t}).fill(0).forEach(function(){r.push(_createVNode("td",{class:"".concat(selectorPrefix,"-table-noborder")},null)),o.push(_createVNode("td",{class:"".concat(selectorPrefix,"-table-noborder")},null))});var n=_createVNode("tr",{class:classNames("".concat(selectorPrefix,"-table-row"),"even")},[r]),i=_createVNode("tr",{class:classNames("".concat(selectorPrefix,"-table-row"),"odd")},[o]),n=(y.push(n,i),d.current+=2,f-1);p.push({startIndex:a,endIndex:n}),f<(u||[]).length&&e()}(),{element:y,detail:p}},renderGridSearchForm=function(e,r){for(var o=r.data,t=o.className,a=o.style,l=o.width,s=o.colgroup,o=o.defaultLabelWidth,n=void 0===o?120:o,o=r.layout,i=r.density,c=r.parity,c=void 0!==c&&c,d=r.rowCountRef,u=new Map([["default","densitydefault"],["middle","densitymiddle"],["small","densitysmall"]]),p=[],m=0;m<(s||[]).length;m++)!function(e){var r=(s||[])[e];p.push(_createVNode(ConditionalRender,{key:e,conditional:"auto"!==r},{default:function(){return _createVNode("col",{width:r||n},null)},noMatch:function(){return _createVNode("col",null,null)}}))}(m);return _createVNode("table",{class:classNames("".concat(selectorPrefix,"-table"),u.get(i||"default"),c?"parity":"",t||""),style:__assign({width:l||"100%"},a||{})},[_createVNode("colgroup",null,[p]),_createVNode(ConditionalRender,{conditional:"horizontal"===o},{default:function(){return renderHorizontal(e,r).element},noMatch:function(){return renderVertical(e,r.data,d).element}})])},TableGridLayout=defineComponent({name:"adv-tablegridlayout",props:tableGridLayoutProps,setup:function(e,r){var o=r.slots,r=toRaw(e),t=r.data,a=__rest(r,["data"]);return function(){return _createVNode("div",{class:classNames(selectorPrefix,e.className||""),style:e.style||{}},[renderGridSearchFormGroup(o,t,a)])}}}),Label=defineComponent({name:"adv-tablegridlayout-label",setup:function(e,r){var o=r.slots;return function(){var e;return _createVNode("td",{class:classNames("".concat(selectorPrefix,"-table-row-label"))},[null==(e=o.default)?void 0:e.call(o)])}}}),Value=defineComponent({name:"adv-tablegridlayout-value",setup:function(e,r){var o=r.slots;return function(){var e;return _createVNode("td",{class:classNames("".concat(selectorPrefix,"-table-row-value"))},[null==(e=o.default)?void 0:e.call(o)])}}}),renderGridSearchFormGroup=function(o,e,r){var t={current:0},r=r||{},a=r.bordered,a=void 0!==a&&a,l=r.innerClassName,s=r.innerStyle,n=__rest(r,["bordered","innerClassName","innerStyle"]);return _createVNode("div",{class:classNames(a?"".concat(selectorPrefix,"-border"):null,"".concat(selectorPrefix,"-inner-wrap"),l||""),style:s||{}},[(e||[]).map(function(e,r){return _createVNode(ConditionalRender,{key:e.name||r,conditional:0!==r},{default:function(){return _createVNode("div",null,[renderGridSearchForm(o,__assign({data:e,rowCountRef:t},n))])},noMatch:function(){return renderGridSearchForm(o,__assign({data:e,rowCountRef:t},n))}})})])},getRenderDetail=function(a,e,l){var r=l||{},s=(r.bordered,r.innerClassName,r.innerStyle,__rest(r,["bordered","innerClassName","innerStyle"])),n={rowCount:0,layout:l.layout,detail:[]};return e.forEach(function(e){var r={current:0},o=__assign({data:e,rowCountRef:r},s),t=[],t=("horizontal"===l.layout?renderHorizontal(a,o):renderVertical(a,o.data,r)).detail;n.rowCount+=r.current,n.detail.push({name:e.name,rowCount:"horizontal"===l.layout?r.current:r.current/2,detail:t})}),n};export{TableGridLayout,renderGridSearchFormGroup,getRenderDetail,Label,Value};
//# sourceMappingURL=tablegridlayout.js.map
