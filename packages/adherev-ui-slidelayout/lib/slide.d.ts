export declare enum direction {
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right"
}
export declare const slideProps: {
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    mask: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    time: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    direction: import("vue-types").VueTypeValidableDef<direction> & {
        default: direction;
    };
    defaultCollapse: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
};
export default function useSlide(props: any, { emit }: any): {
    setPositionConfig: (callback: ({ el, maskEl }: any) => object) => void;
    getDuration: (time: undefined | null | string | number) => any;
    getElRef: () => import("vue").Ref<HTMLElement | undefined>;
};
