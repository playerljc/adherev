declare const _default: {
    name: string;
    props: {
        selectProps: {
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
    render(h: any): JSX.Element;
};
export default _default;
