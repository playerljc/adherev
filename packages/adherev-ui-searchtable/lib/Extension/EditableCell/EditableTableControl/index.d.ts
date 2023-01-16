import { PropType, VNode } from 'vue';
declare const _default: {
    name: string;
    props: {
        rowKey: {
            type: StringConstructor;
        };
        renderEditorTable: {
            type: PropType<() => VNode>;
        };
        renderSave: {
            type: PropType<() => VNode>;
        };
        renderCancel: {
            type: PropType<() => VNode>;
        };
        onEditor: {
            type: PropType<() => Promise<void>>;
        };
        onSave: {
            type: PropType<(values: {
                [prop: string]: any;
            }[]) => Promise<void>>;
        };
    };
    emits: string[];
    inject: string[];
    methods: {
        renderDefaultSave(h: any): JSX.Element;
        renderDefaultCancel(h: any): JSX.Element;
        renderDefaultEditorTable(h: any): JSX.Element;
        $onEditor(): void;
        $onSave(): void;
        validateFieldsSuccess(values: any): void;
        updateEditorCellTableData(changeData: any): void;
        updateTableEdit(): void;
        reset(): void;
    };
    render(h: any): JSX.Element;
};
export default _default;
