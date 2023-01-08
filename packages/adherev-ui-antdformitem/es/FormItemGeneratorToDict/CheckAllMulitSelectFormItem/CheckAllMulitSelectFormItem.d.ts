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
    emits: string[];
    data(): {
        checked: boolean;
    };
    watch: {
        value(val: any): void;
        dataSource(dataSource: any): void;
    };
    methods: {
        $onCheckAllChange(e: any): void;
        $onChange(values: any): void;
        $dropdownRender(h: any, menu: any): JSX.Element;
    };
    render(h: any): any;
};
export default _default;
