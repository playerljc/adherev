export interface IHeatMapData {
    $vectorSource: any;
    $layer: any;
}
export interface IHeatMapMethods {
    addLayer(heatMapLayerConfig: any): void;
    getHeatMapLayer(): void;
}
export interface IHeatMapSelf extends IHeatMapData, IHeatMapMethods {
    $data: any;
}
export interface IOLMapProps {
    type: string;
    mapConfig: object;
    maxZoom: string | number;
    zoom: string | number;
    fitZoom: string | number;
    minZoom: string | number;
    center: Array<number>;
    extent: Array<number>;
    layers: Array<any>;
}
export interface IOLMapData {
    $map: any | null;
    $zoom: number | null;
    $mainGeoLayer: any | null;
}
export interface IOLMapMethods {
    addMainGeoJSONLayer(prams: {
        geoJSONStyle: any;
        geoJSONData: any;
    }): void;
    addGeoLayer(geojsonData: any, getStyleConfig: any, zIndex: number): void;
    addWindLayer(data: any, config: any, zIndex: number): void;
    addDataLayer(zIndex: number): void;
    addHoverListener(layer: any, hit: any, unHit: any): void;
    addZoomListener(handler: () => {}): void;
    addClickListener(layer: any, hit: any, unHit: any): void;
    addOverlay(config: any): void;
    setOverlayState(overlay: any, state: any): void;
    setCursor(style: any): void;
    clear(): void;
    getMap(): void;
}
export interface IOLMapSelf extends IOLMapProps, IOLMapData, IOLMapMethods {
    $data: any;
    $refs: any;
}
export interface IComponent {
    AnimationManager: any;
    GeoLayer: any;
    TitleLayer: any;
    OLMap: any;
    HeatMap: any;
    Util: any;
    isUse?(): boolean;
    use?(Vue: any): void;
}
