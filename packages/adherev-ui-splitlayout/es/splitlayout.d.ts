declare const _default: import("vue").DefineComponent<{
    maxSize: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    minSize: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("canDrag" | "dragStarted" | "dragFinished" | "change")[], "canDrag" | "dragStarted" | "dragFinished" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    maxSize: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    minSize: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
}>> & {
    onCanDrag?: ((...args: any[]) => any) | undefined;
    onDragStarted?: ((...args: any[]) => any) | undefined;
    onDragFinished?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    maxSize: string | number;
    minSize: string | number;
}>;
export default _default;
