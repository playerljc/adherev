/**
 * ConditionalRender
 */
declare const _default: import("vue").DefineComponent<{
    conditional: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    conditional: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}>>, {
    conditional: boolean;
}>;
export default _default;
