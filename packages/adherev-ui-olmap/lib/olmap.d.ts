import { IOLMapData } from './types';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
        validator(val: string): boolean;
    };
    mapConfig: {
        type: ObjectConstructor;
        default: () => void;
    };
    maxZoom: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    zoom: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    fitZoom: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    minZoom: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    center: {
        type: ArrayConstructor;
        default: () => any;
    };
    extent: {
        type: ArrayConstructor;
        default: () => never[];
    };
    layers: {
        type: ArrayConstructor;
        default: () => undefined;
    };
}, unknown, IOLMapData, {}, {
    /**
     * addMainGeoJSONLayer - 添加主的geoJSON层
     * @param geoJSONStyle
     * @param geoJSONData
     */
    addMainGeoJSONLayer({ geoJSONStyle, geoJSONData }: any): void;
    /**
     * 添加GeoJSONLayer
     * @param geojsonData
     * @param getStyleConfig
     * @param zIndex
     */
    addGeoLayer(geojsonData: any, getStyleConfig: any, zIndex?: number): import("./geolayer").default;
    /**
     * addWindLayer - 添加风场层
     * @param data
     * @param config
     * @param zIndex
     */
    addWindLayer(data: any, config: any, zIndex?: number): import("./windlayer").default;
    /**
     * 添加数据层
     * @return {*|{vectorLayer, vectorSource}}
     */
    addDataLayer(zIndex: any): {
        vectorLayer: import("ol/layer/Vector").default<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>;
        vectorSource: import("ol/source/Vector").default<import("ol/geom/Geometry").default>;
    };
    /**
     * 给地图实例添加 hover监听者
     */
    addHoverListener(layer: any, hit: (arg0: any) => void, unHit: (arg0?: undefined) => void): void;
    /**
     * 添加缩放事件
     * @param handler
     */
    addZoomListener(handler: (arg0: any) => void): void;
    /**
     * 给地图实例添加 单击监听者
     */
    addClickListener(layer: any, hit: ((feature: any) => void) | undefined, unHit: ((feature: any) => void) | undefined): void;
    /**
     * 添加一个Overlay对象, 一般来说只有弹窗marker 故仅实例化一个
     */
    addOverlay(config: any): import("ol/Overlay").default;
    /**
     * 给Overlay对象 配置状态
     */
    setOverlayState(overlay: {
        setPosition: (arg0: any) => void;
    }, state: any): void;
    /**
     * 将此处鼠标点样式
     */
    setCursor(style: any): void;
    /**
     * 清空所有层，除了底图和常州geoJSOn层
     */
    clear(): void;
    /**
     * getMap
     * @return {*|Map}
     */
    getMap(): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator(val: string): boolean;
    };
    mapConfig: {
        type: ObjectConstructor;
        default: () => void;
    };
    maxZoom: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    zoom: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    fitZoom: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    minZoom: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    center: {
        type: ArrayConstructor;
        default: () => any;
    };
    extent: {
        type: ArrayConstructor;
        default: () => never[];
    };
    layers: {
        type: ArrayConstructor;
        default: () => undefined;
    };
}>>, {
    center: unknown[];
    layers: unknown[];
    fitZoom: string | number;
    zoom: string | number;
    minZoom: string | number;
    maxZoom: string | number;
    extent: unknown[];
    type: string;
    mapConfig: Record<string, any>;
}>;
export default _default;
