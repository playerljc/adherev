import{__extends}from"tslib";import GeoJSON from"ol/format/GeoJSON";import{Vector as VectorLayer}from"ol/layer";import{Vector as VectorSource}from"ol/source";import Resource from"@baifendian/adherev-util-resource";var GeoLayer=function(a){function e(e,r,o){var t=this,e=new VectorSource({features:new GeoJSON({dataProjection:Resource.Dict.value.ResourceGisEpsg4326.value,featureProjection:Resource.Dict.value.ResourceGisEpsg3857.value}).readFeatures(e)});return(t=a.call(this,{source:e,style:r,zIndex:o})||this).vectorSource=e,t}return __extends(e,a),e}(VectorLayer);export default GeoLayer;
//# sourceMappingURL=geolayer.js.map
