declare const _default: {
    name: string;
    props: {
        selectProps: {
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
    render(h: any): JSX.Element;
};
export default _default;
