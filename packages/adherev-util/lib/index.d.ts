import { App, Plugin } from 'vue';
import * as _util from './_util';
declare const _default: {
    install: (app: App<any>) => App<any>;
    _util: typeof _util;
    prettierJSON(_jsonStr?: string | undefined): string;
    compressJSON(_jsonStr?: string | undefined): string;
    prettierXML(_xmlStr?: string | undefined): any;
    compressXML(_xmlStr?: string | undefined): any;
    prettierHTML(_htmlStr?: string | undefined): any;
    compressHTML(_htmlStr?: string | undefined): any;
    prettierCSS(_cssStr?: string | undefined): any;
    compressCSS(_cssStr?: string | undefined): any;
    prettierSQL(_sqlStr?: string | undefined): any;
    compressSQL(_sqlStr?: string | undefined): any;
    jsonToXML(_jsonStr?: string | undefined): any;
    xmlToJSON(_xmlStr?: string | undefined, prettier?: boolean | undefined): string;
    base46Encode(str: string): any;
    base64Decode(_base64Str: string): string;
    chineseToUTF8(_chineseStr?: string | undefined): string;
    UTF8ToChinese(_utf8Str: string): string;
    chineseToASC2(_chineseStr?: string | undefined, hasNoTransformationLettersAndNumber?: boolean | undefined): string;
    ASC2ToChinese(_asc2Str?: string | undefined): string;
    hashEncryptToMD5(_value?: string | undefined): string;
    hashEncryptToSHA1(_value?: string | undefined): string;
    hashEncryptToSHA256(_value?: string | undefined): string;
    hashEncryptToSHA512(_value?: string | undefined): string;
    hashEncryptToSHA3_64(_value?: string | undefined): string;
    hashEncryptToSHA3_224(_value?: string | undefined): string;
    hashEncryptToSHA3_256(_value?: string | undefined): string;
    hashEncryptToSHA3_348(_value?: string | undefined): string;
    hashEncryptToSHA3_512(_value?: string | undefined): string;
    hashEncryptToRIPEMD160(_value?: string | undefined): string;
    symmetricEncryptToAES(_value?: string | undefined, _pwd?: string | undefined): any;
    symmetricEncryptToDES(_value?: string | undefined, _pwd?: string | undefined): any;
    symmetricEncryptToRC4(_value?: string | undefined, _pwd?: string | undefined): any;
    symmetricEncryptToRabbit(_value?: string | undefined, _pwd?: string | undefined): any;
    symmetricEncryptToTripleDes(_value?: string | undefined, _pwd?: string | undefined): any;
    symmetricDecryptToAES(_value?: string | undefined, _pwd?: string | undefined): any;
    symmetricDecryptToDES(_value?: string | undefined, _pwd?: string | undefined): any;
    symmetricDecryptToRC4(_value?: string | undefined, _pwd?: string | undefined): any;
    symmetricDecryptToRabbit(_value?: string | undefined, _pwd?: string | undefined): any;
    symmetricDecryptToTripleDes(_value?: string | undefined, _pwd?: string | undefined): any;
    toTimestampByFormatStrAndTimeZone(str: string, timezone: string): number;
    toStrByTimestampAndTimeZone(_timestamp: string, timezone: string): string;
    getCurrentTimestamp(): number;
    getTimezone(): number;
    treeToArray: (treeData: (import("@baifendian/adhere-util/lib/types").IAntdTreeNode | import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode)[], config: {
        parentIdAttr: string;
        rootParentId: string | number;
    }) => {
        [props: string]: any;
        children?: any[] | undefined;
        key?: string | number | undefined;
    }[];
    arrayToAntdTree: (arr: {
        [props: string]: any;
        children?: any[] | undefined;
        isLeaf?: boolean | undefined;
        properties?: any;
    }[], config: import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode) => (import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode & Pick<import("@baifendian/adhere-util/lib/types").IAntdTreeNode, "title" | "key" | "isLeaf" | "children" | "properties">)[];
    arrayToAntdTreeSelect: (arr: any[], config: import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode) => (import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode & Pick<import("@baifendian/adhere-util/lib/types").IAntdTreeNode, "title" | "key" | "isLeaf" | "children" | "properties">)[];
    getAncestor: (data: any[], node: any, config: Pick<import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode, "keyAttr" | "parentIdAttr" | "rootParentId">) => any[];
    getDescendants: (data: any[], node: any, config: Pick<import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode, "keyAttr" | "parentIdAttr" | "rootParentId">) => any[];
    filterTreeByFlatData: (treeFlatNodes: any[], kw: string, config: import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode & {
        filterAttr: string;
    }) => (import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode & Pick<import("@baifendian/adhere-util/lib/types").IAntdTreeNode, "title" | "key" | "isLeaf" | "children" | "properties">)[];
    filterTree: (treeNodes: (import("@baifendian/adhere-util/lib/types").IAntdTreeNode | import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode)[], kw: string, config: import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode & {
        filterAttr: string;
    }) => (import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode & Pick<import("@baifendian/adhere-util/lib/types").IAntdTreeNode, "title" | "key" | "isLeaf" | "children" | "properties">)[];
    findNodeByKey: (treeData: (import("@baifendian/adhere-util/lib/types").IAntdTreeNode | import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode)[], val: any, config: {
        keyAttr: string;
    }) => import("@baifendian/adhere-util/lib/types").IAntdTreeNode | import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode | null;
    transformTreeData: (treeData: any[], childrenAttr: string, onCallback: (node: any) => import("@baifendian/adhere-util/lib/types").IAntdTreeNode | import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode) => (import("@baifendian/adhere-util/lib/types").IAntdTreeNode | import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode)[];
    getLeafNodesByIndex: (nodes: {
        [props: string]: any;
    }[], childrenAttr?: string | undefined, indexAttr?: string | undefined) => {
        [props: string]: any;
    }[];
    getLeafNodes: (nodes: {
        [props: string]: any;
    }[], childrenAttr?: string | undefined) => {
        [props: string]: any;
    }[];
    getLeafNodeByFlatData: (arr: any[], config: import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode) => {
        [props: string]: any;
    }[];
    getLeafNodeByFlatDataToIndex: (arr: any[], indexAttr?: string | undefined) => {
        [props: string]: any;
    }[];
    getTreeLevel: (nodes: (import("@baifendian/adhere-util/lib/types").IAntdTreeNode | import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode)[]) => number;
    getTreeLevelByIndex: (nodes: (import("@baifendian/adhere-util/lib/types").IAntdTreeNode | import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode)[], indexAttr?: string | undefined) => number;
    getTreeLevelToFlat: (flatArr: any[], config: import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode) => number;
    getTreeLevelByIndexToFlat: (flatArr: any[], config: import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode, indexAttr: string) => number;
    completionIncompleteFlatArr: (treeFlatNodes: any[], incompleteTreeFlatNodes: any, config: import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode) => (import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode & Pick<import("@baifendian/adhere-util/lib/types").IAntdTreeNode | import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode, "key" | "isLeaf" | "children" | "properties">)[];
    excludeAntdTreeNodes: (nodes: import("@baifendian/adhere-util/lib/types").IAntdTreeNode[], excludeKeys: string[]) => (import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode & Pick<import("@baifendian/adhere-util/lib/types").IAntdTreeNode, "title" | "key" | "isLeaf" | "children" | "properties">)[];
    excludeAntdSelectTreeNodes: (nodes: import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode[], excludeKeys: string[]) => (import("@baifendian/adhere-util/lib/types").IFlatTreeArrNode & Pick<import("@baifendian/adhere-util/lib/types").IAntdTreeSelectNode, "key" | "isLeaf" | "children" | "properties" | "label">)[];
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
    off(el: HTMLElement, tag: string, type: string, handler: Function): void;
    addClass(el: any, classes?: string | undefined): void;
    removeClass(el: any, classes?: string | undefined): void;
    hasClass(el: any, className: string): boolean;
    insertAfter(newElement: any, targetElement: any): void;
    prepend(el: any, children: any): void;
    remove(el: any): void;
    getParentElementByTag(el: any, tag: string): HTMLElement | null;
    children(el: any, selector: string): any[];
    objectToDataSet(obj: object, dom: HTMLElement): void;
    dataSetToObject(dom: HTMLElement): object;
    getPageLeft(el: HTMLElement): number;
    getPageTop(el: HTMLElement): number;
    getPageRect(el: HTMLElement): {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    getLeftUntil({ el, untilEl }: {
        el: HTMLElement;
        untilEl: HTMLElement;
    }): number;
    getTopUntil({ el, untilEl }: {
        el: HTMLElement;
        untilEl: HTMLElement;
    }): number;
    getRectUntil({ el, untilEl }: {
        el: HTMLElement;
        untilEl: HTMLElement;
    }): {
        top: number;
        left: number;
        right: number;
        bottom: number;
    };
    isIframeEmbed(): boolean;
    addClickListener: (el: HTMLElement, handler: (e: any) => {}, capture?: boolean | undefined) => Function;
    clickInRange(params: {
        el: HTMLElement;
        rootEl: HTMLElement;
        bodyClickHandler?: Function | undefined;
    }): Function;
    rgbRandom(): string;
    color16Random(): string;
    colorToRgb(color: string): number[];
    rgbToColor(r: string | number, g: string | number, b: string | number): string;
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
    convertBase64UrlToBlob(data: string): Blob | null;
    omitObject(obj: object): object;
} & Plugin;
export default _default;
