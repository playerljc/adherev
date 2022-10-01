export declare const PlayGroundMulitPropTypes: {
    defaultConfig: {
        type: ArrayConstructor;
        default: () => never[];
    };
    cardProps: {
        type: ObjectConstructor;
        default: () => null;
    };
    isActive: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const _default: {
    name: string;
    mixins: {
        props: {
            cardProps: {
                type: ObjectConstructor;
                default: () => null;
            };
            isActive: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultExpand: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
        data(): {
            expand: any;
        };
        computed: {
            expandIcon(): string;
            expandAlt(): string | import("vue-i18n").default.LocaleMessages | undefined;
        };
        watch: {
            defaultExpand(expand: any): void;
        };
        methods: {
            copy(e: any): void;
        };
        render(h: any): any;
    }[];
    props: {
        defaultConfig: {
            type: ArrayConstructor;
            default: () => never[];
        };
        cardProps: {
            type: ObjectConstructor;
            default: () => null;
        };
        isActive: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultExpand: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
        $configMap: Map<string, {
            render: (h: any, config: any, index: number) => Object;
            getCodeText: (config: any) => string;
        }>;
        config: any;
    };
    watch: {
        defaultConfig(defaultConfig: any): void;
    };
    methods: {
        getClipboardText(e: any): Promise<unknown>;
        renderCodePanelView(h: any, c: any, index: any): any;
        renderCodeView(h: any): any;
    };
};
export default _default;
