declare const _default: {
    name: string;
    props: {
        checkBoxGroupProps: {
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
    emits: string[];
    data(): {
        checkAll: boolean;
    };
    watch: {
        value(value: any): void;
        dataSource(dataSource: any): void;
    };
    render(h: any): JSX.Element;
};
export default _default;
