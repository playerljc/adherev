declare const _default: {
    name: string;
    props: {
        selectProps: {
            type: ObjectConstructor;
            default: () => {};
        };
        listProps: {
            type: ObjectConstructor;
            default: () => {};
        };
        value: {
            type: StringConstructor;
            default: string;
        };
        dataSource: {
            type: ArrayConstructor;
            default: () => never[];
        };
        rowKey: {
            type: StringConstructor;
            default: string;
        };
        labelKey: {
            type: StringConstructor;
            default: string;
        };
    };
    emits: string[];
    data(): {
        selectedRowKeys: any[];
        selectedRows: any;
    };
    watch: {
        value(value: any): void;
    };
    methods: {
        RadioWrap(h: any, item: any): JSX.Element;
    };
    render(h: any): any;
};
export default _default;
