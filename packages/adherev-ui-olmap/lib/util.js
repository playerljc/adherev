"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_util_resource_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-resource"));
var control_js_1 = require("ol/control.js");
var MousePosition_js_1 = (0, tslib_1.__importDefault)(require("ol/control/MousePosition.js"));
var ScaleLine_js_1 = (0, tslib_1.__importDefault)(require("ol/control/ScaleLine.js"));
var Zoom_js_1 = (0, tslib_1.__importDefault)(require("ol/control/Zoom.js"));
var coordinate_1 = require("ol/coordinate");
var extent_js_1 = require("ol/extent.js");
var Feature_js_1 = (0, tslib_1.__importDefault)(require("ol/Feature.js"));
var geom_1 = require("ol/geom");
var Circle_1 = (0, tslib_1.__importDefault)(require("ol/geom/Circle"));
var LinearRing_1 = (0, tslib_1.__importDefault)(require("ol/geom/LinearRing"));
var Polygon_1 = (0, tslib_1.__importDefault)(require("ol/geom/Polygon"));
var Draw_js_1 = (0, tslib_1.__importStar)(require("ol/interaction/Draw.js"));
var Modify_1 = (0, tslib_1.__importDefault)(require("ol/interaction/Modify"));
var layer_js_1 = require("ol/layer.js");
var Map_1 = (0, tslib_1.__importDefault)(require("ol/Map"));
var Overlay_js_1 = (0, tslib_1.__importDefault)(require("ol/Overlay.js"));
var proj_js_1 = require("ol/proj.js");
var source_js_1 = require("ol/source.js");
var style_js_1 = require("ol/style.js");
var Text_1 = (0, tslib_1.__importDefault)(require("ol/style/Text"));
var View_1 = (0, tslib_1.__importDefault)(require("ol/View"));
// @ts-ignore
var uuid_1 = require("uuid");
var geolayer_1 = (0, tslib_1.__importDefault)(require("./geolayer"));
var TitleLayer = (0, tslib_1.__importStar)(require("./titlelayer"));
// @ts-ignore
var windlayer_1 = (0, tslib_1.__importDefault)(require("./windlayer"));
var EARTH_RADIUS = adherev_util_resource_1.default.Dict.value.ResourceGisEarthRadius.value; // 单位M
var DEFAULT_COLOE = '#1788F3';
/**
 * getMinZoom
 * @param target
 */
function getMinZoom(target) {
    var width = target.clientWidth;
    return Math.ceil(Math.LOG2E * Math.log(width / 256));
}
/**
 * transformLonLat
 * @param point
 */
