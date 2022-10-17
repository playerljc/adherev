import { CSSProperties, VNode } from 'vue';
declare const _default: import("vue").DefineComponent<{
    beforeClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    beforeStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    afterClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    afterStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    contentClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    contentStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    beforeShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    afterShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    duration: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    renderBefore: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderAfter: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("init" | "slide-change-transition-start" | "slide-change-transition-end")[], "init" | "slide-change-transition-start" | "slide-change-transition-end", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    beforeClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    beforeStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    afterClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    afterStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    contentClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    contentStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    beforeShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    afterShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    duration: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    renderBefore: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderAfter: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}>> & {
    onInit?: ((...args: any[]) => any) | undefined;
    "onSlide-change-transition-start"?: ((...args: any[]) => any) | undefined;
    "onSlide-change-transition-end"?: ((...args: any[]) => any) | undefined;
}, {
    beforeClassName: string;
    beforeStyle: CSSProperties;
    afterClassName: string;
    afterStyle: CSSProperties;
    contentClassName: string;
    contentStyle: CSSProperties;
    beforeShow: boolean;
    afterShow: boolean;
    direction: string;
    duration: number;
}>;
export default _default;
