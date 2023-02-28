import { App, Plugin } from 'vue';
import AnimationManager from './animationmanager';
import GeoLayer from './geolayer';
import HeatMap from './heatmap';
import OLMap from './olmap';
import * as TitleLayer from './titlelayer';
import Util from './util';
declare const _default: {
    OLMap: import("vue").DefineComponent<{
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
        addGeoLayer(geojsonData: any, getStyleConfig: any, zIndex?: number): GeoLayer;
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
    }>;
    HeatMap: import("vue").DefineComponent<{}, {}, import("./types").IHeatMapData, {}, {
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
        addGeoLayer(geojsonData: any, getStyleConfig: any, zIndex?: number): GeoLayer;
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
    AnimationManager: typeof AnimationManager;
    GeoLayer: typeof GeoLayer;
    TitleLayer: typeof TitleLayer;
    Util: {
        SHOWBASESTATION_MINZOOM: number;
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
        }): import("ol/Map").default;
        setOverlayState: (overlay: {
            setPosition: (arg0: any) => void;
        }, point: any) => void;
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
        addGeoLayer: (mapInstance: {
            addLayer: (arg0: GeoLayer) => void;
        }, geojsonData: any, getStyleConfig?: () => void, zIndex?: number) => GeoLayer;
        addWindLayer: (mapInstance: {
            addLayer: (arg0: any) => void;
        }, data: any, config: any, zIndex?: number) => import("./windlayer").default;
        addVectorLayer(map: {
            addLayer: (arg0: import("ol/layer/Vector").default<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>) => void;
        }, zIndex: any): {
            vectorLayer: import("ol/layer/Vector").default<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>;
            vectorSource: import("ol/source/Vector").default<import("ol/geom/Geometry").default>;
        };
        createHeatMapLayer(layoutConfig: any): {
            layer: import("ol/layer/Heatmap").default;
            vectorSource: import("ol/source/Vector").default<import("ol/geom/Geometry").default>;
        };
        drawCircle({ center, radius, color, strokeColor, strokeWidth, zIndex, id, propertys, }: {
            center: any;
            radius: any;
            color?: string | undefined;
            strokeColor?: string | undefined;
            strokeWidth?: number | undefined;
            zIndex?: any;
            id?: any;
            propertys?: {} | undefined;
        }): import("ol/Feature").default<import("ol/geom/Circle").default>;
        drawPolygon({ points, color, strokeColor, strokeWidth, zIndex, id, propertys, }: {
            points: any;
            color?: string | undefined;
            strokeColor?: string | undefined;
            strokeWidth?: number | undefined;
            zIndex?: any;
            id?: any;
            propertys?: {} | undefined;
        }): import("ol/Feature").default<import("ol/geom/Polygon").default>;
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
        }): import("ol/Feature").default<import("ol/geom/Point").default>;
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
        }): import("ol/Feature").default<import("ol/geom/Point").default>;
        drawImagePoint({ id, pos, zIndex, src, color, opacity, scale, anchor, rotation, offset, offsetOrigin, size, text, textOpt, propertys, }: any): import("ol/Feature").default<any>;
        createRegularPolygonCurve(origin: number[], radius: number, sides: number, r: number, angel: number): any;
        removeFeature(vectorSource: {
            removeFeature: (arg0: any) => void;
        }, feature: any): void;
        removeAllFeature(vectorSource: any): void;
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
        setMapCenterAnimate({ map, point, duration }: any): void;
        drawLine({ points, width, color, lineCap, lineJoin }: any): import("ol/Feature").default<import("ol/geom/LineString").default>;
        createInteraction(map: any, config: any): import("ol/interaction/Draw").default;
        polygonInteraction({ map, freehand, vectorSource, onDrawEnd, ...other }: any): any;
        circleInteraction({ map, vectorSource, onDrawEnd, ...other }: any): any;
        boxInteraction({ map, vectorSource, onDrawEnd, ...other }: any): any;
        linStringInteraction({ map, freehand, vectorSource, onDrawEnd, ...other }: any): any;
        createModifyInteraction({ map, vectorSource, onModifyEnd }: any): import("ol/interaction/Modify").default;
        removeInteraction(map: any, interaction: any): void;
        removeInteractionAll(map: any): void;
        mapFit(extent: never[] | undefined, option: {} | undefined, map: any): void;
        addArrowsSource({ points, color, icon }: any): any[];
        addArrowsOverlay(map: any, parentDom: HTMLElement, color: any, points: any[]): void;
        addOverlay: (map: any, config: any, div?: HTMLDivElement | null | undefined) => import("ol/Overlay").default;
        getRad(d: number): number;
        getExtentByCoordinates(coordinates: string | any[]): number[];
        getExtentByVectorSource(vectorSource: any, type?: string): any;
        getCectorSourceCoordinates(vectorSource: any, type?: string): number[][];
        getCenterByCoordinates(vectorSource: {
            getFeatures: () => any[];
        }, type?: string): any;
        getCenterByPoints(points: string | any[]): {
            centerLon: number;
            centerLat: number;
        };
        getPointsExtent(points: string | any[]): {
            leftTop: number[];
            rightBottom: number[];
        };
        getFlatternDistance(lat1: number, lng1: number, lat2: number, lng2: number): number;
        wrapLon(value: number): number;
        getMapExtent(map: any): false | {
            lon: any;
            lat: number;
        }[];
        getFeaturesInExtent(map: any, feature: any): any;
        getLayersCount(map: any): any;
        rgb(): string;
        color16(): string;
        getLineColor(index: number): any;
        downLoadMap(map: any): void;
    };
    install: (app: App<any>) => App<any>;
} & Plugin & {
    readonly OLMap: typeof OLMap;
    readonly HeatMap: typeof HeatMap;
    readonly AnimationManager: typeof AnimationManager;
    readonly GeoLayer: typeof GeoLayer;
    readonly TitleLayer: typeof TitleLayer;
    readonly Util: typeof Util;
};
export default _default;
