declare const _default: {
    _util: {
        withInstall: (comp: any) => any;
        withVue: (app: any, p: string, val: any) => void;
        HOC: (VueComponent: object, overwrite?: any) => object;
    };
    isUse?: (() => boolean) | undefined;
    use?: ((Vue: any) => void) | undefined;
    treeToArray?: ((treeData: import("@baifendian/adhere-util/lib/types").IAntdTreeNode[], config: {
        parentIdAttr: string;
        rootParentId: string | number;
    }) => any[]) | undefined;
    arrayToAntdTree?: ((arr: any[], { keyAttr, titleAttr, rootParentId, parentIdAttr }: import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode) => import("@baifendian/adhere-util/lib/types").IAntdTreeNode[]) | undefined;
    arrayToAntdTreeSelect?: ((arr: any[], { keyAttr, titleAttr, rootParentId, parentIdAttr }: import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode) => import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode[]) | undefined;
    getAncestor?: ((data: any[], node: any, config: {
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string | number;
    }) => any[]) | undefined;
    getDescendants?: ((data: any[], node: any, config: {
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string | number;
    }) => any[]) | undefined;
    filterTree?: ((data: any[], kw: string, config: {
        filterAttr: string;
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string | number;
        titleAttr: string;
    }) => import("@baifendian/adhere-util/lib/types").IAntdTreeNode[]) | undefined;
    findNodeByKey?: ((treeData: import("@baifendian/adhere-util/lib/types").IAntdTreeNode[], val: any, config: {
        keyAttr: string;
    }) => import("@baifendian/adhere-util/lib/types").IAntdTreeNode | null) | undefined;
    transformTreeData?: ((treeData: any[], onCallback: (node: any) => import("@baifendian/adhere-util/lib/types").IAntdTreeNode) => import("@baifendian/adhere-util/lib/types").IAntdTreeNode[]) | undefined;
    getLang?: (() => string) | undefined;
    setLang?: ((lang?: string | undefined) => void) | undefined;
    getDatePickerFormat?: (() => string) | undefined;
    casUrl?: (({ baseUrl, enterUrl }: {
        baseUrl: any;
        enterUrl: any;
    }) => string) | undefined;
    casLogoutUrl?: (({ baseUrl, enterUrl, params }: {
        baseUrl: any;
        enterUrl: any;
        params?: string | undefined;
    }) => string) | undefined;
    isTouch?: (() => boolean) | undefined;
    drawStart?: ((ctx: CanvasRenderingContext2D, config: {
        startCount: number;
        center: import("@baifendian/adhere-util/lib/types").IPoint;
        outRadius: number;
        innerRadius: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}) => void) | undefined;
    drawSector?: ((ctx: CanvasRenderingContext2D, config: {
        center: import("@baifendian/adhere-util/lib/types").IPoint;
        radius: number;
        angle1: number;
        angle2: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}) => void) | undefined;
    drawLeaf?: ((ctx: CanvasRenderingContext2D, config: {
        n: number;
        center: import("@baifendian/adhere-util/lib/types").IPoint;
        size: number;
        length: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}) => void) | undefined;
    drawRegularPolygon?: ((ctx: CanvasRenderingContext2D, config: {
        n: number;
        center: import("@baifendian/adhere-util/lib/types").IPoint;
        size: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}) => void) | undefined;
    drawRadiusRect?: ((ctx: CanvasRenderingContext2D, config: {
        leftTop: import("@baifendian/adhere-util/lib/types").IPoint;
        width: number;
        height: number;
        radius: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}) => void) | undefined;
    toPoint?: ((percent: string) => number) | undefined;
    toPercent?: ((point: number) => string) | undefined;
    straightLineIntersection?: ((p1: import("@baifendian/adhere-util/lib/types").IPoint, p2: import("@baifendian/adhere-util/lib/types").IPoint, p3: import("@baifendian/adhere-util/lib/types").IPoint, p4: import("@baifendian/adhere-util/lib/types").IPoint) => import("@baifendian/adhere-util/lib/types").IPoint) | undefined;
    getA3Point?: (({ p1, p2, distance }: {
        p1: import("@baifendian/adhere-util/lib/types").IPoint;
        p2: import("@baifendian/adhere-util/lib/types").IPoint;
        distance: number;
    }) => import("@baifendian/adhere-util/lib/types").IPoint) | undefined;
    getDistanceByBetweenPoint?: (({ p1, p2 }: {
        p1: import("@baifendian/adhere-util/lib/types").IPoint;
        p2: import("@baifendian/adhere-util/lib/types").IPoint;
    }) => number) | undefined;
    clientToCtxPoint?: (({ event, rect }: {
        event: MouseEvent;
        rect: DOMRect;
    }) => import("@baifendian/adhere-util/lib/types").IPoint) | undefined;
    isPointInCircle?: ((point: import("@baifendian/adhere-util/lib/types").IPoint, circle: import("@baifendian/adhere-util/lib/types").ICircle) => boolean) | undefined;
    isPointInRect?: ((point: import("@baifendian/adhere-util/lib/types").IPoint, rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    }) => boolean) | undefined;
    getCanvasTextInGemX?: ((ctx: CanvasRenderingContext2D, text: string, rect: {
        leftTop: import("@baifendian/adhere-util/lib/types").IPoint;
        rightBottom: import("@baifendian/adhere-util/lib/types").IPoint;
    }) => number) | undefined;
    midpoint?: ((fromPoint: import("@baifendian/adhere-util/lib/types").IPoint, toPoint: import("@baifendian/adhere-util/lib/types").IPoint) => import("@baifendian/adhere-util/lib/types").IPoint) | undefined;
    slope?: ((fromPoint: import("@baifendian/adhere-util/lib/types").IPoint, toPoint: import("@baifendian/adhere-util/lib/types").IPoint, axis?: "cartesian" | "geographic" | undefined) => number | undefined) | undefined;
    slopToRadian?: ((fromPoint: import("@baifendian/adhere-util/lib/types").IPoint, toPoint: import("@baifendian/adhere-util/lib/types").IPoint, axis?: "cartesian" | "geographic" | undefined) => number) | undefined;
    slopToAngle?: ((fromPoint: import("@baifendian/adhere-util/lib/types").IPoint, toPoint: import("@baifendian/adhere-util/lib/types").IPoint, axis?: "cartesian" | "geographic" | undefined) => number) | undefined;
    radianToAngle?: ((radian: number) => number) | undefined;
    angleToRadian?: ((angle: any) => number) | undefined;
    distance?: ((value: number, unit: "kilometer") => number) | undefined;
    getCirclePoint?: ((center: import("@baifendian/adhere-util/lib/types").IPoint, raduis: number, angle: number) => import("@baifendian/adhere-util/lib/types").IPoint) | undefined;
    getOvalPoint?: ((center: import("@baifendian/adhere-util/lib/types").IPoint, raduisX: number, radiusY: number, angle: number) => import("@baifendian/adhere-util/lib/types").IPoint) | undefined;
    isTextNode?: ((el: Node) => boolean) | undefined;
    isCommentNode?: ((el: Node) => boolean) | undefined;
    isElementNode?: ((el: Node) => boolean) | undefined;
    createElement?: ((htmlStr: string) => HTMLElement) | undefined;
    getTopDom?: ((target: any, selector: string) => HTMLElement | null) | undefined;
    on?: ((el: any, tag: string, type: string, handler: Function, capture?: boolean | undefined) => void) | undefined;
    off?: ((el: Element, tag: string, type: string, handler: Function) => void) | undefined;
    addClass?: ((el: any, classes?: string | undefined) => void) | undefined;
    removeClass?: ((el: any, classes?: string | undefined) => void) | undefined;
    hasClass?: ((el: any, className: string) => boolean) | undefined;
    insertAfter?: ((newElement: any, targetElement: any) => void) | undefined;
    prepend?: ((el: any, children: any) => void) | undefined;
    remove?: ((el: any) => void) | undefined;
    getParentElementByTag?: ((el: any, tag: string) => HTMLElement | null) | undefined;
    children?: ((el: any, selector: string) => any[]) | undefined;
    objectToDataSet?: ((obj: object, dom: HTMLElement) => void) | undefined;
    dataSetToObject?: ((dom: HTMLElement) => object) | undefined;
    getPageLeft?: ((el: HTMLElement) => number) | undefined;
    getPageTop?: ((el: HTMLElement) => number) | undefined;
    getPageRect?: ((el: HTMLElement) => {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }) | undefined;
    getLeftUntil?: (({ el, untilEl }: {
        el: HTMLElement;
        untilEl: HTMLElement;
    }) => number) | undefined;
    getTopUntil?: (({ el, untilEl }: {
        el: HTMLElement;
        untilEl: HTMLElement;
    }) => number) | undefined;
    getRectUntil?: (({ el, untilEl }: {
        el: HTMLElement;
        untilEl: HTMLElement;
    }) => {
        top: number;
        left: number;
        right: number;
        bottom: number;
    }) | undefined;
    isIframeEmbed?: (() => boolean) | undefined;
    addClickListener?: ((el: HTMLElement, handler: (e: any) => {}, capture?: boolean | undefined) => Function) | undefined;
    rgb?: (() => string) | undefined;
    color16?: (() => string) | undefined;
    isEmpty?: ((value: any) => boolean) | undefined;
    isNumber?: ((val: any) => boolean) | undefined;
    isBoolean?: ((val: any) => boolean) | undefined;
    isString?: ((val: any) => boolean) | undefined;
    isSymbol?: ((val: any) => boolean) | undefined;
    isPrimitive?: ((val: any) => boolean) | undefined;
    isArray?: ((obj: any) => boolean) | undefined;
    isFunction?: ((obj: any) => boolean) | undefined;
    isObject?: ((obj: any) => boolean) | undefined;
    isRef?: ((obj: any) => boolean) | undefined;
    chainCallAssignment?: (({ obj, chainStr, value }: {
        obj: any;
        chainStr: any;
        value: any;
    }) => false | undefined) | undefined;
    getObjectByChainStr?: (({ obj, chainStr }: {
        obj: any;
        chainStr: any;
    }) => any) | undefined;
    toCamelCase?: ((str: any, toUpperCase?: boolean | undefined) => any) | undefined;
    isKebabCase?: ((name: any) => boolean) | undefined;
    isPascalCase?: ((name: any) => boolean) | undefined;
    pascalCaseToKebabCase?: ((name: any) => any) | undefined;
    execExpression?: ((context: any, expressionStr: any, data: any) => any) | undefined;
    getCookie?: ((name?: string | undefined) => string) | undefined;
    noop?: (() => Function) | undefined;
    generatorRandom?: ((lowerValue: any, upperValue: any) => number) | undefined;
    uuid?: (() => string) | undefined;
    getPropertyVisitPathStr?: ((target: any, key: any) => string) | undefined;
    convertBase64UrlToBlob?: ((data: string) => Blob | null) | undefined;
    omitObject?: ((obj: object) => object) | undefined;
};
export default _default;
