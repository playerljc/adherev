declare const _default: {
    name: string;
    props: {
        treeSelectProps: {
            type: ObjectConstructor;
            default: () => {};
        };
        value: {
            type: StringConstructor;
            default: () => string;
        };
        dataSource: {
            type: ArrayConstructor;
            default: () => never[];
        };
    };
    computed: {
        targetDataSource(): any;
    };
    render(h: any): any;
};
export default _default;
