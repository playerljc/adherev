import { ExtractPropTypes, VNode } from 'vue';
export declare const sectionProps: {
    title: import("vue-types").VueTypeDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | import("vue-types").VueTypeValidableDef<string>>;
    extra: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
};
export declare type SectionProps = Partial<ExtractPropTypes<typeof sectionProps>>;
declare const _default: import("vue").DefineComponent<{
    title: import("vue-types").VueTypeDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | import("vue-types").VueTypeValidableDef<string>>;
    extra: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    title: import("vue-types").VueTypeDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | import("vue-types").VueTypeValidableDef<string>>;
    extra: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}>>, {}>;
export default _default;
