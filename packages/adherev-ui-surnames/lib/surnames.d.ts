declare enum positionType {
    top = "top",
    right = "right",
    bottom = "bottom",
    left = "left"
}
declare const _default: import("vue").DefineComponent<{
    position: import("vue-types").VueTypeValidableDef<positionType> & {
        default: positionType;
    };
    indexes: import("vue-types").VueTypeValidableDef<{
        index: string;
    }[]> & {
        default: () => {
            index: string;
        }[];
    };
    dataSource: import("vue-types").VueTypeValidableDef<{
        index: string;
        data: object[];
    }[]> & {
        default: () => {
            index: string;
            data: object[];
        }[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "before-scroll")[], "scroll" | "before-scroll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: import("vue-types").VueTypeValidableDef<positionType> & {
        default: positionType;
    };
    indexes: import("vue-types").VueTypeValidableDef<{
        index: string;
    }[]> & {
        default: () => {
            index: string;
        }[];
    };
    dataSource: import("vue-types").VueTypeValidableDef<{
        index: string;
        data: object[];
    }[]> & {
        default: () => {
            index: string;
            data: object[];
        }[];
    };
}>> & {
    onScroll?: ((...args: any[]) => any) | undefined;
    "onBefore-scroll"?: ((...args: any[]) => any) | undefined;
}, {
    position: positionType;
    indexes: {
        index: string;
    }[];
    dataSource: {
        index: string;
        data: object[];
    }[];
}>;
export default _default;
