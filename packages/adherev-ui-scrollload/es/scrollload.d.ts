import { VNode } from 'vue';
export declare const EMPTY = "empty";
export declare const ERROR = "error";
export declare const NORMAL = "normal";
declare const _default: {
    name: string;
    props: {
        loadClassName: {
            type: StringConstructor;
            default: string;
        };
        emptyClassName: {
            type: StringConstructor;
            default: string;
        };
        errorClassName: {
            type: StringConstructor;
            default: string;
        };
        distance: {
            type: NumberConstructor;
            default: number;
        };
        getScrollContainer: {
            type: FunctionConstructor;
            default: () => null;
        };
    };
    data(): {
        $lock: boolean;
    };
    mounted(): void;
    beforeMount(): void;
    computed: {
        scrollContainer(): any;
        wrapStyle(): string;
    };
    methods: {
        initEvents(): void;
        beforeMount(): void;
        onScroll(): void;
        onEmptyClick(): void;
        onErrorClick(): void;
        renderLoading(h: any): VNode;
        renderEmpty(h: any): VNode;
        renderError(h: any): VNode;
        /**
         * hideAll
         */
        hideAll(): void;
    };
    render(h: any): VNode;
};
export default _default;
