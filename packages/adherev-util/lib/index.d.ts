declare const _default: {
    _util: {
        withInstall: (comp: any) => any;
        withVue: (Vue: any, p: string, val: any) => void;
        Fragment: {
            render(h: any): any;
        };
    };
    parse(path?: string | undefined): object;
    stringify(record: object): string;
    arrayToAntdTree(arr: any[], { keyAttr, titleAttr, rootParentId, parentIdAttr }: import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode): import("@baifendian/adhere-util/lib/types").IAntdTreeNode[];
    arrayToAntdTreeSelect(arr: any[], { keyAttr, titleAttr, rootParentId, parentIdAttr }: import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode): import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode[];
    getAncestor(data: any[], node: any, config: {
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string;
    }): any[];
    getDescendants(data: any[], node: any, config: {
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string;
    }): any[];
    filterTree(data: any[], kw: string, config: {
        filterAttr: string;
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string;
        titleAttr: string;
    }): import("@baifendian/adhere-util/lib/types").IAntdTreeNode[];
    getLang(): string;
    setLang(lang?: string | undefined): void;
    getDatePickerFormat(): string;
    casUrl({ baseUrl, enterUrl }: {
        baseUrl: any;
        enterUrl: any;
    }): string;
    casLogoutUrl({ baseUrl, enterUrl, params }: {
        baseUrl: any;
        enterUrl: any;
        params?: string | undefined;
    }): string;
    isTouch(): boolean;
    drawStart(ctx: CanvasRenderingContext2D, config: {
        startCount: number;
        center: import("@baifendian/adhere-util/lib/types").IPoint;
        outRadius: number;
        innerRadius: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    drawSector(ctx: CanvasRenderingContext2D, config: {
        center: import("@baifendian/adhere-util/lib/types").IPoint;
        radius: number;
        angle1: number;
        angle2: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    drawLeaf(ctx: CanvasRenderingContext2D, config: {
        n: number;
        center: import("@baifendian/adhere-util/lib/types").IPoint;
        size: number;
        length: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    drawRegularPolygon(ctx: CanvasRenderingContext2D, config: {
        n: number;
        center: import("@baifendian/adhere-util/lib/types").IPoint;
        size: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    drawRadiusRect(ctx: CanvasRenderingContext2D, config: {
        leftTop: import("@baifendian/adhere-util/lib/types").IPoint;
        width: number;
        height: number;
        radius: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    toPoint(percent: string): number;
    toPercent(point: number): string;
    straightLineIntersection(p1: import("@baifendian/adhere-util/lib/types").IPoint, p2: import("@baifendian/adhere-util/lib/types").IPoint, p3: import("@baifendian/adhere-util/lib/types").IPoint, p4: import("@baifendian/adhere-util/lib/types").IPoint): import("@baifendian/adhere-util/lib/types").IPoint;
    getA3Point({ p1, p2, distance }: {
        p1: import("@baifendian/adhere-util/lib/types").IPoint;
        p2: import("@baifendian/adhere-util/lib/types").IPoint;
        distance: number;
    }): import("@baifendian/adhere-util/lib/types").IPoint;
    getDistanceByBetweenPoint({ p1, p2 }: {
        p1: import("@baifendian/adhere-util/lib/types").IPoint;
        p2: import("@baifendian/adhere-util/lib/types").IPoint;
    }): number;
    clientToCtxPoint({ event, rect }: {
        event: MouseEvent;
        rect: DOMRect;
    }): import("@baifendian/adhere-util/lib/types").IPoint;
    isPointInCircle(point: import("@baifendian/adhere-util/lib/types").IPoint, circle: import("@baifendian/adhere-util/lib/types").ICircle): boolean;
    isPointInRect(point: import("@baifendian/adhere-util/lib/types").IPoint, rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): boolean;
    getCanvasTextInGemX(ctx: CanvasRenderingContext2D, text: string, rect: {
        leftTop: import("@baifendian/adhere-util/lib/types").IPoint;
        rightBottom: import("@baifendian/adhere-util/lib/types").IPoint;
    }): number;
    midpoint(fromPoint: import("@baifendian/adhere-util/lib/types").IPoint, toPoint: import("@baifendian/adhere-util/lib/types").IPoint): import("@baifendian/adhere-util/lib/types").IPoint;
    slope(fromPoint: import("@baifendian/adhere-util/lib/types").IPoint, toPoint: import("@baifendian/adhere-util/lib/types").IPoint, axis?: "cartesian" | "geographic" | undefined): number | undefined;
    slopToRadian(fromPoint: import("@baifendian/adhere-util/lib/types").IPoint, toPoint: import("@baifendian/adhere-util/lib/types").IPoint, axis?: "cartesian" | "geographic" | undefined): number;
    slopToAngle(fromPoint: import("@baifendian/adhere-util/lib/types").IPoint, toPoint: import("@baifendian/adhere-util/lib/types").IPoint, axis?: "cartesian" | "geographic" | undefined): number;
    radianToAngle(radian: number): number;
    angleToRadian(angle: any): number;
    distance(value: number, unit: "kilometer"): number;
    getCirclePoint(center: import("@baifendian/adhere-util/lib/types").IPoint, raduis: number, angle: number): import("@baifendian/adhere-util/lib/types").IPoint;
    getOvalPoint(center: import("@baifendian/adhere-util/lib/types").IPoint, raduisX: number, radiusY: number, angle: number): import("@baifendian/adhere-util/lib/types").IPoint;
    isTextNode(el: Node): boolean;
    isCommentNode(el: Node): boolean;
    isElementNode(el: Node): boolean;
    createElement(htmlStr: string): HTMLElement;
    getTopDom(target: any, selector: string): HTMLElement | null;
    on(el: any, tag: string, type: string, handler: Function, capture?: boolean | undefined): void;
    off(el: Element, tag: string, type: string, handler: Function): void;
    addClass(el: any, classes?: string | undefined): void;
    removeClass(el: any, classes?: string | undefined): void;
    hasClass(el: any, className: string): boolean;
    insertAfter(newElement: any, targetElement: any): void;
    prepend(el: any, children: any): void;
    remove(el: any): void;
    getParentElementByTag(el: any, tag: string): HTMLElement | null;
    children(el: any, selector: string): any[];
    objectToDataSet(obj: object, dom: HTMLElement): void;
    dataSetToObject(dom: HTMLElement): {};
    getPageLeft(el: any): any;
    getPageTop(el: any): any;
    getPageRect(el: any): {
        top: any;
        bottom: any;
        left: any;
        right: any;
    };
    isIframeEmbed(): boolean;
    addClickListener: (el: HTMLElement, handler: (e: any) => {}, capture?: boolean | undefined) => Function;
    rgb(): string;
    color16(): string;
    isEmpty(value: any): boolean;
    isNumber(val: any): boolean;
    isBoolean(val: any): boolean;
    isString(val: any): boolean;
    isSymbol(val: any): boolean;
    isPrimitive(val: any): boolean;
    isArray(obj: any): boolean;
    isFunction(obj: any): boolean;
    isObject(obj: any): boolean;
    isRef(obj: any): boolean;
    chainCallAssignment({ obj, chainStr, value }: {
        obj: any;
        chainStr: any;
        value: any;
    }): false | undefined;
    getObjectByChainStr({ obj, chainStr }: {
        obj: any;
        chainStr: any;
    }): any;
    toCamelCase(str: any, toUpperCase?: boolean | undefined): any;
    isKebabCase(name: any): boolean;
    isPascalCase(name: any): boolean;
    pascalCaseToKebabCase(name: any): any;
    execExpression(context: any, expressionStr: any, data: any): any;
    getCookie(name?: string | undefined): string;
    noop(): Function;
    generatorRandom(lowerValue: any, upperValue: any): number;
    uuid(): string;
    getPropertyVisitPathStr(target: any, key: any): string;
    convertBase64UrlToBlob(data: string): Blob;
};
export default _default;
