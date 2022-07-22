declare const _default: {
    name: string;
    props: {
        tableClassName: {
            type: StringConstructor;
            default: string;
        };
        tableStyle: {
            type: StringConstructor;
            default: string;
        };
        columns: {
            type: ArrayConstructor;
            default: () => never[];
        };
        dataSource: {
            type: ArrayConstructor;
            default: () => never[];
        };
        rowKey: {
            type: StringConstructor;
        };
    };
    methods: {
        renderHeader(h: any): any;
        renderBody(h: any): any;
    };
    render(h: any): any;
};
export default _default;
