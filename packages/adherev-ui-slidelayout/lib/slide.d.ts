declare const _default: {
    props: {
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        mask: {
            type: BooleanConstructor;
            default: boolean;
        };
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        time: {
            type: NumberConstructor;
            default: number;
        };
        direction: {
            type: StringConstructor;
            default: string;
            validator(val: any): boolean;
        };
        defaultCollapse: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
        $positionConfig: {};
        $maskEl: null;
        collapse: any;
    };
    watch: {
        defaultCollapse(newVal: any, oldVal: any): void;
    };
    mounted(): void;
    beforeDestroy(): void;
    methods: {
        getDuration(time: undefined | null | string | number): any;
        initial(): void;
        show(): void;
        close(): void;
    };
};
export default _default;
