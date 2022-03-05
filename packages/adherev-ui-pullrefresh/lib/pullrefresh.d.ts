declare const _default: {
    name: string;
    props: {
        className: {
            type: StringConstructor;
            default: string;
        };
        scrollClassName: {
            type: StringConstructor;
            default: string;
        };
        pullHeight: {
            type: NumberConstructor;
            default: number;
        };
        isShowUpdateTime: {
            type: BooleanConstructor;
            default: boolean;
        };
        updateTime: {
            type: NumberConstructor;
            default: number;
        };
        updateTimeFormat: {
            type: StringConstructor;
            default: any;
        };
        loadingAnimation: {
            type: StringConstructor;
            default: string;
        };
    };
    data(): {
        isCan: boolean;
        $maskEl: null;
        $el: null;
        $iconEl: null;
        $scrollEl: null;
        $triggerInnerEl: null;
        $pullHeight: number;
        $refreshHeight: number;
        $startPageY: null;
        $isDownPull: boolean;
        $isTop: boolean;
    };
    computed: {
        getScrollClassName(): string;
    };
    methods: {
        renderIcon(h: any): any;
        renderLabel(h: any): any;
        renderUpdateTime(h: any): any;
        renderLoadingAnimation(h: any): any;
        renderMask(): void;
        /**
         * getPullHeight
         * @private
         * @return number
         */
        getPullHeight(): any;
        addEvents(): void;
        removeEvents(): void;
        onTouchStart(e: any): void;
        onTouchMove(e: any): void;
        onTouchEnd(e: any): void;
        onScroll(e: any): void;
        translateY(el: any, y: string, duration?: number): void;
        rotateIcon(el: any, distance: any, duration?: number): void;
        trigger(action: any, params?: any): void;
        clear(): void;
        refresh(): void;
        reset(): void;
        resetUpdateTime(updateTime: number): Promise<void>;
        /**
         * getUpdateTime
         * @return number
         */
        getUpdateTime(): number;
    };
    created(): void;
    mounted(): void;
    render(h: any): any;
};
export default _default;
