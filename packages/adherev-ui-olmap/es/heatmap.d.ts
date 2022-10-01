declare const _default: {
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
            addGeoLayer(geojsonData: any, getStyleConfig: any, zIndex?: number): import("./geolayer").default;
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
export default _default;
