export declare const CodeBoxPanelPropTypes: {
    title: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    extra: {
        type: ObjectConstructor;
        default: () => null;
    };
    isShowExpandAllBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    config: {
        type: ArrayConstructor;
        default: () => never[];
    };
};
declare const CodeBoxPanel: any;
export default CodeBoxPanel;
