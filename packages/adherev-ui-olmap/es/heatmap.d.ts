import { IHeatMapData } from './types';
declare const _default: import("vue").DefineComponent<{}, {}, IHeatMapData, {}, {
    addLayer(heatMapLayerConfig?: {}): void;
    getHeatMapLayer(): any;
}, import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, unknown, import("./types").IOLMapData, {}, {
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
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {
    [x: number]: string;
} | {}>, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
