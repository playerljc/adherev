declare const _default: {
    name: string;
    props: {
        fixedClassName: {
            type: StringConstructor;
            default: string;
        };
        fixedStyle: {
            type: ObjectConstructor;
            default: () => {};
        };
        innerClassName: {
            type: StringConstructor;
            default: string;
        };
        innerStyle: {
            type: ObjectConstructor;
            default: () => {};
        };
    };
    data(): {
        $key: boolean;
        $maskEl: null;
        $index: never[];
        $headerEls: null;
        $preScrollObj: null;
    };
    mounted(): void;
    updated(): void;
    beforeDestroy(): void;
    methods: {
        initial(): void;
        createIndex(): void;
        position(): false | undefined;
        onScroll(): void;
        scrollAnimationTo(targetTop?: number, duration?: number): void;
        scrollTo(item: any, duration?: number): void;
        initMask(): void;
        refresh(): void;
        /**
         * scrollToByIndex
         * @param {number} index
         * @param {number} duration
         * @return {boolean}
         */
        scrollToByIndex(index: any, duration?: number): false | undefined;
        /**
         * scrollToByHeaderEl
         * @param {HtmlElement} headerEl
         * @param {number} duration
         * @return {boolean}
         */
        scrollToByHeaderEl(headerEl: any, duration?: number): false | undefined;
    };
    render(h: any): any;
};
export default _default;
