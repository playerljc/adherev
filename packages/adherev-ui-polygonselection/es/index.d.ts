import { App, Plugin } from 'vue';
declare const _default: {
    PolygonSelection: typeof import("@baifendian/adhere-ui-polygonselection/lib/PolygonSelection").default;
    CircleDrawAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/draw/CircleDrawAction").default;
    DiamondDrawAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/draw/DiamondDrawAction").default;
    DrawAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/draw/DrawAction").default;
    FreeDrawAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/draw/FreeDrawAction").default;
    PolygonDrawAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/draw/PolygonDrawAction").default;
    RectangleDrawAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/draw/RectangleDrawAction").default;
    StartDrawAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/draw/StartDrawAction").default;
    TriangleDrawAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/draw/TriangleDrawAction").default;
    CircleModifyAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/modify/CircleModifyAction").default;
    DiamondModifyAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/modify/DiamondModifyAction").default;
    ModifyAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/modify/ModifyAction").default;
    PolygonModifyAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/modify/PolygonModifyAction").default;
    RectangleModifyAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/modify/RectangleModifyAction").default;
    StartModifyAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/modify/StartModifyAction").default;
    TriangleModifyAction: typeof import("@baifendian/adhere-ui-polygonselection/lib/modify/TriangleModifyAction").default;
    DefaultAnchorStyle: {
        fillStyle: string;
        strokeStyle: string;
        lineWidth: number;
        lineCap: string;
        lineJoin: string;
        lineDash: number[];
        lineDashOffset: number;
    };
    DefaultMoveGemStyle: {
        strokeStyle: string;
        lineWidth: number;
        lineDash: number[];
        lineDashOffset: number;
        globalAlpha: number;
    };
    DefaultStyle: {
        fillStyle: string;
        strokeStyle: string;
        lineWidth: number;
        lineCap: string;
        lineJoin: string;
        lineDash: never[];
        lineDashOffset: number;
    };
    Util: {
        getRectLeftTopPoint({ startPoint, targetPoint }: {
            startPoint: any;
            targetPoint: any;
        }): import("@baifendian/adhere-ui-polygonselection/lib/types").IPoint | null;
        triangle({ startPoint, targetPoint }: {
            startPoint: any;
            targetPoint: any;
        }): import("@baifendian/adhere-ui-polygonselection/lib/types").IPoint[];
    };
    Types: typeof import("@baifendian/adhere-ui-polygonselection/lib/types");
} & {
    install?: ((app: App<any>) => App<any>) | undefined;
} & Plugin;
export default _default;
