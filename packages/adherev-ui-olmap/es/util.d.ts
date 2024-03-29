import Feature from 'ol/Feature.js';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay.js';
import { Geometry, LineString, Point } from 'ol/geom';
import Circle from 'ol/geom/Circle';
import Polygon from 'ol/geom/Polygon';
import Draw from 'ol/interaction/Draw.js';
import Modify from 'ol/interaction/Modify';
import { Heatmap as HeatmapLayer, Vector as VectorLayer } from 'ol/layer.js';
import { Vector as VectorSource } from 'ol/source.js';
import GeoLayer from './geolayer';
import WindLayer from './windlayer';
declare const _default: {
    SHOWBASESTATION_MINZOOM: number;
    /**
     * createMap - 创建地图
     * @param Config
     */
    createMap(Config: {
        config: any;
        type?: string | undefined;
        maxZoom: any;
        zoom: any;
        minZoom: any;
        center: any;
        extent: any;
        layers: any;
        fitZoom?: any;
    }): Map;
    /**
     * setOverlayState - 给overlay赋予状态
     * @param overlay
     * @param point
     */
    setOverlayState: (overlay: {
        setPosition: (arg0: any) => void;
    }, point: any) => void;
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
    addClickListener: (mapInstance: {
        forEachFeatureAtPixel: (arg0: any, arg1: {
            (feature: any, layer: any): boolean;
            (_: any, layer: any): boolean;
        }) => void;
        un: (arg0: string, arg1: {
            (evt: any): void;
            (evt: any): void;
        }) => void;
        on: (arg0: string, arg1: {
            (evt: any): void;
            (evt: any): void;
        }) => void;
    }, listeningLayer: any, hitCallback: ((feature: any) => void) | undefined, unHitCallback: ((feature: any) => void) | undefined, setCursor: (arg0: string) => void) => void;
    /**
     * addHoverListener - 给地图实例上的指定layer添加hover监听者
     * @param {Object} mapInstance map实例对象
     * @param {Object} listeningLayer 监听的layer
     * @param {Function=} hitCallback 可选 选中的回调
     * @param {Function=} unHitCallback 可选 未选中的回调
     */
    addHoverListener: (mapInstance: {
        forEachFeatureAtPixel: (arg0: any, arg1: (feature: any, layer: any) => boolean) => void;
        getTarget: () => {
            (): any;
            new (): any;
            style: {
                (): any;
                new (): any;
                cursor: string;
            };
        };
        un: (arg0: string, arg1: (evt: any) => void) => void;
        getEventPixel: (arg0: any) => any;
        on: (arg0: string, arg1: (evt: any) => void) => void;
    }, listeningLayer: any, hitCallback: (arg0: any) => void, unHitCallback: (arg0?: undefined) => void) => void;
    /**
     * addGeoLayer - 给地图实例添加一个geojson格式的 VectorLayer
     * @param {Object} mapInstance map实例对象
     * @param geojsonData
     * @param {Function=} getStyleConfig 获取该geoJSON的样式
     * @param {number=} zIndex 该 Layer 的层级 可选, 默认为0
     * @returns geoLayer 此次生成的layer
     */
    addGeoLayer: (mapInstance: {
        addLayer: (arg0: GeoLayer) => void;
    }, geojsonData: any, getStyleConfig?: () => void, zIndex?: number) => GeoLayer;
    /**
     * addWindLayer - 添加风场层
     * @param mapInstance
     * @param data
     * @param config
     * @param zIndex
     * @return WindLayer
     */
    addWindLayer: (mapInstance: {
        addLayer: (arg0: any) => void;
    }, data: any, config: any, zIndex?: number) => WindLayer;
    /**
     * addVectorLayer - 添加一个向量层
     * @param map
     * @param zIndex
     */
    addVectorLayer(map: {
        addLayer: (arg0: VectorLayer<VectorSource<Geometry>>) => void;
    }, zIndex: any): {
        vectorLayer: VectorLayer<VectorSource<Geometry>>;
        vectorSource: VectorSource<Geometry>;
    };
    /**
     * createHeatMapLayer - 添加一个热力层
     * @param layoutConfig
     */
    createHeatMapLayer(layoutConfig: any): {
        layer: HeatmapLayer;
        vectorSource: VectorSource<Geometry>;
    };
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
    drawCircle({ center, radius, color, strokeColor, strokeWidth, zIndex, id, propertys, }: {
        center: any;
        radius: any;
        color?: string | undefined;
        strokeColor?: string | undefined;
        strokeWidth?: number | undefined;
        zIndex?: any;
        id?: any;
        propertys?: {} | undefined;
    }): Feature<Circle>;
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
    drawPolygon({ points, color, strokeColor, strokeWidth, zIndex, id, propertys, }: {
        points: any;
        color?: string | undefined;
        strokeColor?: string | undefined;
        strokeWidth?: number | undefined;
        zIndex?: any;
        id?: any;
        propertys?: {} | undefined;
    }): Feature<Polygon>;
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
    drawCirclePoint({ id, pos, fillOpt, strokeOpt, radius, textOpt, zIndex, text, propertys, }: {
        id: any;
        pos: any;
        fillOpt?: {
            color: string;
        } | undefined;
        strokeOpt?: {
            width: number;
            color: string;
        } | undefined;
        radius?: number | undefined;
        textOpt?: {} | undefined;
        zIndex?: number | undefined;
        text?: string | undefined;
        propertys?: {} | undefined;
    }): Feature<Point>;
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
    drawRegularShapePoint({ id, pos, fillOpt, strokeOpt, text, textOpt, zIndex, propertys, ...others }: {
        [x: string]: any;
        id: any;
        pos: any;
        fillOpt?: {
            color: string;
        } | undefined;
        strokeOpt?: {
            width: number;
            color: string;
        } | undefined;
        text?: string | undefined;
        textOpt?: {} | undefined;
        zIndex?: number | undefined;
        propertys?: {} | undefined;
    }): Feature<Point>;
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
    drawImagePoint({ id, pos, zIndex, src, color, opacity, scale, anchor, rotation, offset, offsetOrigin, size, text, textOpt, propertys, }: any): Feature<any>;
    /**
     * createRegularPolygonCurve - 扇形
     * @param origin 圆心
     * @param radius 半径
     * @param sides 边数
     * @param r 弧度
     * @param angel 方向角(以y周围0)(可以自定义自己的x周一样)
     * @return {Polygon}
     */
    createRegularPolygonCurve(origin: number[], radius: number, sides: number, r: number, angel: number): any;
    /**
     * removeFeature - 删除一个feature
     * @param vectorSource
     * @param feature
     */
    removeFeature(vectorSource: {
        removeFeature: (arg0: any) => void;
    }, feature: any): void;
    /**
     * removeAllFeature - 删除所有feature
     * @param vectorSource
     */
    removeAllFeature(vectorSource: any): void;
    /**
     * removeAllOverlay - 删除所有覆盖物
     * @param map
     */
    removeAllOverlay(map: {
        getOverlays: () => {
            (): any;
            new (): any;
            clear: {
                (): void;
                new (): any;
            };
        };
    }): void;
    /**
     * setMapCenterAnimate - 移动地图到指定位置(动画)
     * @param map
     * @param point
     * @param duration
     */
    setMapCenterAnimate({ map, point, duration }: any): void;
    /**
     * drawLine - 创建线
     * @param points
     * @param width
     * @param color
     * @param lineCap
     * @param lineJoin
     */
    drawLine({ points, width, color, lineCap, lineJoin }: any): Feature<LineString>;
    /**
     * createInteraction
     * @param map
     * @param config
     */
    createInteraction(map: any, config: any): Draw;
    /**
     * polygonInteraction - 框多边形
     * @param map
     * @param vectorSource
     * @param onDrawStart
     * @param onDrawEnd
     */
    polygonInteraction({ map, freehand, vectorSource, onDrawEnd, ...other }: any): any;
    /**
     * circleInteraction - 框圆形
     * @param map
     * @param vectorSource
     * @param onDrawStart
     * @param onDrawEnd
     */
    circleInteraction({ map, vectorSource, onDrawEnd, ...other }: any): any;
    /**
     * boxInteraction - 框线框
     * @param map
     * @param vectorSource
     * @param onDrawEnd
     * @param other
     */
    boxInteraction({ map, vectorSource, onDrawEnd, ...other }: any): any;
    /**
     * linStringInteraction - 线路
     * @param map
     * @param vectorSource
     * @param onDrawStart
     * @param onDrawEnd
     */
    linStringInteraction({ map, freehand, vectorSource, onDrawEnd, ...other }: any): any;
    /**
     * createModifyInteraction
     * @param map
     * @param vectorSource
     * @param onModifyEnd
     * @return {Modify|Modify}
     */
    createModifyInteraction({ map, vectorSource, onModifyEnd }: any): Modify;
    /**
     * removeInteraction - 移除interaction
     * @param map
     * @param interaction
     */
    removeInteraction(map: any, interaction: any): void;
    /**
     * removeInteractionAll - 移除所有的Interaction
     * @param map
     */
    removeInteractionAll(map: any): void;
    /**
     * mapFit - 地图自适应
     * @param extent
     * @param option
     * @param map
     */
    mapFit(extent: never[] | undefined, option: {} | undefined, map: any): void;
    /**
     * addArrowsSource - 为一系列点创建箭头
     * @param points
     * @param color
     * @param icon
     * @return {Array}
     */
    addArrowsSource({ points, color, icon }: any): any[];
    /**
     * addArrowsOverlay
     * @param map
     * @param parentDom
     * @param color
     * @param points
     */
    addArrowsOverlay(map: any, parentDom: HTMLElement, color: any, points: any[]): void;
    /**
     * addOverlay - 添加覆盖物
     * @param map
     * @param config
     * @param div
     */
    addOverlay: (map: any, config: any, div?: HTMLDivElement | null) => Overlay;
    /**
     * getRad
     * @param d
     */
    getRad(d: number): number;
    /**
     * getExtentByCoordinates - 获取coordinates中的矩形数据
     * @param coordinates
     * @return {*}
     */
    getExtentByCoordinates(coordinates: string | any[]): number[];
    /**
     * getExtentByVectorSource - 获取vectorSource中的矩形数据
     * @param vectorSource
     * @param type
     * @return {*}
     */
    getExtentByVectorSource(vectorSource: any, type?: string): any;
    /**
     * getCectorSourceCoordinates - 获取向量层中的所有点
     * @param vectorSource
     * @param type
     */
    getCectorSourceCoordinates(vectorSource: any, type?: string): number[][];
    /**
     * getCenterByCoordinates - 获取source中所有Point的中心点
     * @param vectorSource
     * @param type
     * @return {{centerLon: number, centerLat: number}}
     */
    getCenterByCoordinates(vectorSource: {
        getFeatures: () => any[];
    }, type?: string): any;
    /**
     * getCenterByPoints - 获取一系列点中的中心点
     * @param points
     * @return {{centerLon: number, centerLat: number}}
     */
    getCenterByPoints(points: string | any[]): {
        centerLon: number;
        centerLat: number;
    };
    /**
     * getPointsExtent - 获取一些列点的矩形范围(左上角[x,y]，右下角[x,y])
     * @param points
     * @return {{centerLon: number, centerLat: number}}
     */
    getPointsExtent(points: string | any[]): {
        leftTop: number[];
        rightBottom: number[];
    };
    /**
     * getFlatternDistance - 计算连个经纬度之间的距离(m)
     * approx distance between two points on earth ellipsoid
     * @param {Object} lat1
     * @param {Object} lng1
     * @param {Object} lat2
     * @param {Object} lng2
     */
    getFlatternDistance(lat1: number, lng1: number, lat2: number, lng2: number): number;
    /**
     * wrapLon
     * @param value
     */
    wrapLon(value: number): number;
    /**
     * getMapExtent - 获取地图的矩形范围
     * @param map
     */
    getMapExtent(map: any): false | {
        lon: any;
        lat: number;
    }[];
    /**
     * getFeaturesInExtent
     * @param map
     * @param feature
     */
    getFeaturesInExtent(map: any, feature: any): any;
    /**
     * getLayersCount - 获取地图的Layers数量
     * @param map
     * @return {number}
     */
    getLayersCount(map: any): any;
    rgb(): string;
    color16(): string;
    getLineColor(index: number): any;
    downLoadMap(map: any): void;
};
export default _default;
