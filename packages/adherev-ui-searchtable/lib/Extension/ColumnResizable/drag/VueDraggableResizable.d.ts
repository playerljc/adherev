declare const _default: import("vue").DefineComponent<{
    className: {
        type: StringConstructor;
        default: string;
    };
    classNameDraggable: {
        type: StringConstructor;
        default: string;
    };
    classNameResizable: {
        type: StringConstructor;
        default: string;
    };
    classNameDragging: {
        type: StringConstructor;
        default: string;
    };
    classNameResizing: {
        type: StringConstructor;
        default: string;
    };
    classNameActive: {
        type: StringConstructor;
        default: string;
    };
    classNameHandle: {
        type: StringConstructor;
        default: string;
    };
    disableUserSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableNativeDrag: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventDeactivation: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockAspectRatio: {
        type: BooleanConstructor;
        default: boolean;
    };
    w: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: unknown) => boolean;
    };
    h: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: unknown) => boolean;
    };
    minWidth: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    minHeight: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    maxWidth: {
        type: NumberConstructor;
        default: null;
        validator: (val: number) => boolean;
    };
    maxHeight: {
        type: NumberConstructor;
        default: null;
        validator: (val: number) => boolean;
    };
    x: {
        type: NumberConstructor;
        default: number;
    };
    y: {
        type: NumberConstructor;
        default: number;
    };
    z: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
        validator: (val: string | number) => boolean;
    };
    handles: {
        type: ArrayConstructor;
        default: () => string[];
        validator: (val: Array<any>) => boolean;
    };
    dragHandle: {
        type: StringConstructor;
        default: null;
    };
    dragCancel: {
        type: StringConstructor;
        default: null;
    };
    axis: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    grid: {
        type: ArrayConstructor;
        default: () => number[];
    };
    parent: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: (NumberConstructor | ArrayConstructor)[];
        default: number;
        validator: (val: number | Array<any>) => boolean;
    };
    onDragStart: {
        type: FunctionConstructor;
        default: () => true;
    };
    onDrag: {
        type: FunctionConstructor;
        default: () => true;
    };
    onResizeStart: {
        type: FunctionConstructor;
        default: () => true;
    };
    onResize: {
        type: FunctionConstructor;
        default: () => true;
    };
}, unknown, {
    left: number;
    top: number;
    right: null;
    bottom: null;
    width: null;
    height: null;
    widthTouched: boolean;
    heightTouched: boolean;
    aspectFactor: null;
    parentWidth: null;
    parentHeight: null;
    minW: number;
    minH: number;
    maxW: number;
    maxH: number;
    handle: null;
    enabled: boolean;
    resizing: boolean;
    dragging: boolean;
    dragEnable: boolean;
    resizeEnable: boolean;
    zIndex: string | number;
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
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    className: {
        type: StringConstructor;
        default: string;
    };
    classNameDraggable: {
        type: StringConstructor;
        default: string;
    };
    classNameResizable: {
        type: StringConstructor;
        default: string;
    };
    classNameDragging: {
        type: StringConstructor;
        default: string;
    };
    classNameResizing: {
        type: StringConstructor;
        default: string;
    };
    classNameActive: {
        type: StringConstructor;
        default: string;
    };
    classNameHandle: {
        type: StringConstructor;
        default: string;
    };
    disableUserSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableNativeDrag: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventDeactivation: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockAspectRatio: {
        type: BooleanConstructor;
        default: boolean;
    };
    w: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: unknown) => boolean;
    };
    h: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: unknown) => boolean;
    };
    minWidth: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    minHeight: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    maxWidth: {
        type: NumberConstructor;
        default: null;
        validator: (val: number) => boolean;
    };
    maxHeight: {
        type: NumberConstructor;
        default: null;
        validator: (val: number) => boolean;
    };
    x: {
        type: NumberConstructor;
        default: number;
    };
    y: {
        type: NumberConstructor;
        default: number;
    };
    z: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
        validator: (val: string | number) => boolean;
    };
    handles: {
        type: ArrayConstructor;
        default: () => string[];
        validator: (val: Array<any>) => boolean;
    };
    dragHandle: {
        type: StringConstructor;
        default: null;
    };
    dragCancel: {
        type: StringConstructor;
        default: null;
    };
    axis: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    grid: {
        type: ArrayConstructor;
        default: () => number[];
    };
    parent: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: (NumberConstructor | ArrayConstructor)[];
        default: number;
        validator: (val: number | Array<any>) => boolean;
    };
    onDragStart: {
        type: FunctionConstructor;
        default: () => true;
    };
    onDrag: {
        type: FunctionConstructor;
        default: () => true;
    };
    onResizeStart: {
        type: FunctionConstructor;
        default: () => true;
    };
    onResize: {
        type: FunctionConstructor;
        default: () => true;
    };
}>>, {
    x: number;
    y: number;
    draggable: boolean;
    resizable: boolean;
    active: boolean;
    z: string | number;
    lockAspectRatio: boolean;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    w: string | number;
    h: string | number;
    className: string;
    classNameDraggable: string;
    classNameResizable: string;
    classNameDragging: string;
    classNameResizing: string;
    classNameActive: string;
    classNameHandle: string;
    disableUserSelect: boolean;
    enableNativeDrag: boolean;
    preventDeactivation: boolean;
    handles: unknown[];
    dragHandle: string;
    dragCancel: string;
    axis: string;
    grid: unknown[];
    parent: boolean;
    scale: number | unknown[];
    onDragStart: Function;
    onDrag: Function;
    onResizeStart: Function;
    onResize: Function;
}>;
export default _default;
