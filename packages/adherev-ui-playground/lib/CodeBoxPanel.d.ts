export declare const CodeBoxPanelPropTypes: {
    title: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    extra: {
        type: ObjectConstructor;
        default: () => null;
    };
    isShowExpandAllBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    config: {
        type: ArrayConstructor;
        default: () => never[];
    };
};
declare const _default: {
    name: string;
    props: {
        title: {
            type: (StringConstructor | ObjectConstructor)[];
            default: string;
        };
        extra: {
            type: ObjectConstructor;
            default: () => null;
        };
        isShowExpandAllBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        columnCount: {
            type: NumberConstructor;
            default: number;
        };
        defaultExpandAll: {
            type: BooleanConstructor;
            default: boolean;
        };
        config: {
            type: ArrayConstructor;
            default: () => never[];
        };
    };
    data(): {
        activeAnchor: string;
        expandAll: any;
        $expandLock: boolean;
    };
    computed: {
        column(): any[];
        renderMap(): Map<string, Function>;
    };
    mounted(): void;
    beforeDestroy(): void;
    watch: {
        expandAll(): void;
        defaultExpandAll(expandAll: any): void;
    };
    methods: {
        onHashChange(): void;
        renderPlayGround(h: any, columnIndex: number, index: number): any;
        renderPlayGroundTab(h: any, columnIndex: number, index: number): any;
        renderPlayGroundMulit(h: any, columnIndex: number, index: number): any;
    };
    render(h: any): any;
};
export default _default;
