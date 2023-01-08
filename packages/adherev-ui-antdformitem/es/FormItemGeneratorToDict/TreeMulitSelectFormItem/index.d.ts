declare const _default: {
    name: string;
    mixins: {
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
        render(h: any): JSX.Element;
    }[];
    props: {
        value: {
            type: ArrayConstructor;
            default: () => never[];
        };
    };
    render(h: any): JSX.Element;
};
export default _default;
