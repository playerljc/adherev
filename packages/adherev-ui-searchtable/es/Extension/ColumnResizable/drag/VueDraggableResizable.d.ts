declare const _default: import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, unknown, {
    left: Function;
    top: Function;
    right: null;
    bottom: null;
    width: null;
    height: null;
    widthTouched: boolean;
    heightTouched: boolean;
    aspectFactor: null;
    parentWidth: null;
    parentHeight: null;
    minW: Function;
    minH: Function;
    maxW: Function;
    maxH: Function;
    handle: null;
    enabled: Function;
    resizing: boolean;
    dragging: boolean;
    dragEnable: boolean;
    resizeEnable: boolean;
    zIndex: Function;
}, {
    style(): {
        userSelect: string;
        MozUserSelect: string;
        WebkitUserSelect: string;
        MsUserSelect: string;
        width: any;
        height: any;
        zIndex: any;
    };
    actualHandles(): any;
    computedWidth(): string;
    computedHeight(): string;
    resizingOnX(): any;
    resizingOnY(): any;
    isCornerHandle(): boolean;
}, {
    resetBoundsAndMouseState(): void;
    checkParentSize(): void;
    getParentSize(): number[] | null[];
    elementTouchDown(e: any): void;
    elementMouseDown(e: any): void;
    elementDown(e: any): void;
    calcDragLimits(): {
        minLeft: number;
        maxLeft: any;
        minRight: number;
        maxRight: any;
        minTop: number;
        maxTop: any;
        minBottom: number;
        maxBottom: any;
    };
    deselect(e: any): void;
    handleTouchDown(handle: any, e: any): void;
    handleDown(handle: any, e: any): void;
    calcResizeLimits(): {
        minLeft: number | null;
        maxLeft: number | null;
        minTop: number | null;
        maxTop: number | null;
        minRight: number | null;
        maxRight: number | null;
        minBottom: number | null;
        maxBottom: number | null;
    };
    move(e: any): void;
    handleDrag(e: any): void;
    moveHorizontally(val: any): void;
    moveVertically(val: any): void;
    handleResize(e: any): void;
    changeWidth(val: any): void;
    changeHeight(val: any): void;
    handleUp(e: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {
    [x: number]: string;
} | {}>;
export default _default;
