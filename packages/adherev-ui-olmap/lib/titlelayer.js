"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTileWMSTileLayer = exports.getWMTSTileLayer = exports.getXYZTileLayer = exports.getOSMTileLayer = exports.getTileWMS = exports.getWMTS = exports.getXYZ = exports.getOSM = void 0;
var tslib_1 = require("tslib");
var Tile_1 = (0, tslib_1.__importDefault)(require("ol/layer/Tile"));
var source_js_1 = require("ol/source.js");
/**
 * getOSM - OSM的resource
 * @param options
 * @return {OSM}
 */
function getOSM(options) {
    return new source_js_1.OSM(options);
}
exports.getOSM = getOSM;
/**
 * getXYZ
 * @param options
 * @return {XYZ}
 */
function getXYZ(options) {
    return new source_js_1.XYZ(options);
}
exports.getXYZ = getXYZ;
/**
 * getTileWMS
 * @param options
 * @return {TileWMS}
 */
function getTileWMS(options) {
    return new source_js_1.TileWMS(options);
}
exports.getTileWMS = getTileWMS;
/**
 * getWMTS
 * @param options
 * @return {WMTS}
 */
function getWMTS(options) {
    return new source_js_1.WMTS(options);
}
exports.getWMTS = getWMTS;
/**
 * getOSMTileLayer
 * @param sourceOptions
 * @param options
 */
function getOSMTileLayer(_a) {
    var _b = _a === void 0 ? {
        sourceOptions: {},
        options: {},
    } : _a, _c = _b.sourceOptions, sourceOptions = _c === void 0 ? {} : _c, _d = _b.options, options = _d === void 0 ? {} : _d;
    return new Tile_1.default((0, tslib_1.__assign)({ source: getOSM(sourceOptions || {}) }, (options || {})));
}
exports.getOSMTileLayer = getOSMTileLayer;
/**
 * getXYZTileLayer
 * @param sourceOptions
 * @param options
 */
function getXYZTileLayer(_a) {
    var _b = _a === void 0 ? {
        sourceOptions: {},
        options: {},
    } : _a, _c = _b.sourceOptions, sourceOptions = _c === void 0 ? {} : _c, _d = _b.options, options = _d === void 0 ? {} : _d;
    return new Tile_1.default((0, tslib_1.__assign)({ source: getXYZ(sourceOptions || {}) }, (options || {})));
}
exports.getXYZTileLayer = getXYZTileLayer;
/**
 * getWMTSTileLayer
 * @param sourceOptions
 * @param options
 */
function getWMTSTileLayer(_a) {
    var _b = _a === void 0 ? {
        sourceOptions: {},
        options: {},
    } : _a, _c = _b.sourceOptions, sourceOptions = _c === void 0 ? {} : _c, _d = _b.options, options = _d === void 0 ? {} : _d;
    return new Tile_1.default((0, tslib_1.__assign)({ source: getWMTS(sourceOptions || {}) }, (options || {})));
}
exports.getWMTSTileLayer = getWMTSTileLayer;
/**
 * getTileWMSTileLayer
 * @param sourceOptions
 * @param options
 */
function getTileWMSTileLayer(_a) {
    var _b = _a === void 0 ? {
        sourceOptions: {},
        options: {},
    } : _a, _c = _b.sourceOptions, sourceOptions = _c === void 0 ? {} : _c, _d = _b.options, options = _d === void 0 ? {} : _d;
    return new Tile_1.default((0, tslib_1.__assign)({ source: getTileWMS(sourceOptions || {}) }, (options || {})));
}
exports.getTileWMSTileLayer = getTileWMSTileLayer;
//# sourceMappingURL=titlelayer.js.map