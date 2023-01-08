declare const _default: {
    name: string;
    props: {
        radioGroupProps: {
            type: ObjectConstructor;
            default: () => {};
        };
        value: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        dataSource: {
            type: ArrayConstructor;
            default: () => never[];
        };
    };
    render(h: any): any;
};
export default _default;
