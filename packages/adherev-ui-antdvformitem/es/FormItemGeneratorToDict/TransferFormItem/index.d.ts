declare const _default: {
    name: string;
    props: {
        transferProps: {
            type: ObjectConstructor;
            default: () => {};
        };
        dataSource: {
            type: ArrayConstructor;
            default: () => never[];
        };
        value: {
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
    render(h: any): any;
};
export default _default;
