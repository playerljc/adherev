declare const _default: {
    name: string;
    props: {
        selectProps: {
            type: ObjectConstructor;
            default: () => {};
        };
        transferProps: {
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
        selectedKeys: never[];
    };
    methods: {
        $renderDropdownRender(h: any): JSX.Element;
    };
    render(h: any): any;
};
export default _default;
