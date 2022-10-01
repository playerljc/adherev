declare const _default: {
    name: string;
    props: {
        position: {
            type: StringConstructor;
            default: string;
            validator(val: any): boolean;
        };
        indexes: {
            type: ArrayConstructor;
            default: () => never[];
        };
        dataSource: {
            type: ArrayConstructor;
            default: () => never[];
        };
    };
    data(): {
        $key: boolean;
        $isMouseClicked: boolean;
        $isMouseMoved: boolean;
        $startY: null;
        $startX: null;
        $curIndexName: null;
        $indexPositionMap: null;
        $maskEl: null;
    };
    computed: {
        getClassName(): string;
    };
    mounted(): void;
    updated(): void;
    beforeDestroy(): void;
    methods: {
        onClick(e: any): void;
        onTouchmove(e: any): void;
        onTouchend(): void;
        onMousedown(e: any): void;
        onMousemove(e: any): false | undefined;
        onMouseleave(): void;
        onMouseup(e: any): false | undefined;
        onResize(): void;
        clickDetail(e: any): false | undefined;
        moveDetail(x: any, y: any): void;
        initEvent(): void;
        adapterDimension(): void;
        createIndexPosition(): void;
        createMask(): void;
        scrollToAnimation(name: string | undefined, duration?: number): void;
        scrollTo(name: any): void;
        getDirection(): "vertical" | "horizontal";
        findIndex(x: number, y: number): any;
        update(): void;
        renderIndex(h: any): any;
        renderContent(h: any): any;
    };
    render(h: any): any;
};
export default _default;
