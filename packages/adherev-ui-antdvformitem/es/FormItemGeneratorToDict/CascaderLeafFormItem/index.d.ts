declare const _default: {
    name: string;
    props: {
        cascaderProps: {
            type: ObjectConstructor;
            default: () => {};
        };
        value: {
            type: ArrayConstructor;
            default: () => never[];
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
