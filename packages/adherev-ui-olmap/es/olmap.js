import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.fill.js";import{__assign}from"tslib";import{Fill,Stroke,Style,Text}from"ol/style.js";import Resource from"@baifendian/adherev-util-resource";import Constent from"./constent";import Util from"./util";var selectorPrefix="adherev-ui-olmap",OLMap={name:"adv-olmap",props:{type:{type:String,default:Constent.MAP_TYPE_ADMINISTRATIVE,validator:function(e){return-1!==[Constent.MAP_TYPE_ADMINISTRATIVE,Constent.MAP_TYPE_SATELLITE].indexOf(e)}},mapConfig:{type:Object,default:function(){}},maxZoom:{type:[String,Number],default:Resource.Dict.value.ResourceGisMapMaxZoom.value},zoom:{type:[String,Number],default:Resource.Dict.value.ResourceGisMapMaxZoom.value},fitZoom:{type:[String,Number],default:Resource.Dict.value.ResourceGisMapMaxZoom.value},minZoom:{type:[String,Number],default:Resource.Dict.value.ResourceGisMapMinZoom.value},center:{type:Array,default:function(){return Resource.Dict.value.ResourceGisXinbeiquCenterPoint.value}},extent:{type:Array,default:function(){return[]}},layers:{type:Array,default:function(){}}},data:function(){return{$map:null,$zoom:null,$mainGeoLayer:null}},mounted:function(){var e=this,t=e.mapConfig,a=e.type,o=e.maxZoom,r=e.minZoom,i=e.zoom,n=e.layers,s=e.center,e=e.extent;this.$data.$map=Util.createMap(__assign({config:{target:this.$refs.ref},type:a,maxZoom:o,zoom:i,minZoom:r,center:s,extent:e,layers:n},t)),this.$data.$zoom=this.$data.$map.getView().getZoom()},methods:{addMainGeoJSONLayer:function(e){var t=e.geoJSONStyle,e=e.geoJSONData,a=t.stroke,o=t.fill,r=t.text;this.$data.$mainGeoLayer=this.addGeoLayer(e,function(){return new Style({fill:new Fill(__assign({},o)),stroke:new Stroke(__assign({},a)),text:new Text(__assign(__assign({},r),{fill:new Fill({color:r.color}),overflow:!0}))})})},addGeoLayer:function(e,t,a){return void 0===a&&(a=0),Util.addGeoLayer(this.$data.$map,e,t,a)},addWindLayer:function(e,t,a){return void 0===a&&(a=0),Util.addWindLayer(this.$data.$map,e,t,a)},addDataLayer:function(e){return Util.addVectorLayer(this.$data.$map,e)},addHoverListener:function(e,t,a){Util.addHoverListener(this.$data.$map,e,t,a)},addZoomListener:function(a){var o=this;this.$data.$map.on("moveend",function(e){var t=o.$data.$map.getView().getZoom();t!==o.$data.$zoom&&a(t),o.$data.$zoom=t})},addClickListener:function(e,t,a){Util.addClickListener(this.$data.$map,e,t,a,this.setCursor)},addOverlay:function(e){return Util.addOverlay(this.$data.$map,e)},setOverlayState:function(e,t){Util.setOverlayState(e,t)},setCursor:function(e){this.$data.$map.getTarget().style.cursor=e},clear:function(){for(var e=this.$data.$map.getLayers(),t=1;t<e.getLength();t++)this.$data.$map.removeLayer(e.item(t))},getMap:function(){return this.$data.$map}},render:function(e){return e("div",{class:selectorPrefix,ref:"ref"})}};export default OLMap;
//# sourceMappingURL=olmap.js.map
