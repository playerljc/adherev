export declare const AnchorNavigationPropTypes: {
    defaultActiveAnchor: {
        type: StringConstructor;
        default: string;
    };
    anchors: {
        type: ArrayConstructor;
        default: () => never[];
    };
    anchorPosition: {
        type: ObjectConstructor;
        default: () => {
            top: number;
            width: number;
        };
    };
    scrollEl: {
        type: {
            new (): HTMLElement;
            prototype: HTMLElement;
        };
        default: () => null;
    };
};
declare const _default: {
    name: string;
    props: {
        defaultActiveAnchor: {
            type: StringConstructor;
            default: string;
        };
        anchors: {
            type: ArrayConstructor;
            default: () => never[];
        };
        anchorPosition: {
            type: ObjectConstructor;
            default: () => {
                top: number;
                width: number;
            };
        };
        scrollEl: {
            type: {
                new (): HTMLElement;
                prototype: HTMLElement;
            };
            default: () => null;
        };
    };
    data(): {
        activeAnchor: any;
        $anchorDimensionIndex: never[];
    };
    watch: {
        defaultActiveAnchor(activeAnchor: any): void;
        scrollEl(scrollEl: any, oldVal: any): void;
    };
    mounted(): void;
    beforeDestroy(): void;
    methods: {
        /**
         * onHashChange
         */
        onHashChange(): void;
        /**
         * onWrapScroll
         */
        onWrapScroll(): void;
        /**
         * createAnchorDimensionIndex
         */
        createAnchorDimensionIndex(): void;
        /**
         * findAnchorByScrollVal
         * @param scrollVal
         */
        findAnchorByScrollVal(scrollVal: number): any;
    };
    render(h: any): any;
};
export default _default;
