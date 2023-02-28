import { VNode } from 'vue';
declare const _default: import("vue").DefineComponent<{
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    renderEditorTable: import("vue-types").VueTypeDef<string | (() => VNode)>;
    renderSave: import("vue-types").VueTypeDef<string | (() => VNode)>;
    renderCancel: import("vue-types").VueTypeDef<string | (() => VNode)>;
    onEditor: import("vue-types").VueTypeValidableDef<() => Promise<void>>;
    onSave: import("vue-types").VueTypeValidableDef<(values: {
        [prop: string]: any;
    }[]) => Promise<void>>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("renderSave" | "renderCancel" | "renderEditorTable")[], "renderSave" | "renderCancel" | "renderEditorTable", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    renderEditorTable: import("vue-types").VueTypeDef<string | (() => VNode)>;
    renderSave: import("vue-types").VueTypeDef<string | (() => VNode)>;
    renderCancel: import("vue-types").VueTypeDef<string | (() => VNode)>;
    onEditor: import("vue-types").VueTypeValidableDef<() => Promise<void>>;
    onSave: import("vue-types").VueTypeValidableDef<(values: {
        [prop: string]: any;
    }[]) => Promise<void>>;
}>> & {
    onRenderSave?: ((...args: any[]) => any) | undefined;
    onRenderCancel?: ((...args: any[]) => any) | undefined;
    onRenderEditorTable?: ((...args: any[]) => any) | undefined;
}, {
    rowKey: string;
}>;
export default _default;
