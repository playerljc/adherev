export declare const PlayGroundTabPropTypes: {
    active: {
        type: StringConstructor;
        default: string;
    };
    config: {
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
        active: {
            type: StringConstructor;
            default: string;
        };
        config: {
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
        activeKey: any;
    };
    watch: {
        activeKey(activeKey: any): void;
    };
    methods: {
        getClipboardText(): Promise<any>;
        renderCodeView(h: any): any;
    };
};
export default _default;
