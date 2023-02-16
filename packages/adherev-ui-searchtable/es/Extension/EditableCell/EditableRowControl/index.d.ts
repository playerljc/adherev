import { VNode } from 'vue';
declare const _default: import("vue").DefineComponent<{
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    rowIndex: import("vue-types").VueTypeValidableDef<number>;
    editorRowId: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    record: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    renderEditorRow: import("vue-types").VueTypeDef<string | (() => VNode)>;
    renderSave: import("vue-types").VueTypeDef<string | (() => VNode)>;
    renderCancel: import("vue-types").VueTypeDef<string | (() => VNode)>;
    onSave: import("vue-types").VueTypeValidableDef<(values: {
        [props: string]: any;
    }) => Promise<void>>;
    onEditor: import("vue-types").VueTypeValidableDef<(id: string) => Promise<void>>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("renderEditorRow" | "renderSave" | "renderCancel")[], "renderEditorRow" | "renderSave" | "renderCancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    rowIndex: import("vue-types").VueTypeValidableDef<number>;
    editorRowId: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    record: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    renderEditorRow: import("vue-types").VueTypeDef<string | (() => VNode)>;
    renderSave: import("vue-types").VueTypeDef<string | (() => VNode)>;
    renderCancel: import("vue-types").VueTypeDef<string | (() => VNode)>;
    onSave: import("vue-types").VueTypeValidableDef<(values: {
        [props: string]: any;
    }) => Promise<void>>;
    onEditor: import("vue-types").VueTypeValidableDef<(id: string) => Promise<void>>;
}>> & {
    onRenderEditorRow?: ((...args: any[]) => any) | undefined;
    onRenderSave?: ((...args: any[]) => any) | undefined;
    onRenderCancel?: ((...args: any[]) => any) | undefined;
}, {
    record: {
        [key: string]: any;
    };
    rowKey: string;
    editorRowId: string;
}>;
export default _default;
