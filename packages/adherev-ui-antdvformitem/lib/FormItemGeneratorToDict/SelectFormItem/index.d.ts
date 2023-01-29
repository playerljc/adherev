declare const _default: {
    name: string;
    emits: string[];
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
    computed: {
        targetValue(): any;
    };
    watch: {
        value(value: any): void;
    };
    render(h: any): JSX.Element;
};
export default _default;
