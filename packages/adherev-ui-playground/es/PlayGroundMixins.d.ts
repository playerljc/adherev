export declare const PlaygroundMixinsProps: {
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
};
export default _default;
