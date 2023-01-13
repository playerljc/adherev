import { PropType, VNode } from 'vue';
declare const _default: {
    name: string;
    props: {
        rowKey: {
            type: StringConstructor;
        };
        editorRowId: {
            type: StringConstructor;
        };
        record: {
            type: PropType<{
                [prop: string]: any;
            }>;
            default: () => {};
        };
        renderEditorRow: {
            type: PropType<() => VNode>;
        };
        renderSave: {
            type: PropType<() => VNode>;
        };
        renderCancel: {
            type: PropType<() => VNode>;
        };
        onSave: {
            type: PropType<(values: {
                [props: string]: any;
            }) => Promise<void>>;
        };
        onEditor: {
            type: PropType<(id: string) => Promise<void>>;
        };
    };
    emits: string[];
    inject: string[];
    methods: {
        renderDefaultEditorRow(h: any): JSX.Element;
        renderDefaultCancel(h: any): JSX.Element;
        renderDefaultSave(h: any): JSX.Element;
        validateFieldsSuccess(values: any): void;
        updateEditorCellRowData(values: any): void;
        updateRowEdit(): void;
        reset(): void;
        $onEditor(): void;
    };
    render(h: any): JSX.Element;
};
export default _default;
