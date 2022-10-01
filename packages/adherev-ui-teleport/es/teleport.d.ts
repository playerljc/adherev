declare const _default: {
    name: string;
    props: {
        to: {
            type: (StringConstructor | {
                new (): HTMLElement;
                prototype: HTMLElement;
            } | FunctionConstructor)[];
        };
        isWrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        wrapTag: {
            type: StringConstructor;
            default: string;
        };
        wrapClassName: {
            type: StringConstructor;
        };
        wrapStyle: {
            type: StringConstructor;
        };
        rate: {
            type: NumberConstructor;
            default: number;
        };
    };
    data(): {
        $mountEl: null;
        $vm: null;
        $debounceRender: any;
    };
    computed: {
        toEl(): any;
    };
    methods: {
        createMountEl(): HTMLDivElement;
    };
    render(h: any): null;
};
export default _default;
