"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_util_resource_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-resource"));
var GeoJSON_1 = (0, tslib_1.__importDefault)(require("ol/format/GeoJSON"));
var layer_1 = require("ol/layer");
var source_1 = require("ol/source");
/**
 * GeoLayer
 * @class GeoLayer
 * @classdesc openlayers中的geojson的layer
 */
var GeoLayer = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(GeoLayer, _super);
    /**
     * constructor
     * @param geoJsonObject - 数据
     * @param onStyle - onStyle
     * @param zIndex
     */
    function GeoLayer(geoJsonObject, onStyle, zIndex) {
        var _this = this;
        var geoSource = new source_1.Vector({
            features: new GeoJSON_1.default({
                dataProjection: adherev_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value,
                featureProjection: adherev_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value,
            }).readFeatures(geoJsonObject),
        });
        _this = _super.call(this, { source: geoSource, style: onStyle, zIndex: zIndex }) || this;
        _this.vectorSource = geoSource;
        return _this;
    }
    return GeoLayer;
}(layer_1.Vector));
exports.default = GeoLayer;
//# sourceMappingURL=geolayer.js.map