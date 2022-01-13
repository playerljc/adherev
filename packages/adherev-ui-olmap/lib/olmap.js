"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.array.fill.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var style_js_1=require("ol/style.js"),adherev_util_resource_1=__importDefault(require("@baifendian/adherev-util-resource")),constent_1=__importDefault(require("./constent")),util_1=__importDefault(require("./util")),selectorPrefix="adherev-ui-olmap";exports.default={name:"adv-olmap",props:{type:{type:String,default:constent_1.default.MAP_TYPE_ADMINISTRATIVE,validator:function(e){return-1!==[constent_1.default.MAP_TYPE_ADMINISTRATIVE,constent_1.default.MAP_TYPE_SATELLITE].indexOf(e)}},mapConfig:{type:Object,default:function(){}},maxZoom:{type:[String,Number],default:adherev_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value},zoom:{type:[String,Number],default:adherev_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value},fitZoom:{type:[String,Number],default:adherev_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value},minZoom:{type:[String,Number],default:adherev_util_resource_1.default.Dict.value.ResourceGisMapMinZoom.value},center:{type:Array,default:function(){return adherev_util_resource_1.default.Dict.value.ResourceGisXinbeiquCenterPoint.value}},extent:{type:Array,default:function(){return[]}},layers:{type:Array,default:function(){}}},data:function(){return{$map:null,$zoom:null,$mainGeoLayer:null}},mounted:function(){var e=this,t=e.mapConfig,a=e.type,r=e.maxZoom,o=e.minZoom,i=e.zoom,u=e.layers,n=e.center,e=e.extent;this.$data.$map=util_1.default.createMap(__assign({config:{target:this.$refs.ref},type:a,maxZoom:r,zoom:i,minZoom:o,center:n,extent:e,layers:u},t)),this.$data.$zoom=this.$data.$map.getView().getZoom()},methods:{addMainGeoJSONLayer:function(e){var t=e.geoJSONStyle,e=e.geoJSONData,a=t.stroke,r=t.fill,o=t.text;this.$data.$mainGeoLayer=this.addGeoLayer(e,function(){return new style_js_1.Style({fill:new style_js_1.Fill(__assign({},r)),stroke:new style_js_1.Stroke(__assign({},a)),text:new style_js_1.Text(__assign(__assign({},o),{fill:new style_js_1.Fill({color:o.color}),overflow:!0}))})})},addGeoLayer:function(e,t,a){return util_1.default.addGeoLayer(this.$data.$map,e,t,a=void 0===a?0:a)},addWindLayer:function(e,t,a){return util_1.default.addWindLayer(this.$data.$map,e,t,a=void 0===a?0:a)},addDataLayer:function(e){return util_1.default.addVectorLayer(this.$data.$map,e)},addHoverListener:function(e,t,a){util_1.default.addHoverListener(this.$data.$map,e,t,a)},addZoomListener:function(a){var r=this;this.$data.$map.on("moveend",function(e){var t=r.$data.$map.getView().getZoom();t!==r.$data.$zoom&&a(t),r.$data.$zoom=t})},addClickListener:function(e,t,a){util_1.default.addClickListener(this.$data.$map,e,t,a,this.setCursor)},addOverlay:function(e){return util_1.default.addOverlay(this.$data.$map,e)},setOverlayState:function(e,t){util_1.default.setOverlayState(e,t)},setCursor:function(e){this.$data.$map.getTarget().style.cursor=e},clear:function(){for(var e=this.$data.$map.getLayers(),t=1;t<e.getLength();t++)this.$data.$map.removeLayer(e.item(t))},getMap:function(){return this.$data.$map}},render:function(e){return e("div",{class:selectorPrefix,ref:"ref"})}};
//# sourceMappingURL=olmap.js.map