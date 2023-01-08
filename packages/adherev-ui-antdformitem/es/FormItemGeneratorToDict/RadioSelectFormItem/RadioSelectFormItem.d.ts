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
    data(): {
        inputValue: string;
    };
    methods: {
        $renderDropdownRender(h: any): JSX.Element;
    };
    render(h: any): any;
};
export default _default;
