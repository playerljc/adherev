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
        computed: {
            targetValue(): any;
        };
        watch: {
            value(value: any): void;
        };
        methods: {
            $exists(value: any): null;
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
