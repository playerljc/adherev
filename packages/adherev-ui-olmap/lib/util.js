"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.symbol.js"),require("core-js/modules/es.array.concat.js"),require("core-js/modules/es.string.anchor.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.number.to-fixed.js"),require("core-js/modules/es.array.sort.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.regexp.to-string.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var uuid_1=require("uuid"),Map_1=__importDefault(require("ol/Map")),Circle_1=__importDefault(require("ol/geom/Circle")),Polygon_1=__importDefault(require("ol/geom/Polygon")),LinearRing_1=__importDefault(require("ol/geom/LinearRing")),geom_1=require("ol/geom"),View_1=__importDefault(require("ol/View")),Feature_js_1=__importDefault(require("ol/Feature.js")),Text_1=__importDefault(require("ol/style/Text")),Overlay_js_1=__importDefault(require("ol/Overlay.js")),proj_js_1=require("ol/proj.js"),extent_js_1=require("ol/extent.js"),coordinate_1=require("ol/coordinate"),layer_js_1=require("ol/layer.js"),source_js_1=require("ol/source.js"),style_js_1=require("ol/style.js"),Draw_js_1=__importStar(require("ol/interaction/Draw.js")),Modify_1=__importDefault(require("ol/interaction/Modify")),control_js_1=require("ol/control.js"),Zoom_js_1=__importDefault(require("ol/control/Zoom.js")),MousePosition_js_1=__importDefault(require("ol/control/MousePosition.js")),ScaleLine_js_1=__importDefault(require("ol/control/ScaleLine.js")),adherev_util_resource_1=__importDefault(require("@baifendian/adherev-util-resource")),TitleLayer=__importStar(require("./titlelayer")),geolayer_1=__importDefault(require("./geolayer")),windlayer_1=__importDefault(require("./windlayer")),EARTH_RADIUS=adherev_util_resource_1.default.Dict.value.ResourceGisEarthRadius.value,DEFAULT_COLOE="#1788F3";function getMinZoom(e){e=e.clientWidth;return Math.ceil(Math.LOG2E*Math.log(e/256))}function transformLonLat(e){return proj_js_1.transform(e,adherev_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value,adherev_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value)}exports.default={SHOWBASESTATION_MINZOOM:5,createMap:function(e){var t=e.config,r=e.fitZoom,o=e.zoom,n=void 0===o?getMinZoom(t.target)||3:o,a=e.minZoom,i=void 0===a?getMinZoom(t.target)||3:a,u=e.maxZoom,o=void 0===u?adherev_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value:u,a=e.center,u=void 0===a?adherev_util_resource_1.default.Dict.value.ResourceGisXinbeiquCenterPoint.value:a,a=e.extent,s=void 0===a?[]:a,e=e.layers,e=void 0===e?[TitleLayer.getOSMTileLayer()]:e,n={center:proj_js_1.fromLonLat(u),minZoom:i,maxZoom:o,zoom:n};s&&s.length&&(n.extent=proj_js_1.transformExtent(extent_js_1.boundingExtent(s),adherev_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value,adherev_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value));var l=new Map_1.default(__assign(__assign({},t),{controls:control_js_1.defaults({attributionOptions:{collapsible:!1}}).extend([new Zoom_js_1.default,new ScaleLine_js_1.default,new MousePosition_js_1.default({coordinateFormat:coordinate_1.createStringXY(5),projection:adherev_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value})]),pixelRatio:1,view:new View_1.default(n),layers:e}));return s&&s.length&&setTimeout(function(){var e;e=r||(e=[].concat(proj_js_1.fromLonLat(s[0])).concat(proj_js_1.fromLonLat(s[1])),e=l.getView().getResolutionForExtent(e),l.getView().getZoomForResolution(e)),l.getView().setZoom(e)},100),l},setOverlayState:function(e,t){e.setPosition(t)},addClickListener:function(){var e,i;return function(t,r,o,n,a){void 0===o&&(o=function(e){}),void 0===n&&(n=function(e){});e&&t.un("click",e),i&&t.un("pointermove",i),e=function(e){e.dragging||(e=e.pixel,t.forEachFeatureAtPixel(e,function(e,t){return(t===r?o:n)(e),!0}))},i=function(e){e.dragging||t.forEachFeatureAtPixel(e.pixel,function(e,t){return a(t===r?"pointer":""),!0})},t.on("click",e),t.on("pointermove",i)}}(),addHoverListener:function(){var e;return function(o,n,a,i){e&&o.un("pointermove",e),e=function(e){var r;e.dragging||(e=o.getEventPixel(e.originalEvent),r=!1,o.forEachFeatureAtPixel(e,function(e,t){return r=!0,t===n?(o.getTarget().style.cursor="pointer",a(e)):(o.getTarget().style.cursor="",i(e)),!0}),r||i())},o.on("pointermove",e)}}(),addGeoLayer:function(e,t,r,o){o=new geolayer_1.default(t,r=void 0===r?function(){}:r,o=void 0===o?0:o);return e.addLayer(o),o},addWindLayer:function(e,t,r,o){void 0===o&&(o=0);r=new windlayer_1.default(t,r);return e.addLayer(r),r},addVectorLayer:function(e,t){var r=new source_js_1.Vector,t=new layer_js_1.Vector({source:r,zIndex:t});return e.addLayer(t),{vectorLayer:t,vectorSource:r}},createHeatMapLayer:function(e){var t=new source_js_1.Vector;return{layer:new layer_js_1.Heatmap(__assign({source:t,gradient:["#00005c","#020288","#0202c0","#0ff","#0f0","#ff0","#f00"],weight:function(){return 1},shadow:500,blur:15,radius:20},e)),vectorSource:t}},drawCircle:function(e){var t=e.center,r=e.radius,o=e.color,n=void 0===o?"rgba(23,136,243,.2)":o,a=e.strokeColor,i=void 0===a?DEFAULT_COLOE:a,u=e.strokeWidth,o=void 0===u?2:u,a=e.zIndex,u=void 0===a?adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value:a,a=e.id,a=void 0===a?uuid_1.v4():a,e=e.propertys,e=void 0===e?{}:e,e=new Feature_js_1.default(__assign({zIndex:u,geometry:new Circle_1.default(t,r)},e));return e.setId(a),e.setStyle(new style_js_1.Style({fill:new style_js_1.Fill({color:n}),stroke:new style_js_1.Stroke({width:o,color:i})})),e},drawPolygon:function(e){var t=e.points,r=e.color,o=void 0===r?"rgba(23,136,243,.2)":r,n=e.strokeColor,a=void 0===n?DEFAULT_COLOE:n,i=e.strokeWidth,r=void 0===i?2:i,n=e.zIndex,i=void 0===n?adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value:n,n=e.id,n=void 0===n?uuid_1.v4():n,e=e.propertys,e=void 0===e?{}:e,e=new Feature_js_1.default(__assign({zIndex:i,geometry:new Polygon_1.default(t)},e));return e.setId(n),e.setStyle(new style_js_1.Style({fill:new style_js_1.Fill({color:o}),stroke:new style_js_1.Stroke({width:r,color:a})})),e},drawCirclePoint:function(e){var t=e.id,r=e.pos,o=e.fillOpt,n=void 0===o?{color:"rgba(23,136,243,.2)"}:o,a=e.strokeOpt,i=void 0===a?{width:2,color:DEFAULT_COLOE}:a,u=e.radius,s=void 0===u?10:u,o=e.textOpt,a=void 0===o?{}:o,u=e.zIndex,o=void 0===u?1:u,u=e.text,u=void 0===u?"":u,e=e.propertys,e=void 0===e?{}:e,e=new Feature_js_1.default(__assign({zIndex:adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,geometry:new geom_1.Point(r)},e));return e.setId(t),e.setStyle(new style_js_1.Style({image:new style_js_1.Circle({fill:new style_js_1.Fill(n),stroke:new style_js_1.Stroke(i),radius:s}),text:new Text_1.default(__assign({text:u,textAlign:"center",fill:new style_js_1.Fill({color:"#fff"})},a)),zIndex:o})),e},drawRegularShapePoint:function(e){var t=e.id,r=e.pos,o=e.fillOpt,n=void 0===o?{color:"rgba(23,136,243,.2)"}:o,a=e.strokeOpt,i=void 0===a?{width:2,color:DEFAULT_COLOE}:a,u=e.text,s=void 0===u?"":u,o=e.textOpt,a=void 0===o?{}:o,u=e.zIndex,o=void 0===u?1:u,u=e.propertys,u=void 0===u?{}:u,e=__rest(e,["id","pos","fillOpt","strokeOpt","text","textOpt","zIndex","propertys"]),u=new Feature_js_1.default(__assign({zIndex:adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,geometry:new geom_1.Point(r)},u));return u.setId(t),u.setStyle(new style_js_1.Style({image:new style_js_1.RegularShape(__assign({fill:new style_js_1.Fill(n),stroke:new style_js_1.Stroke(i)},e)),text:new Text_1.default(__assign({text:s,textAlign:"center",fill:new style_js_1.Fill({color:"#fff"})},a)),zIndex:o})),u},drawImagePoint:function(e){var t=e.id,r=e.pos,o=e.zIndex,n=void 0===o?1:o,a=e.src,i=e.color,u=e.opacity,s=e.scale,l=e.anchor,c=e.rotation,d=void 0===c?0:c,_=e.offset,f=void 0===_?[0,0]:_,g=e.offsetOrigin,o=e.size,c=e.text,_=void 0===c?"":c,c=e.textOpt,c=void 0===c?{}:c,e=e.propertys,e=void 0===e?{}:e,e=new Feature_js_1.default(__assign({zIndex:adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,geometry:new geom_1.Point(r)},e));return e.setId(t),e.setStyle(new style_js_1.Style({image:new style_js_1.Icon({color:i,src:a,anchor:l,opacity:u,scale:s,rotation:d,offset:f,offsetOrigin:g,size:o}),fill:new style_js_1.Fill({color:"#fff"}),text:new Text_1.default(__assign({text:_,textAlign:"center",fill:new style_js_1.Fill({color:"#fff"})},c)),zIndex:n})),e},createRegularPolygonCurve:function(e,t,r,o,n){var a=360-o,i=Math.PI*(1/r-.5);a&&(i+=a/180*Math.PI);for(var u=[],s=0;s<r;++s){var l=i+2*(s*((360-a)/360))*Math.PI/r,c=e[0]+t*Math.cos(l),l=e[1]+t*Math.sin(l);u.push([c,l])}0!=a&&u.push(e);var d=new LinearRing_1.default(u);d.rotate(Math.PI-(n-o/2)/180*Math.PI,e);o=new Polygon_1.default([u]),d=d.A;return o.A=d,o},removeFeature:function(e,t){e.removeFeature(t)},removeAllFeature:function(e){e.clear()},removeAllOverlay:function(e){e.getOverlays().clear()},setMapCenterAnimate:function(e){var t=e.map,r=e.point,e=e.duration,e=void 0===e?600:e;t.getView().animate({center:r,duration:e})},drawLine:function(e){var t=e.points,r=e.width,o=e.color,n=e.lineCap,n=void 0===n?"square":n,e=e.lineJoin,e=void 0===e?"round":e,t=new Feature_js_1.default({geometry:new geom_1.LineString(t)});return t.setStyle(new style_js_1.Style({stroke:new style_js_1.Stroke({width:r,color:o,lineCap:n,lineJoin:e})})),t},createInteraction:function(e,t){var r=t.onDrawStart,t=new Draw_js_1.default(t);return t.on("drawstart",function(e){r&&r(e)}),e.addInteraction(t),t},polygonInteraction:function(e){var a=e.map,t=e.freehand,r=void 0===t||t,t=e.vectorSource,i=e.onDrawEnd,e=__rest(e,["map","freehand","vectorSource","onDrawEnd"]),e=this.createInteraction(a,__assign({source:t,type:"Polygon",freehand:r},e));return e.on("drawend",function(e){e.feature.setId(uuid_1.v4());var t=e.feature.getGeometry(),r=[],o=t.getCoordinates()[0].map(function(e){return r.push(transformLonLat(e)),e}),n=a.getView().getCenter();i&&i({e:e,geometry:t,coordinates:o,lonlats:r,centerp:n,transformCenterp:transformLonLat(n)})}),e},circleInteraction:function(e){var t=e.map,r=e.vectorSource,n=e.onDrawEnd,e=__rest(e,["map","vectorSource","onDrawEnd"]),e=this.createInteraction(t,__assign({source:r,type:"Circle",freehand:!0},e));return e.on("drawend",function(e){var t=e.feature.getGeometry(),r=t.getRadius(),o=t.getCenter();e.feature.setId(uuid_1.v4()),n&&n({e:e,geometry:t,radius:r,center:o,transformCenter:transformLonLat(o)})}),e},boxInteraction:function(e){var n=e.map,t=e.vectorSource,a=e.onDrawEnd,e=__rest(e,["map","vectorSource","onDrawEnd"]),e=this.createInteraction(n,__assign({source:t,type:"Circle",freehand:!0,geometryFunction:Draw_js_1.createBox()},e));return e.on("drawend",function(e){e.feature.setId(uuid_1.v4());var t=e.feature.getGeometry(),r=t.getCoordinates()[0].map(function(e){return e}),o=n.getView().getCenter();a&&a({e:e,geometry:t,coordinates:r,centerp:o})}),e},linStringInteraction:function(e){var i=e.map,t=e.freehand,r=void 0===t||t,t=e.vectorSource,u=e.onDrawEnd,e=__rest(e,["map","freehand","vectorSource","onDrawEnd"]),e=this.createInteraction(i,__assign({source:t,type:"LineString",freehand:r},e));return e.on("drawend",function(e){e.feature.setId(uuid_1.v4());var t=e.feature.getGeometry(),r=[],o=t.getCoordinates().map(function(e){return r.push(transformLonLat(e)),e}),n=i.getView().getCenter(),a=t.getLength().toFixed(3);u&&u({e:e,geometry:t,coordinates:o,lonlats:r,centerp:n,mileage:a,transformCenterp:transformLonLat(n)})}),e},createModifyInteraction:function(e){var t=e.map,r=e.vectorSource,o=e.onModifyEnd,r=new Modify_1.default({source:r});return r.on("modifyend",function(e){var t=e.features.getArray(),t=t[t.length-1].getGeometry();o({e:e,geometry:t})}),t.addInteraction(r),r},removeInteraction:function(e,t){e.removeInteraction(t)},removeInteractionAll:function(e){e.getInteractions().clear()},mapFit:function(e,t,r){void 0===t&&(t={}),0!==(e=void 0===e?[]:e).length&&r.getView().fit(e,__assign({padding:[40,40,40,40],constrainResolution:!1,nearest:!0,duration:200},t))},addArrowsSource:function(e){for(var t=e.points,r=e.color,o=e.icon,n=[],a=0;a<t.length-1;a++){var i=t[a],u=t[a+1],s=u[0]-i[0],i=u[1]-i[1],s=Math.atan2(i,s),u=new Feature_js_1.default({geometry:new geom_1.Point(u)});u.setStyle(new style_js_1.Style({image:new style_js_1.Icon({color:r,src:o,anchor:[.5,.5],rotateWithView:!0,rotation:-s})})),n.push(u)}return n},addArrowsOverlay:function(e,t,r,o){for(var n=0;n<o.length-1;n++){var a=o[n],i=o[n+1],u=i[0]-a[0],a=i[1]-a[1],a=Math.atan2(a,u)*(180/Math.PI),u=document.createElement("div");u.className="fa fa-caret-right overleayArrowPoint",u.style.transform="rotate("+-a+"deg)",u.style.color=r,t.appendChild(u),this.addOverlay(e,i,u)}},addOverlay:function(e,t,r){t=new Overlay_js_1.default(t);return e.addOverlay(t),t},getRad:function(e){return e*Math.PI/180},getExtentByCoordinates:function(e){if(0===e.length)return[];if(1===e.length)return[].concat(e[0],e[0]);for(var t=[],r=[],o=0;o<e.length;o++){var n=e[o];t.push(n[0]),r.push(n[1])}return t.sort(function(e,t){return e<t?-1:t<e?1:0}),r.sort(function(e,t){return e<t?-1:t<e?1:0}),[t[0],r[0],t[t.length-1],r[r.length-1]]},getExtentByVectorSource:function(e,t){t=this.getCectorSourceCoordinates(e,t=void 0===t?"Point":t);return this.getExtentByCoordinates(t)},getCectorSourceCoordinates:function(e,o){void 0===o&&(o="Point");var n=[];return e.getFeatures().filter(function(e){return e.getGeometry().getType()===o}).map(function(e){var t,r=e.getGeometry();"Circle"===o?(e=r.getExtent(),n.push([e[0],e[1]]),n.push([e[2],e[3]])):"Point"===o?(t=r.getCoordinates(),n.push(t)):(t=r.getCoordinates(),n=n.concat(t))}),n},getCenterByCoordinates:function(e,o){void 0===o&&(o="Point");var n=[];return e.getFeatures().filter(function(e){return e.getGeometry().getType()===o}).map(function(e){var t,r=e.getGeometry();"Circle"===o?(e=r.getExtent(),n.push([e[0],e[1]]),n.push([e[2],e[3]])):"Point"===o?(t=r.getCoordinates(),n.push(t)):(t=r.getCoordinates(),n=n.concat(t))}),this.getCenterByPoints(n)},getCenterByPoints:function(e){for(var t=[],r=[],o=0;o<e.length;o++){var n=proj_js_1.transform(e[o],adherev_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value,adherev_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value);t.push(n[0]),r.push(n[1])}return{centerLon:Math.min.apply(Math,t)+(Math.max.apply(Math,t)-Math.min.apply(Math,t))/2,centerLat:Math.min.apply(Math,r)+(Math.max.apply(Math,r)-Math.min.apply(Math,r))/2}},getPointsExtent:function(e){for(var t=[],r=[],o=0;o<e.length;o++){var n=proj_js_1.transform(e[o],adherev_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value,adherev_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value);t.push(n[0]),r.push(n[1])}return{leftTop:[Math.min.apply(Math,t),Math.min.apply(Math,r)],rightBottom:[Math.max.apply(Math,t),Math.max.apply(Math,r)]}},getFlatternDistance:function(e,t,r,o){var n=this.getRad((e+r)/2),a=this.getRad((e-r)/2),i=this.getRad((t-o)/2),e=EARTH_RADIUS,r=Math.sin(a),t=Math.sin(i),o=Math.sin(n),a=(r*=r)*(1-(t*=t))+(1-(o*=o))*t,i=(1-r)*(1-t)+o*t,n=Math.atan(Math.sqrt(a/i)),t=Math.sqrt(a*i)/n;return 2*n*e*(1+1/298.257*((3*t-1)/2/i*o*(1-r)-(3*t+1)/2/a*(1-o)*r))},wrapLon:function(e){return e-360*Math.floor((e+180)/360)},getMapExtent:function(e){if(!e)return!1;var t=e.getView().calculateExtent(e.getSize()),r=proj_js_1.toLonLat(extent_js_1.getBottomLeft(t)),o=proj_js_1.toLonLat(extent_js_1.getTopRight(t)),e=o[1],t=this.wrapLon(o[0]),o=this.wrapLon(r[0]),r=r[1];return[{lon:o,lat:e},{lon:t,lat:e},{lon:t,lat:r},{lon:o,lat:r},{lon:o,lat:e}]},getFeaturesInExtent:function(e,t){t=t.getGeometry().getExtent();return e.getLayers().getArray()[1].getSource().getFeaturesInExtent(t)},getLayersCount:function(e){return e.getLayers().getLength()},rgb:function(){return"("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")"},color16:function(){var e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),r=Math.floor(256*Math.random());return"#"+e.toString(16)+t.toString(16)+r.toString(16)},getLineColor:function(e){return 0<=e&&e<=9?["red","green","blue","yellow","gray","#0000cc","#99ffff","#000000","#003333","#ff6600"][e]:this.color16()},downLoadMap:function(e){e.once("postcompose",function(e){var t=e.context.canvas.toDataURL(),r=document.createElement("a"),e=new MouseEvent("click");r.download="map",r.href=t,r.dispatchEvent(e)}),e.renderSync()}};
//# sourceMappingURL=util.js.map