function transformLonLat(point) {
    return (0, proj_js_1.transform)(point, adherev_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value, adherev_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value);
}
// @ts-ignore
// @ts-ignore
// @ts-ignore
exports.default = {
    SHOWBASESTATION_MINZOOM: 5,
    /**
     * createMap - 创建地图
     * @param Config
     */
    createMap: function (Config) {
        var config = Config.config, fitZoom = Config.fitZoom, _a = Config.zoom, zoom = _a === void 0 ? getMinZoom(config.target) || 3 : _a, _b = Config.minZoom, minZoom = _b === void 0 ? getMinZoom(config.target) || 3 : _b, _c = Config.maxZoom, maxZoom = _c === void 0 ? adherev_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value : _c, _d = Config.center, center = _d === void 0 ? adherev_util_resource_1.default.Dict.value.ResourceGisXinbeiquCenterPoint.value : _d, _e = Config.extent /*Resource.Dict.value.ResourceGisXinbeiquMapExtent.value*/, extent = _e === void 0 ? [] : _e /*Resource.Dict.value.ResourceGisXinbeiquMapExtent.value*/, _f = Config.layers, layers = _f === void 0 ? [TitleLayer.getOSMTileLayer()] : _f;
        var viewConfig = {
            center: (0, proj_js_1.fromLonLat)(center),
            minZoom: minZoom,
            maxZoom: maxZoom,
            zoom: zoom,
        };
        if (extent && extent.length) {
            viewConfig.extent = (0, proj_js_1.transformExtent)((0, extent_js_1.boundingExtent)(extent), adherev_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value, adherev_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value);
        }
        var map = new Map_1.default((0, tslib_1.__assign)((0, tslib_1.__assign)({}, config), { controls: (0, control_js_1.defaults)({
                attributionOptions: {
                    collapsible: false,
                },
            }).extend([
                new Zoom_js_1.default(),
                new ScaleLine_js_1.default(),
                new MousePosition_js_1.default({
                    coordinateFormat: (0, coordinate_1.createStringXY)(5),
                    projection: adherev_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value,
                }),
            ]), pixelRatio: 1, view: new View_1.default(viewConfig), layers: layers }));
        // console.log('viewConfig', viewConfig);
        if (extent && extent.length) {
            // console.log('setTimeout');
            setTimeout(function () {
                var zoom;
                if (fitZoom) {
                    zoom = fitZoom;
                }
                else {
                    var mapExtentTransform = (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], (0, proj_js_1.fromLonLat)(extent[0]), true), (0, proj_js_1.fromLonLat)(extent[1]), true);
                    var resolution = map.getView().getResolutionForExtent(mapExtentTransform);
                    zoom = map.getView().getZoomForResolution(resolution);
                    // zoom = 11.5;
                }
                map.getView().setZoom(zoom);
            }, 100);
        }
        return map;
    },
    /**
     * setOverlayState - 给overlay赋予状态
     * @param overlay
     * @param point
     */
    setOverlayState: function (overlay, point) {
        overlay.setPosition(/* fromLonLat(point) */ point);
    },
    /**
     * addClickListener
     * 给地图实例添加 click 监听者
     * 此方法仅监听了单击
     * @param {Object} mapInstance map实例对象
     * @param {Object} listeningLayer 监听的layer
     * @param {Function=} hitCallback 可选 选中的回调
     * @param {Function=} unHitCallback 可选 未选中的回调
     * @param {Function} setCursor 设置鼠标滑过当前图层的鼠标样式
     */
    addClickListener: (function () {
        var onClick;
        var onPointerMove;
        return function (mapInstance, listeningLayer, hitCallback, unHitCallback, setCursor) {
            if (hitCallback === void 0) { hitCallback = function (feature) { }; }
            if (unHitCallback === void 0) { unHitCallback = function (feature) { }; }
            var displayFeatureInfo = function (pixel) {
                mapInstance.forEachFeatureAtPixel(pixel, function (feature, layer) {
                    if (layer === listeningLayer) {
                        hitCallback(feature);
                    }
                    else {
                        unHitCallback(feature);
                    }
                    return true;
                });
            };
            if (onClick) {
                mapInstance.un('click', onClick);
            }
            if (onPointerMove) {
                mapInstance.un('pointermove', onPointerMove);
            }
            onClick = function (evt) {
                if (evt.dragging)
                    return;
                displayFeatureInfo(evt.pixel);
            };
            onPointerMove = function (evt) {
                if (evt.dragging)
                    return;
                mapInstance.forEachFeatureAtPixel(evt.pixel, function (_, layer) {
                    setCursor(layer === listeningLayer ? 'pointer' : '');
                    return true;
                });
            };
            mapInstance.on('click', onClick);
            mapInstance.on('pointermove', onPointerMove);
        };
    })(),
    /**
     * addHoverListener - 给地图实例上的指定layer添加hover监听者
     * @param {Object} mapInstance map实例对象
     * @param {Object} listeningLayer 监听的layer
     * @param {Function=} hitCallback 可选 选中的回调
     * @param {Function=} unHitCallback 可选 未选中的回调
     */
    addHoverListener: (function () {
        var onPointermove;
        return function (mapInstance, listeningLayer, hitCallback, unHitCallback) {
            var displayFeatureInfo = function (pixel) {
                // 是否在像素中
                var inPixel = false;
                mapInstance.forEachFeatureAtPixel(pixel, function (feature, layer) {
                    inPixel = true;
                    if (layer === listeningLayer) {
                        mapInstance.getTarget().style.cursor = 'pointer';
                        hitCallback(feature);
                    }
                    else {
                        mapInstance.getTarget().style.cursor = '';
                        unHitCallback(feature);
                    }
                    return true;
                });
                if (!inPixel) {
                    unHitCallback();
                }
            };
            if (onPointermove) {
                mapInstance.un('pointermove', onPointermove);
            }
            onPointermove = function (evt) {
                if (evt.dragging)
                    return;
                var pixel = mapInstance.getEventPixel(evt.originalEvent);
                displayFeatureInfo(pixel);
            };
            mapInstance.on('pointermove', onPointermove);
        };
    })(),
    /**
     * addGeoLayer - 给地图实例添加一个geojson格式的 VectorLayer
     * @param {Object} mapInstance map实例对象
     * @param geojsonData
     * @param {Function=} getStyleConfig 获取该geoJSON的样式
     * @param {number=} zIndex 该 Layer 的层级 可选, 默认为0
     * @returns geoLayer 此次生成的layer
     */
    addGeoLayer: function (mapInstance, geojsonData, getStyleConfig, zIndex) {
        if (getStyleConfig === void 0) { getStyleConfig = function () { }; }
        if (zIndex === void 0) { zIndex = 0; }
        var geoLayer = new geolayer_1.default(geojsonData, getStyleConfig, zIndex);
        mapInstance.addLayer(geoLayer);
        return geoLayer;
    },
    /**
     * addWindLayer - 添加风场层
     * @param mapInstance
     * @param data
     * @param config
     * @param zIndex
     * @return WindLayer
     */
    addWindLayer: function (mapInstance, data, config, zIndex) {
        if (zIndex === void 0) { zIndex = 0; }
        var windLayer = new windlayer_1.default(data, config);
        mapInstance.addLayer(windLayer);
        return windLayer;
    },
    /**
     * addVectorLayer - 添加一个向量层
     * @param map
     * @param zIndex
     */
    addVectorLayer: function (map, zIndex) {
        var vectorSource = new source_js_1.Vector();
        var vectorLayer = new layer_js_1.Vector({
            source: vectorSource,
            zIndex: zIndex,
        });
        map.addLayer(vectorLayer);
        return {
            vectorLayer: vectorLayer,
            vectorSource: vectorSource,
        };
    },
    /**
     * createHeatMapLayer - 添加一个热力层
     * @param layoutConfig
     */
    createHeatMapLayer: function (layoutConfig) {
        var vectorSource = new source_js_1.Vector();
        var layer = new layer_js_1.Heatmap((0, tslib_1.__assign)({ source: vectorSource, gradient: ['#00005c', '#020288', '#0202c0', '#0ff', '#0f0', '#ff0', '#f00'], weight: function () { return 1; }, shadow: 500, blur: 15, radius: 20 }, layoutConfig));
        // map.addLayer(heatmapLayer);
        return {
            layer: layer,
            vectorSource: vectorSource,
        };
    },
    /**
     * drawCircle - 创建一个圆形
     * @param center
     * @param radius
     * @param color
     * @param strokeColor
     * @param strokeWidth
     * @param zIndex
     * @param id
     * @param propertys
     */
    drawCircle: function (_a) {
        var 
        // @ts-ignore
        center = _a.center, 
        // @ts-ignore
        radius = _a.radius, _b = _a.color, color = _b === void 0 ? 'rgba(23,136,243,.2)' : _b, _c = _a.strokeColor, strokeColor = _c === void 0 ? DEFAULT_COLOE : _c, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 2 : _d, _e = _a.zIndex, zIndex = _e === void 0 ? adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value : _e, _f = _a.id, id = _f === void 0 ? (0, uuid_1.v4)() : _f, _g = _a.propertys, propertys = _g === void 0 ? {} : _g;
        var f = new Feature_js_1.default((0, tslib_1.__assign)({ zIndex: zIndex, geometry: new Circle_1.default(center, radius) }, propertys));
        f.setId(id);
        f.setStyle(new style_js_1.Style({
            fill: new style_js_1.Fill({
                color: color,
            }),
            stroke: new style_js_1.Stroke({
                width: strokeWidth,
                color: strokeColor,
            }),
        }));
        return f;
    },
    /**
     * drawPolygon - 创建一个多边形
     * @param points
     * @param color
     * @param strokeColor
     * @param strokeWidth
     * @param zIndex
     * @param id
     * @param propertys
     */
    drawPolygon: function (_a) {
        var 
        // @ts-ignore
        points = _a.points, _b = _a.color, color = _b === void 0 ? 'rgba(23,136,243,.2)' : _b, _c = _a.strokeColor, strokeColor = _c === void 0 ? DEFAULT_COLOE : _c, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 2 : _d, _e = _a.zIndex, zIndex = _e === void 0 ? adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value : _e, _f = _a.id, id = _f === void 0 ? (0, uuid_1.v4)() : _f, _g = _a.propertys, propertys = _g === void 0 ? {} : _g;
        var f = new Feature_js_1.default((0, tslib_1.__assign)({ zIndex: zIndex, geometry: new Polygon_1.default(points) }, propertys));
        f.setId(id);
        f.setStyle(new style_js_1.Style({
            fill: new style_js_1.Fill({
                color: color,
            }),
            stroke: new style_js_1.Stroke({
                width: strokeWidth,
                color: strokeColor,
            }),
        }));
        return f;
    },
    /**
     * drawCirclePoint - 创建一个圆的点
     * @param id
     * @param pos
     * @param fillOpt
     * @param strokeOpt
     * @param radius
     * @param textOpt
     * @param zIndex
     * @param text
     * @param propertys
     */
    drawCirclePoint: function (_a) {
        var 
        // @ts-ignore
        id = _a.id, 
        // @ts-ignore
        pos = _a.pos, _b = _a.fillOpt, fillOpt = _b === void 0 ? {
            color: 'rgba(23,136,243,.2)',
        } : _b, _c = _a.strokeOpt, strokeOpt = _c === void 0 ? {
            width: 2,
            color: DEFAULT_COLOE,
        } : _c, _d = _a.radius, radius = _d === void 0 ? 10 : _d, _e = _a.textOpt, textOpt = _e === void 0 ? {} : _e, _f = _a.zIndex, zIndex = _f === void 0 ? 1 : _f, _g = _a.text, text = _g === void 0 ? '' : _g, _h = _a.propertys, propertys = _h === void 0 ? {} : _h;
        var point = new Feature_js_1.default((0, tslib_1.__assign)({ zIndex: adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value, geometry: new geom_1.Point(pos) }, propertys));
        point.setId(id);
        point.setStyle(new style_js_1.Style({
            image: new style_js_1.Circle({
                fill: new style_js_1.Fill(fillOpt),
                stroke: new style_js_1.Stroke(strokeOpt),
                radius: radius,
            }),
            text: new Text_1.default((0, tslib_1.__assign)({ text: text, textAlign: 'center', fill: new style_js_1.Fill({
                    color: '#fff',
                }) }, textOpt)),
            zIndex: zIndex,
        }));
        return point;
    },
    /**
     * drawRegularShapePoint - 创建一个多边形的点
     * @param id
     * @param pos
     * @param fillOpt
     * @param strokeOpt
     * @param text
     * @param textOpt
     * @param zIndex
     * @param propertys
     * @param others
     */
    drawRegularShapePoint: function (_a) {
        var 
        // @ts-ignore
        id = _a.id, 
        // @ts-ignore
        pos = _a.pos, _b = _a.fillOpt, fillOpt = _b === void 0 ? { color: 'rgba(23,136,243,.2)' } : _b, _c = _a.strokeOpt, strokeOpt = _c === void 0 ? {
            width: 2,
            color: DEFAULT_COLOE,
        } : _c, 
        // points = 3,
        // radius = 10,
        // radius2 = 0,
        // rotation = Math.PI / 4,
        // angle = 0,
        _d = _a.text, 
        // points = 3,
        // radius = 10,
        // radius2 = 0,
        // rotation = Math.PI / 4,
        // angle = 0,
        text = _d === void 0 ? '' : _d, _e = _a.textOpt, textOpt = _e === void 0 ? {} : _e, _f = _a.zIndex, zIndex = _f === void 0 ? 1 : _f, _g = _a.propertys, propertys = _g === void 0 ? {} : _g, others = (0, tslib_1.__rest)(_a, ["id", "pos", "fillOpt", "strokeOpt", "text", "textOpt", "zIndex", "propertys"]);
        var point = new Feature_js_1.default((0, tslib_1.__assign)({ zIndex: adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value, geometry: new geom_1.Point(pos) }, propertys));
        point.setId(id);
        point.setStyle(new style_js_1.Style({
            image: new style_js_1.RegularShape((0, tslib_1.__assign)({ fill: new style_js_1.Fill(fillOpt), stroke: new style_js_1.Stroke(strokeOpt) }, others)),
            text: new Text_1.default((0, tslib_1.__assign)({ text: text, textAlign: 'center', fill: new style_js_1.Fill({
                    color: '#fff',
                }) }, textOpt)),
            zIndex: zIndex,
        }));
        return point;
    },
    /**
     * drawImagePoint - 创建一个图片的点
     * @param id
     * @param pos
     * @param zIndex
     * @param color
     * @param src
     * @param opacity
     * @param scale
     * @param anchor
     * @param rotation
     * @param offset
     * @param offsetOrigin
     * @param size
     * @param text
     * @param textOpt
     * @param propertys
     */
    drawImagePoint: function (_a) {
        var id = _a.id, pos = _a.pos, _b = _a.zIndex, zIndex = _b === void 0 ? 1 : _b, src = _a.src, color = _a.color, opacity = _a.opacity, scale = _a.scale, anchor = _a.anchor, _c = _a.rotation, rotation = _c === void 0 ? 0 : _c, _d = _a.offset, offset = _d === void 0 ? [0, 0] : _d, offsetOrigin = _a.offsetOrigin, size = _a.size, _e = _a.text, text = _e === void 0 ? '' : _e, _f = _a.textOpt, textOpt = _f === void 0 ? {} : _f, _g = _a.propertys, propertys = _g === void 0 ? {} : _g;
        var point = new Feature_js_1.default((0, tslib_1.__assign)({ zIndex: adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value, geometry: new geom_1.Point(pos) }, propertys));
        point.setId(id);
        point.setStyle(new style_js_1.Style({
            image: new style_js_1.Icon({
                color: color,
                src: src,
                anchor: anchor,
                opacity: opacity,
                scale: scale,
                rotation: rotation,
                offset: offset,
                offsetOrigin: offsetOrigin,
                size: size,
            }),
            fill: new style_js_1.Fill({
                color: '#fff',
            }),
            text: new Text_1.default((0, tslib_1.__assign)({ text: text, textAlign: 'center', fill: new style_js_1.Fill({
                    color: '#fff',
                }) }, textOpt)),
            zIndex: zIndex,
        }));
        return point;
    },
    /**
     * createRegularPolygonCurve - 扇形
     * @param origin 圆心
     * @param radius 半径
     * @param sides 边数
     * @param r 弧度
     * @param angel 方向角(以y周围0)(可以自定义自己的x周一样)
     * @return {Polygon}
     */
    createRegularPolygonCurve: function (origin, radius, sides, r, angel) {
        var rotation = 360 - r;
        var angle = Math.PI * (1 / sides - 1 / 2);
        if (rotation) {
            angle += (rotation / 180) * Math.PI;
        }
        var rotatedAngle;
        var x;
        var y;
        var points = [];
        for (var i = 0; i < sides; ++i) {
            var an = i * ((360 - rotation) / 360);
            rotatedAngle = angle + (an * 2 * Math.PI) / sides;
            x = origin[0] + radius * Math.cos(rotatedAngle);
            y = origin[1] + radius * Math.sin(rotatedAngle);
            points.push([x, y]);
        }
        if (rotation !== 0) {
            points.push(origin);
        }
        var ring = new LinearRing_1.default(points);
        ring.rotate(Math.PI - ((angel - r / 2) / 180) * Math.PI, origin);
        var poy = new Polygon_1.default([points]);
        var a = ring.A;
        poy.A = a;
        return poy;
    },
    /**
     * removeFeature - 删除一个feature
     * @param vectorSource
     * @param feature
     */
    removeFeature: function (vectorSource, feature) {
        vectorSource.removeFeature(feature);
    },
    /**
     * removeAllFeature - 删除所有feature
     * @param vectorSource
     */
    removeAllFeature: function (vectorSource) {
        vectorSource.clear();
    },
    /**
     * removeAllOverlay - 删除所有覆盖物
     * @param map
     */
    removeAllOverlay: function (map) {
        map.getOverlays().clear();
    },
    /**
     * setMapCenterAnimate - 移动地图到指定位置(动画)
     * @param map
     * @param point
     * @param duration
     */
    setMapCenterAnimate: function (_a) {
        var map = _a.map, point = _a.point, _b = _a.duration, duration = _b === void 0 ? 600 : _b;
        map.getView().animate({
            center: point,
            duration: duration,
        });
    },
    /**
     * drawLine - 创建线
     * @param points
     * @param width
     * @param color
     * @param lineCap
     * @param lineJoin
     */
    drawLine: function (_a) {
        var points = _a.points, width = _a.width, color = _a.color, _b = _a.lineCap, lineCap = _b === void 0 ? 'square' : _b, _c = _a.lineJoin, lineJoin = _c === void 0 ? 'round' : _c;
        var line = new Feature_js_1.default({
            geometry: new geom_1.LineString(points),
        });
        line.setStyle(new style_js_1.Style({
            stroke: new style_js_1.Stroke({
                width: width,
                color: color,
                // @ts-ignore
                lineCap: lineCap,
                // @ts-ignore
                lineJoin: lineJoin,
            }),
        }));
        return line;
    },
    /**
     * createInteraction
     * @param map
     * @param config
     */
    createInteraction: function (map, config) {
        var onDrawStart = config.onDrawStart;
        var drawPolygonInteraction = new Draw_js_1.default(config);
        drawPolygonInteraction.on('drawstart', function (e) {
            if (onDrawStart) {
                onDrawStart(e);
            }
        });
        map.addInteraction(drawPolygonInteraction);
        return drawPolygonInteraction;
    },
    /**
     * polygonInteraction - 框多边形
     * @param map
     * @param vectorSource
     * @param onDrawStart
     * @param onDrawEnd
     */
    polygonInteraction: function (_a) {
        var map = _a.map, _b = _a.freehand, freehand = _b === void 0 ? true : _b, vectorSource = _a.vectorSource, onDrawEnd = _a.onDrawEnd, other = (0, tslib_1.__rest)(_a, ["map", "freehand", "vectorSource", "onDrawEnd"]);
        var drawPolygonInteraction = this.createInteraction(map, (0, tslib_1.__assign)({ source: vectorSource, type: 'Polygon', freehand: freehand }, other));
        drawPolygonInteraction.on('drawend', function (e) {
            e.feature.setId((0, uuid_1.v4)());
            var geometry = e.feature.getGeometry();
            var lonlats = [];
            var coordinates = geometry.getCoordinates()[0].map(function (v) {
                lonlats.push(transformLonLat(v));
                return v;
            });
            var centerp = map.getView().getCenter();
            if (onDrawEnd) {
                onDrawEnd({
                    e: e,
                    geometry: geometry,
                    coordinates: coordinates,
                    lonlats: lonlats,
                    centerp: centerp,
                    transformCenterp: transformLonLat(centerp),
                });
            }
        });
        return drawPolygonInteraction;
    },
    /**
     * circleInteraction - 框圆形
     * @param map
     * @param vectorSource
     * @param onDrawStart
     * @param onDrawEnd
     */
    circleInteraction: function (_a) {
        var map = _a.map, vectorSource = _a.vectorSource, onDrawEnd = _a.onDrawEnd, other = (0, tslib_1.__rest)(_a, ["map", "vectorSource", "onDrawEnd"]);
        var drawCircleInteraction = this.createInteraction(map, (0, tslib_1.__assign)({ source: vectorSource, type: 'Circle', freehand: true }, other));
        drawCircleInteraction.on('drawend', function (e) {
            var geometry = e.feature.getGeometry();
            // 半径
            var radius = geometry.getRadius();
            // 中心点
            var center = geometry.getCenter();
            e.feature.setId((0, uuid_1.v4)());
            if (onDrawEnd) {
                onDrawEnd({
                    e: e,
                    geometry: geometry,
                    radius: radius,
                    center: center,
                    transformCenter: transformLonLat(center),
                });
            }
        });
        return drawCircleInteraction;
    },
    /**
     * boxInteraction - 框线框
     * @param map
     * @param vectorSource
     * @param onDrawEnd
     * @param other
     */
    boxInteraction: function (_a) {
        var map = _a.map, vectorSource = _a.vectorSource, onDrawEnd = _a.onDrawEnd, other = (0, tslib_1.__rest)(_a, ["map", "vectorSource", "onDrawEnd"]);
        var drawBoxInteraction = this.createInteraction(map, (0, tslib_1.__assign)({ source: vectorSource, type: 'Circle', freehand: true, geometryFunction: (0, Draw_js_1.createBox)() }, other));
        drawBoxInteraction.on('drawend', function (e) {
            e.feature.setId((0, uuid_1.v4)());
            var geometry = e.feature.getGeometry();
            var coordinates = geometry.getCoordinates()[0].map(function (v) {
                return v;
            });
            var centerp = map.getView().getCenter();
            if (onDrawEnd) {
                onDrawEnd({
                    e: e,
                    geometry: geometry,
                    coordinates: coordinates,
                    centerp: centerp,
                });
            }
        });
        return drawBoxInteraction;
    },
    /**
     * linStringInteraction - 线路
     * @param map
     * @param vectorSource
     * @param onDrawStart
     * @param onDrawEnd
     */
    linStringInteraction: function (_a) {
        var map = _a.map, _b = _a.freehand, freehand = _b === void 0 ? true : _b, vectorSource = _a.vectorSource, onDrawEnd = _a.onDrawEnd, other = (0, tslib_1.__rest)(_a, ["map", "freehand", "vectorSource", "onDrawEnd"]);
        var drawPolygonInteraction = this.createInteraction(map, (0, tslib_1.__assign)({ source: vectorSource, type: 'LineString', freehand: freehand }, other));
        drawPolygonInteraction.on('drawend', function (e) {
            e.feature.setId((0, uuid_1.v4)());
            var geometry = e.feature.getGeometry();
            var lonlats = [];
            var coordinates = geometry.getCoordinates().map(function (v) {
                lonlats.push(transformLonLat(v));
                return v;
            });
            var centerp = map.getView().getCenter();
            var mileage = geometry.getLength().toFixed(3);
            if (onDrawEnd) {
                onDrawEnd({
                    e: e,
                    geometry: geometry,
                    coordinates: coordinates,
                    lonlats: lonlats,
                    centerp: centerp,
                    mileage: mileage,
                    transformCenterp: transformLonLat(centerp),
                });
            }
        });
        return drawPolygonInteraction;
    },
    /**
     * createModifyInteraction
     * @param map
     * @param vectorSource
     * @param onModifyEnd
     * @return {Modify|Modify}
     */
    createModifyInteraction: function (_a) {
        var map = _a.map, vectorSource = _a.vectorSource, onModifyEnd = _a.onModifyEnd;
        var modifyInteraction = new Modify_1.default({
            source: vectorSource,
        });
        modifyInteraction.on('modifyend', function (e) {
            var features = e.features.getArray();
            var geometry = features[features.length - 1].getGeometry();
            onModifyEnd({
                e: e,
                geometry: geometry,
            });
        });
        map.addInteraction(modifyInteraction);
        return modifyInteraction;
    },
    /**
     * removeInteraction - 移除interaction
     * @param map
     * @param interaction
     */
    removeInteraction: function (map, interaction) {
        map.removeInteraction(interaction);
    },
    /**
     * removeInteractionAll - 移除所有的Interaction
     * @param map
     */
    removeInteractionAll: function (map) {
        map.getInteractions().clear();
    },
    /**
     * mapFit - 地图自适应
     * @param extent
     * @param option
     * @param map
     */
    mapFit: function (extent, option, map) {
        // if (extent.length === 0) return;
        // const resolution = map.getView().getResolutionForExtent(extent);
        // if (resolution === 0) return;
        // map.getView().setResolution(resolution);
        // map.getView().fit(extent, Object.assign({
        //   padding: [10, 10, 10, 10],
        //   constrainResolution: true,
        //   nearest: true,
        //   duration: 500,
        // }, option));
        if (extent === void 0) { extent = []; }
        if (option === void 0) { option = {}; }
        if (extent.length === 0)
            return;
        // const resolution = map.getView().getResolutionForExtent(extent);
        // if(resolution === 0) return;
        // map.getView().setResolution(resolution);
        map.getView().fit(extent, (0, tslib_1.__assign)({ padding: [40, 40, 40, 40], constrainResolution: false, nearest: true, duration: 200 }, option));
    },
    /**
     * addArrowsSource - 为一系列点创建箭头
     * @param points
     * @param color
     * @param icon
     * @return {Array}
     */
    addArrowsSource: function (_a) {
        var points = _a.points, color = _a.color, icon = _a.icon;
        var arrows = [];
        for (var i = 0; i < points.length - 1; i++) {
            var start = points[i];
            var end = points[i + 1];
            var dx = end[0] - start[0];
            var dy = end[1] - start[1];
            var rotation = Math.atan2(dy, dx);
            var arrow = new Feature_js_1.default({
                geometry: new geom_1.Point(end),
            });
            arrow.setStyle(new style_js_1.Style({
                image: new style_js_1.Icon({
                    color: color,
                    src: icon,
                    anchor: [0.5, 0.5],
                    rotateWithView: true,
                    rotation: -rotation,
                }),
            }));
            arrows.push(arrow);
        }
        return arrows;
    },
    /**
     * addArrowsOverlay
     * @param map
     * @param parentDom
     * @param color
     * @param points
     */
    addArrowsOverlay: function (map, parentDom, color, points) {
        for (var i = 0; i < points.length - 1; i++) {
            var start = points[i];
            var end = points[i + 1];
            var dx = end[0] - start[0];
            var dy = end[1] - start[1];
            var rotation = Math.atan2(dy, dx);
            var degrees = rotation * (180 / Math.PI);
            var div = document.createElement('div');
            div.className = 'fa fa-caret-right overleayArrowPoint';
            div.style.transform = "rotate(".concat(-degrees, "deg)");
            div.style.color = color;
            parentDom.appendChild(div);
            this.addOverlay(map, end, div);
        }
    },
    /**
     * addOverlay - 添加覆盖物
     * @param map
     * @param config
     * @param div
     */
    addOverlay: function (map, config, div) {
        var overlay = new Overlay_js_1.default(config);
        map.addOverlay(overlay);
        return overlay;
    },
    /**
     * getRad
     * @param d
     */
    getRad: function (d) {
        return (d * Math.PI) / 180.0;
    },
    /**
     * getExtentByCoordinates - 获取coordinates中的矩形数据
     * @param coordinates
     * @return {*}
     */
    getExtentByCoordinates: function (coordinates) {
        if (coordinates.length === 0) {
            return [];
        }
        if (coordinates.length === 1) {
            return [].concat(coordinates[0], coordinates[0]);
        }
        var lons = [];
        var lats = [];
        for (var i = 0; i < coordinates.length; i++) {
            var point = coordinates[i];
            lons.push(point[0]);
            lats.push(point[1]);
        }
        lons.sort(function (t1, t2) {
            if (t1 < t2)
                return -1;
            if (t1 > t2)
                return 1;
            return 0;
        });
        lats.sort(function (t1, t2) {
            if (t1 < t2)
                return -1;
            if (t1 > t2)
                return 1;
            return 0;
        });
        return [lons[0], lats[0], lons[lons.length - 1], lats[lats.length - 1]];
    },
    /**
     * getExtentByVectorSource - 获取vectorSource中的矩形数据
     * @param vectorSource
     * @param type
     * @return {*}
     */
    getExtentByVectorSource: function (vectorSource, type) {
        if (type === void 0) { type = 'Point'; }
        var coordinates = this.getCectorSourceCoordinates(vectorSource, type);
        return this.getExtentByCoordinates(coordinates);
    },
    /**
     * getCectorSourceCoordinates - 获取向量层中的所有点
     * @param vectorSource
     * @param type
     */
    getCectorSourceCoordinates: function (vectorSource, type) {
        if (type === void 0) { type = 'Point'; }
        var points = [];
        vectorSource
            .getFeatures()
            .filter(function (f) {
            var geometry = f.getGeometry();
            return geometry.getType() === type;
        })
            .map(function (f) {
            var geometry = f.getGeometry();
            if (type === 'Circle') {
                var extent = geometry.getExtent();
                points.push([extent[0], extent[1]]);
                points.push([extent[2], extent[3]]);
            }
            else if (type === 'Point') {
                var coordinates = geometry.getCoordinates();
                points.push(coordinates);
            }
            else {
                var coordinates = geometry.getCoordinates();
                points = points.concat(coordinates);
            }
        });
        return points;
    },
    /**
     * getCenterByCoordinates - 获取source中所有Point的中心点
     * @param vectorSource
     * @param type
     * @return {{centerLon: number, centerLat: number}}
     */
    getCenterByCoordinates: function (vectorSource, type) {
        if (type === void 0) { type = 'Point'; }
        // 获取所有点的数据
        var points = [];
        vectorSource
            .getFeatures()
            .filter(function (f) {
            var geometry = f.getGeometry();
            return geometry.getType() === type;
        })
            .map(function (f) {
            var geometry = f.getGeometry();
            if (type === 'Circle') {
                var extent = geometry.getExtent();
                points.push([extent[0], extent[1]]);
                points.push([extent[2], extent[3]]);
            }
            else if (type === 'Point') {
                var coordinates = geometry.getCoordinates();
                points.push(coordinates);
            }
            else {
                var coordinates = geometry.getCoordinates();
                points = points.concat(coordinates);
            }
        });
        return this.getCenterByPoints(points);
    },
    /**
     * getCenterByPoints - 获取一系列点中的中心点
     * @param points
     * @return {{centerLon: number, centerLat: number}}
     */
    getCenterByPoints: function (points) {
        var lons = [];
        var lats = [];
        for (var i = 0; i < points.length; i++) {
            var lonlat = (0, proj_js_1.transform)(points[i], adherev_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value, adherev_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value);
            lons.push(lonlat[0]);
            lats.push(lonlat[1]);
        }
        return {
            centerLon: Math.min.apply(Math, lons) + (Math.max.apply(Math, lons) - Math.min.apply(Math, lons)) / 2,
            centerLat: Math.min.apply(Math, lats) + (Math.max.apply(Math, lats) - Math.min.apply(Math, lats)) / 2,
        };
    },
    /**
     * getPointsExtent - 获取一些列点的矩形范围(左上角[x,y]，右下角[x,y])
     * @param points
     * @return {{centerLon: number, centerLat: number}}
     */
    getPointsExtent: function (points) {
        var lons = [];
        var lats = [];
        for (var i = 0; i < points.length; i++) {
            var lonlat = (0, proj_js_1.transform)(points[i], adherev_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value, adherev_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value);
            lons.push(lonlat[0]);
            lats.push(lonlat[1]);
        }
        var leftTop = [Math.min.apply(Math, lons), Math.min.apply(Math, lats)];
        var rightBottom = [Math.max.apply(Math, lons), Math.max.apply(Math, lats)];
        return {
            leftTop: leftTop,
            rightBottom: rightBottom,
        };
    },
    /**
     * getFlatternDistance - 计算连个经纬度之间的距离(m)
     * approx distance between two points on earth ellipsoid
     * @param {Object} lat1
     * @param {Object} lng1
     * @param {Object} lat2
     * @param {Object} lng2
     */
    getFlatternDistance: function (lat1, lng1, lat2, lng2) {
        var f = this.getRad((lat1 + lat2) / 2);
        var g = this.getRad((lat1 - lat2) / 2);
        var l = this.getRad((lng1 - lng2) / 2);
        var a = EARTH_RADIUS;
        var fl = 1 / 298.257;
        var sg = Math.sin(g);
        var sl = Math.sin(l);
        var sf = Math.sin(f);
        sg *= sg;
        sl *= sl;
        sf *= sf;
        var s = sg * (1 - sl) + (1 - sf) * sl;
        var c = (1 - sg) * (1 - sl) + sf * sl;
        var w = Math.atan(Math.sqrt(s / c));
        var r = Math.sqrt(s * c) / w;
        var d = 2 * w * a;
        var h1 = (3 * r - 1) / 2 / c;
        var h2 = (3 * r + 1) / 2 / s;
        return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
    },
    /**
     * wrapLon
     * @param value
     */
    wrapLon: function (value) {
        var worlds = Math.floor((value + 180) / 360);
        return value - worlds * 360;
    },
    /**
     * getMapExtent - 获取地图的矩形范围
     * @param map
     */
    getMapExtent: function (map) {
        if (!map)
            return false;
        var extent = map.getView().calculateExtent(map.getSize());
        var bottomLeft = (0, proj_js_1.toLonLat)((0, extent_js_1.getBottomLeft)(extent));
        var topRight = (0, proj_js_1.toLonLat)((0, extent_js_1.getTopRight)(extent));
        var top = topRight[1];
        var right = this.wrapLon(topRight[0]);
        var left = this.wrapLon(bottomLeft[0]);
        var bottom = bottomLeft[1];
        return [
            {
                lon: left,
                lat: top,
            },
            {
                lon: right,
                lat: top,
            },
            {
                lon: right,
                lat: bottom,
            },
            {
                lon: left,
                lat: bottom,
            },
            {
                lon: left,
                lat: top,
            },
        ];
    },
    /**
     * getFeaturesInExtent
     * @param map
     * @param feature
     */
    getFeaturesInExtent: function (map, feature) {
        var geometry = feature.getGeometry();
        var extent = geometry.getExtent();
        return map.getLayers().getArray()[1].getSource().getFeaturesInExtent(extent);
    },
    /**
     * getLayersCount - 获取地图的Layers数量
     * @param map
     * @return {number}
     */
    getLayersCount: function (map) {
        return map.getLayers().getLength();
    },
    rgb: function () {
        //rgb颜色随机
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return '(' + r + ',' + g + ',' + b + ')';
    },
    color16: function () {
        //十六进制颜色随机
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    },
    getLineColor: function (index) {
        var palette = [
            'red',
            'green',
            'blue',
            'yellow',
            'gray',
            '#0000cc',
            '#99ffff',
            '#000000',
            '#003333',
            '#ff6600',
        ];
        if (index >= 0 && index <= 9) {
            return palette[index];
        }
        else {
            return this.color16();
        }
    },
    downLoadMap: function (map) {
        map.once('postcompose', function (event) {
            var canvas = event.context.canvas;
            var dataURL = canvas.toDataURL();
            var a = document.createElement('a');
            var e = new MouseEvent('click');
            a.download = 'map';
            a.href = dataURL;
            a.dispatchEvent(e);
        });
        map.renderSync();
        // const exportOptions = {
        //   filter: function(element) {
        //     return element.className ? element.className.indexOf('bfd-list-table-wrapselect') === -1 : true;
        //   }
        // };
        //
        // map.once('postcompose', () => {
        //   toPng(map.getTargetElement(), exportOptions)
        //     .then((dataURL) => {
        //       const a = document.createElement('a');
        //       a.href = dataURL;
        //       document.body.appendChild(a);
        //       a.click();
        //       a.parentElement.removeChild(a);
        //     });
        // });
        // map.renderSync();
    },
};
//# sourceMappingURL=util.js.map