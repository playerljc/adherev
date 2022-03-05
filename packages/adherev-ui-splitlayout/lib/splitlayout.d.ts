declare const _default: {
    name: string;
    props: {
        className: {
            type: StringConstructor;
            default: string;
        };
        maxSize: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        minSize: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
    };
    data(): {
        $fixedEl: null;
        $autoEl: null;
        $containerEl: null;
        $isEnter: boolean;
        $isOut: boolean;
        $isDown: boolean;
        $isMove: boolean;
        $startVal: number;
        $changeVal: number;
        $changeBaseVal: number;
        $fixedValue: number;
        $maxDimension: number;
        $situation: Map<string, boolean>;
    };
    mounted(): void;
    created(): void;
    updated(): void;
    inject: string[];
    methods: {
        checked(): boolean;
        initEvents(): void;
        getFixedEl(): HTMLElement;
        getAutoEl(): HTMLElement;
        /**
         * getFixedElPosition
         */
        getFixedElPosition(): 'prev' | 'next';
        /**
         * getMaxDimension
         */
        getMaxDimension(): number;
        /**
         * getResizeClass
         */
        getResizeClass(): 'rowResize' | 'colResize';
        /**
         * getProps
         */
        getProps(): any;
        /**
         * getMaxSize
         */
        getMaxSize(): number;
        /**
         * getMinSize
         */
        getMinSize(): number;
        onMouseenter(e: any): void;
        onMousedown(e: any): void;
        onMouseup(e: any): void;
        onMouseleave(e: any): void;
        onMousemove(e: any): void;
        onMouseout(e: any): void;
    };
    render(h: any): any;
};
export default _default;
