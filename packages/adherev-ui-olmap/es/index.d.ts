import AnimationManager from './animationmanager';
import GeoLayer from './geolayer';
import * as TitleLayer from './titlelayer';
declare const Component: {
    AnimationManager: typeof AnimationManager;
    GeoLayer: typeof GeoLayer;
    TitleLayer: typeof TitleLayer;
    OLMap: {
        name: string;
        props: {
            type: {
                type: StringConstructor;
                default: string;
                validator(val: any): boolean;
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
        };
        data(): {
            $map: null;
            $zoom: null;
            $mainGeoLayer: null;
        };
        mounted(): void;
        methods: {
            addMainGeoJSONLayer({ geoJSONStyle, geoJSONData }: {
                geoJSONStyle: any;
                geoJSONData: any;
            }): void;
            addGeoLayer(geojsonData: any, getStyleConfig: any, zIndex?: number): GeoLayer;
            addWindLayer(data: any, config: any, zIndex?: number): import("./windlayer").default;
            addDataLayer(zIndex: any): {
                vectorLayer: import("ol/layer/Vector").default<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>;
                vectorSource: import("ol/source/Vector").default<import("ol/geom/Geometry").default>;
            };
            addHoverListener(layer: any, hit: any, unHit: any): void;
            addZoomListener(handler: any): void;
            addClickListener(layer: any, hit: any, unHit: any): void;
            addOverlay(config: any): import("ol/Overlay").default;
            setOverlayState(overlay: any, state: any): void;
            setCursor(style: any): void;
            clear(): void;
            getMap(): any;
        };
        render(h: any): any;
    };
    HeatMap: {
        name: string;
        data(): {
            $vectorSource: null;
            $layer: null;
        };
        mixins: {
            name: string;
            props: {
                type: {
                    type: StringConstructor;
                    default: string;
                    validator(val: any): boolean;
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
            };
            data(): {
                $map: null;
                $zoom: null;
                $mainGeoLayer: null;
            };
            mounted(): void;
            methods: {
                addMainGeoJSONLayer({ geoJSONStyle, geoJSONData }: {
                    geoJSONStyle: any;
                    geoJSONData: any;
                }): void;
                addGeoLayer(geojsonData: any, getStyleConfig: any, zIndex?: number): GeoLayer;
                addWindLayer(data: any, config: any, zIndex?: number): import("./windlayer").default;
                addDataLayer(zIndex: any): {
                    vectorLayer: import("ol/layer/Vector").default<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>;
                    vectorSource: import("ol/source/Vector").default<import("ol/geom/Geometry").default>;
                };
                addHoverListener(layer: any, hit: any, unHit: any): void;
                addZoomListener(handler: any): void;
                addClickListener(layer: any, hit: any, unHit: any): void;
                addOverlay(config: any): import("ol/Overlay").default;
                setOverlayState(overlay: any, state: any): void;
                setCursor(style: any): void;
                clear(): void;
                getMap(): any;
            };
            render(h: any): any;
        }[];
        methods: {
            addLayer(heatMapLayerConfig?: {}): void;
            getHeatMapLayer(): any;
        };
    };
    Util: {
        SHOWBASESTATION_MINZOOM: number;
        createMap(Config: any): import("ol/Map").default;
        setOverlayState: (overlay: any, point: any) => void;
        addClickListener: (mapInstance: any, listeningLayer: any, hitCallback: ((feature: any) => void) | undefined, unHitCallback: ((feature: any) => void) | undefined, setCursor: any) => void;
        addHoverListener: (mapInstance: any, listeningLayer: any, hitCallback: any, unHitCallback: any) => void;
        addGeoLayer: (mapInstance: any, geojsonData: any, getStyleConfig?: () => void, zIndex?: number) => GeoLayer;
        addWindLayer: (mapInstance: any, data: any, config: any, zIndex?: number) => import("./windlayer").default;
        addVectorLayer(map: any, zIndex: any): {
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
        drawImagePoint({ id, pos, zIndex, src, color, opacity, scale, anchor, rotation, offset, offsetOrigin, size, text, textOpt, propertys, }: {
            id: any;
            pos: any;
            zIndex?: number | undefined;
            src: any;
            color: any;
            opacity: any;
            scale: any;
            anchor: any;
            rotation?: number | undefined;
            offset?: number[] | undefined;
            offsetOrigin: any;
            size: any;
            text?: string | undefined;
            textOpt?: {} | undefined;
            propertys?: {} | undefined;
        }): import("ol/Feature").default<import("ol/geom/Point").default>;
        createRegularPolygonCurve(origin: any, radius: any, sides: any, r: any, angel: any): import("ol/geom/Polygon").default;
        removeFeature(vectorSource: any, feature: any): void;
        removeAllFeature(vectorSource: any): void;
        removeAllOverlay(map: any): void;
        setMapCenterAnimate({ map, point, duration }: {
            map: any;
            point: any;
            duration?: number | undefined;
        }): void;
        drawLine({ points, width, color, lineCap, lineJoin }: {
            points: any;
            width: any;
            color: any;
            lineCap?: string | undefined;
            lineJoin?: string | undefined;
        }): import("ol/Feature").default<import("ol/geom/LineString").default>;
        createInteraction(map: any, config: any): import("ol/interaction/Draw").default;
        polygonInteraction({ map, freehand, vectorSource, onDrawEnd, ...other }: {
            [x: string]: any;
            map: any;
            freehand?: boolean | undefined;
            vectorSource: any;
            onDrawEnd: any;
        }): any;
        circleInteraction({ map, vectorSource, onDrawEnd, ...other }: {
            [x: string]: any;
            map: any;
            vectorSource: any;
            onDrawEnd: any;
        }): any;
        boxInteraction({ map, vectorSource, onDrawEnd, ...other }: {
            [x: string]: any;
            map: any;
            vectorSource: any;
            onDrawEnd: any;
        }): any;
        linStringInteraction({ map, freehand, vectorSource, onDrawEnd, ...other }: {
            [x: string]: any;
            map: any;
            freehand?: boolean | undefined;
            vectorSource: any;
            onDrawEnd: any;
        }): any;
        createModifyInteraction({ map, vectorSource, onModifyEnd }: {
            map: any;
            vectorSource: any;
            onModifyEnd: any;
        }): import("ol/interaction/Modify").default;
        removeInteraction(map: any, interaction: any): void;
        removeInteractionAll(map: any): void;
        mapFit(extent: never[] | undefined, option: {} | undefined, map: any): void;
        addArrowsSource({ points, color, icon }: {
            points: any;
            color: any;
            icon: any;
        }): any;
        addArrowsOverlay(map: any, parentDom: any, color: any, points: any): void;
        addOverlay: (map: any, config: any) => import("ol/Overlay").default;
        getRad(d: any): number;
        getExtentByCoordinates(coordinates: any): any[];
        getExtentByVectorSource(vectorSource: any, type?: string): any;
        getCectorSourceCoordinates(vectorSource: any, type?: string): any;
        getCenterByCoordinates(vectorSource: any, type?: string): any;
        getCenterByPoints(points: any): {
            centerLon: number;
            centerLat: number;
        };
        getPointsExtent(points: any): {
            leftTop: number[];
            rightBottom: number[];
        };
        getFlatternDistance(lat1: any, lng1: any, lat2: any, lng2: any): number;
        wrapLon(value: any): number;
        getMapExtent(map: any): false | {
            lon: any;
            lat: number;
        }[];
        getFeaturesInExtent(map: any, feature: any): any;
        getLayersCount(map: any): any;
        rgb(): string;
        color16(): string;
        getLineColor(index: any): any;
        downLoadMap(map: any): void;
    };
};
export default Component;
