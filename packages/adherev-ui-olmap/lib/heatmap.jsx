"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_1 = require("vue");
var olmap_1 = (0, tslib_1.__importDefault)(require("./olmap"));
var util_1 = (0, tslib_1.__importDefault)(require("./util"));
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-olmap-heatmap',
    data: function () {
        return {
            $vectorSource: null,
            $layer: null,
        };
    },
    mixins: [olmap_1.default],
    methods: {
        addLayer: function (heatMapLayerConfig) {
            if (heatMapLayerConfig === void 0) { heatMapLayerConfig = {}; }
            var _a = util_1.default.createHeatMapLayer(heatMapLayerConfig || {}), layer = _a.layer, vectorSource = _a.vectorSource;
            var $data = this.$data;
            $data.$layer = layer;
            $data.$vectorSource = vectorSource;
            $data.$map.addLayer(layer);
        },
        getHeatMapLayer: function () {
            return this.$data.$layer;
        },
    },
});
//# sourceMappingURL=heatmap.jsx.map