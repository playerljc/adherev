"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_util_resource_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-resource"));
var style_js_1 = require("ol/style.js");
var vue_1 = require("vue");
var constent_1 = (0, tslib_1.__importDefault)(require("./constent"));
var util_1 = (0, tslib_1.__importDefault)(require("./util"));
var selectorPrefix = 'adherev-ui-olmap';
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-olmap',
    props: {
        type: {
            type: String,
            default: constent_1.default.MAP_TYPE_ADMINISTRATIVE,
            validator: function (val) {
                return [constent_1.default.MAP_TYPE_ADMINISTRATIVE, constent_1.default.MAP_TYPE_SATELLITE].indexOf(val) !== -1;
            },
        },
        mapConfig: {
            type: Object,
            default: function () { },
        },
        maxZoom: {
            type: [String, Number],
            default: adherev_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value,
        },
        zoom: {
            type: [String, Number],
            default: adherev_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value,
        },
        fitZoom: {
            type: [String, Number],
            default: adherev_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value,
        },
        minZoom: {
            type: [String, Number],
            default: adherev_util_resource_1.default.Dict.value.ResourceGisMapMinZoom.value,
        },
        center: {
            type: Array,
            default: function () { return adherev_util_resource_1.default.Dict.value.ResourceGisXinbeiquCenterPoint.value; },
        },
        extent: {
            type: Array,
            default: function () { return []; } /*Resource.Dict.value.ResourceGisXinbeiquMapExtent.value*/,
        },
        layers: {
            type: Array,
            default: function () { return undefined; },
        },
    },
    data: function () {
        return {
            $map: null,
            $zoom: null,
            $mainGeoLayer: null,
        };
    },
    mounted: function () {
        var _a = this, mapConfig = _a.mapConfig, type = _a.type, maxZoom = _a.maxZoom, minZoom = _a.minZoom, zoom = _a.zoom, layers = _a.layers, center = _a.center, extent = _a.extent, $data = _a.$data, $refs = _a.$refs;
        $data.$map = util_1.default.createMap((0, tslib_1.__assign)({ config: {
                target: $refs.ref,
            }, type: type, maxZoom: maxZoom, zoom: zoom, minZoom: minZoom, center: center, extent: extent, layers: layers }, mapConfig));
        this.$data.$zoom = $data.$map.getView().getZoom();
    },
    methods: {
        /**
         * addMainGeoJSONLayer - 添加主的geoJSON层
         * @param geoJSONStyle
         * @param geoJSONData
         */
        addMainGeoJSONLayer: function (_a) {
            var geoJSONStyle = _a.geoJSONStyle, geoJSONData = _a.geoJSONData;
            var stroke = geoJSONStyle.stroke, fill = geoJSONStyle.fill, text = geoJSONStyle.text; // Dict.value['feature-style-xinbeiqu'];
            this.$data.$mainGeoLayer = this.addGeoLayer(geoJSONData /* Dict.value.mainGeoJSONData */, function () {
                return new style_js_1.Style({
                    fill: new style_js_1.Fill((0, tslib_1.__assign)({}, fill)),
                    stroke: new style_js_1.Stroke((0, tslib_1.__assign)({}, stroke)),
                    text: new style_js_1.Text((0, tslib_1.__assign)((0, tslib_1.__assign)({}, text), { fill: new style_js_1.Fill({ color: text.color }), overflow: true })),
                });
            });
        },
        /**
         * 添加GeoJSONLayer
         * @param geojsonData
         * @param getStyleConfig
         * @param zIndex
         */
        addGeoLayer: function (geojsonData, getStyleConfig, zIndex) {
            if (zIndex === void 0) { zIndex = 0; }
            return util_1.default.addGeoLayer(this.$data.$map, geojsonData, getStyleConfig, zIndex);
        },
        /**
         * addWindLayer - 添加风场层
         * @param data
         * @param config
         * @param zIndex
         */
        addWindLayer: function (data, config, zIndex) {
            if (zIndex === void 0) { zIndex = 0; }
            return util_1.default.addWindLayer(this.$data.$map, data, config, zIndex);
        },
        /**
         * 添加数据层
         * @return {*|{vectorLayer, vectorSource}}
         */
        addDataLayer: function (zIndex) {
            return util_1.default.addVectorLayer(this.$data.$map, zIndex);
        },
        /**
         * 给地图实例添加 hover监听者
         */
        addHoverListener: function (layer, hit, unHit) {
            util_1.default.addHoverListener(this.$data.$map, layer, hit, unHit);
        },
        /**
         * 添加缩放事件
         * @param handler
         */
        addZoomListener: function (handler) {
            var _this = this;
            var $data = this.$data;
            this.$data.$map.on('moveend', function () {
                var zoom = $data.$map.getView().getZoom();
                if (zoom !== $data.$zoom) {
                    handler(zoom);
                }
                _this.$data.$zoom = zoom;
            });
        },
        /**
         * 给地图实例添加 单击监听者
         */
        addClickListener: function (layer, hit, unHit) {
            util_1.default.addClickListener(this.$data.$map, layer, hit, unHit, this.setCursor);
        },
        /**
         * 添加一个Overlay对象, 一般来说只有弹窗marker 故仅实例化一个
         */
        addOverlay: function (config) {
            var $data = this.$data;
            return util_1.default.addOverlay($data.$map, config);
        },
        /**
         * 给Overlay对象 配置状态
         */
        setOverlayState: function (overlay, state) {
            util_1.default.setOverlayState(overlay, state);
        },
        /**
         * 将此处鼠标点样式
         */
        setCursor: function (style) {
            var $data = this.$data;
            $data.$map.getTarget().style.cursor = style;
        },
        /**
         * 清空所有层，除了底图和常州geoJSOn层
         */
        clear: function () {
            var $data = this.$data;
            var layers = $data.$map.getLayers();
            for (var i = 1; i < layers.getLength(); i++) {
                this.$data.$map.removeLayer(layers.item(i));
            }
        },
        /**
         * getMap
         * @return {*|Map}
         */
        getMap: function () {
            return this.$data.$map;
        },
    },
    render: function () {
        // @ts-ignore
        return <div class={selectorPrefix} ref="ref"/>;
    },
});
//# sourceMappingURL=olmap.jsx.map