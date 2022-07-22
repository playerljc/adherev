declare const _default: {
    name: string;
    props: {
        ak: {
            type: StringConstructor;
            default: string;
        };
        zoom: {
            type: NumberConstructor;
            default: number;
        };
        center: {
            type: ObjectConstructor;
            default: () => {
                lon: number;
                lat: number;
            };
        };
        config: {
            type: ObjectConstructor;
            default: () => {
                minZoom: number;
                maxZoom: number;
                enableHighResolution: boolean;
                enableAutoResize: boolean;
                enableMapClick: boolean;
            };
        };
        externalImportBMapScript: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
        isReady: boolean;
        $BMap: null;
        $map: null;
        $isLoad: boolean;
    };
    methods: {
        importBMapJS(): Promise<unknown>;
        initMap(): void;
        initMapControl(): void;
        getMap(): any;
    };
    mounted(): void;
    render(h: any): JSX.Element;
};
export default _default;
