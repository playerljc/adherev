export declare const PlayGroundPropTypes: {
    codeText: {
        type: StringConstructor;
        default: string;
    };
    lang: {
        type: StringConstructor;
        default: string;
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
        codeText: {
            type: StringConstructor;
            default: string;
        };
        lang: {
            type: StringConstructor;
            default: string;
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
    methods: {
        getClipboardText(): Promise<any>;
        renderCodeView(h: any): any;
    };
};
export default _default;
