import { IHeatMapData } from './types';
declare const _default: import("vue").DefineComponent<{}, {}, IHeatMapData, {}, {
    addLayer(heatMapLayerConfig?: {}): void;
    getHeatMapLayer(): any;
}, import("vue").DefineComponent<{
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
}, unknown, import("./types").IOLMapData, {}, {
    addMainGeoJSONLayer({ geoJSONStyle, geoJSONData }: any): void;
    addGeoLayer(geojsonData: any, getStyleConfig: any, zIndex?: number): import("./geolayer").default;
    addWindLayer(data: any, config: any, zIndex?: number): import("./windlayer").default;
    addDataLayer(zIndex: any): {
        vectorLayer: import("ol/layer/Vector").default<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>;
        vectorSource: import("ol/source/Vector").default<import("ol/geom/Geometry").default>;
    };
    addHoverListener(layer: any, hit: (arg0: any) => void, unHit: (arg0?: undefined) => void): void;
    addZoomListener(handler: (arg0: any) => void): void;
    addClickListener(layer: any, hit: ((feature: any) => void) | undefined, unHit: ((feature: any) => void) | undefined): void;
    addOverlay(config: any): import("ol/Overlay").default;
    setOverlayState(overlay: {
        setPosition: (arg0: any) => void;
    }, state: any): void;
    setCursor(style: any): void;
    clear(): void;
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
}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
